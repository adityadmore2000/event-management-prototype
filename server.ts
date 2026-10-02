import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';
import {
  searchCatalogue,
  getItemById,
  getAllItems,
  parseBudgetFromQuery,
  parseGuestCountFromQuery,
  SearchCriteria
} from './server/catalogueSearch.ts';
import { WEDDING_CATALOGUE, CATALOGUE_CATEGORIES, DECORATION_SUB_SERVICES } from './src/data/weddingCatalogue.ts';
import { CatalogueItem } from './src/types/catalogue.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// ----------------- CATALOGUE API ROUTES -----------------

// List all catalogue items with optional filtering
app.get('/api/catalogue', (req, res) => {
  const { category, subService, style, maxBudget, flowerType, search } = req.query;

  if (category || subService || style || maxBudget || flowerType || search) {
    const results = searchCatalogue({
      query: (search as string) || undefined,
      category: (category as string) || undefined,
      subService: (subService as string) || undefined,
      style: (style as string) || undefined,
      flowerType: (flowerType as string) || undefined,
      maxBudget: maxBudget ? parseInt(maxBudget as string, 10) : undefined,
    });
    return res.json({ items: results.items, total: results.items.length });
  }

  const all = getAllItems();
  res.json({ items: all, total: all.length });
});

// Get single catalogue item by ID
app.get('/api/catalogue/:id', (req, res) => {
  const item = getItemById(req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Catalogue item not found' });
  }
  res.json({ item });
});

// Categories & sub-services metadata
app.get('/api/metadata', (_req, res) => {
  res.json({
    categories: CATALOGUE_CATEGORIES,
    decorationSubServices: DECORATION_SUB_SERVICES,
  });
});

// ----------------- AI CHAT & DISCOVERY ROUTE -----------------

const searchTool: FunctionDeclaration = {
  name: 'searchWeddingCatalogue',
  description:
    'Search the authoritative Indian wedding catalogue for offerings, decoration items, stages, mandaps, catering, packages, or services based on customer criteria.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      query: {
        type: Type.STRING,
        description: 'Freeform search query or Indian wedding keyword (e.g. "phoolon wala mandap", "royal mandap", "haldi jhoola", "marigold decor", "simple wedding")',
      },
      category: {
        type: Type.STRING,
        description: 'Specific category: "Decoration", "Catering", "Venue", "Photography & Videography", "Entertainment", "Makeup & Mehndi", "Event Rentals", "Complete Wedding Packages"',
      },
      subService: {
        type: Type.STRING,
        description: 'Decoration sub-service: Mandap, Stage, Entry Decoration, Flower Decoration, Backdrop, Ceiling Decoration, Lighting, Table Decoration, Sofa & Seating, Bride/Groom Entry, Haldi Decoration, Mehndi Decoration, Photo Booth, Decorative Props, Decoration Packages',
      },
      maxBudget: {
        type: Type.NUMBER,
        description: 'Maximum budget limit in INR (e.g. 50000, 100000, 225000)',
      },
      guestCount: {
        type: Type.NUMBER,
        description: 'Number of wedding guests (e.g. 150, 200, 300)',
      },
      flowerType: {
        type: Type.STRING,
        description: '"Fresh Flowers", "Artificial Flowers", "Mixed", or "None"',
      },
      style: {
        type: Type.STRING,
        description: 'Style such as "Royal Rajasthani", "Traditional Temple", "Modern Minimalist", "Floral & Romantic", "Boho & Colorful"',
      },
      packageOnly: {
        type: Type.BOOLEAN,
        description: 'Set to true if user specifically wants bundled packages rather than individual components',
      },
    },
  },
};

const getItemDetailsTool: FunctionDeclaration = {
  name: 'getItemDetails',
  description: 'Retrieve complete specifications, inclusions, exclusions, and pricing for a specific catalogue item by ID.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      itemId: {
        type: Type.STRING,
        description: 'The unique ID of the catalogue item (e.g., "decor-mandap-01", "decor-pkg-01")',
      },
    },
    required: ['itemId'],
  },
};

// Conversational Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const latestMessage = messages[messages.length - 1].content;
  const detectedBudget = parseBudgetFromQuery(latestMessage);
  const detectedGuests = parseGuestCountFromQuery(latestMessage);

  // Pre-search relevant items based on current message & chat history context
  const preSearchResult = searchCatalogue({
    query: latestMessage,
    maxBudget: detectedBudget,
    guestCount: detectedGuests,
  });

  // Track matched items to return to the UI for rich cards
  let matchedItems: CatalogueItem[] = preSearchResult.items.slice(0, 4);

  // Build system instruction with strict catalogue grounding and concise conversational style
  const systemInstruction = `
You are an expert, warm, and highly knowledgeable Indian wedding consultant at "Vivaah Weddings".
Your primary role is to understand what the couple or family wants in natural language and guide them to the right offerings in our wedding catalogue.

CONCISE & CONVERSATIONAL STYLE:
1. Keep your responses concise, warm, and conversational (typically 2-4 sentences).
2. Do NOT output long walls of text or full lists of item specs in the chat message, because the user will see rich visual catalogue cards with images, prices, and inclusions directly underneath your response.
3. Introduce the closest matching options naturally.
   Example: "I found three floral mandap options that would work beautifully for a 150-guest wedding. Here are the closest matches from our collection:"
4. Ask a natural, helpful follow-up question to help narrow preferences (e.g. "Would you prefer a traditional look with marigolds and brass bells, or a romantic pastel rose aesthetic?").
5. The customer experience must feel like speaking with a gracious wedding planner. NEVER mention internal terms like "catalogue is the source of truth", "database", "query understanding", "semantic matching", "system rules", or "prototype".
6. Strictly ground all facts: If asked about prices or inclusions, only state what is verified in the catalogue. If a custom modification (like deducting price for removing an item from a package) is not specified, state politely that package components cannot be deducted from the fixed bundle price.
`;

  // Fallback generation helper if Gemini API is unavailable or errors
  const generateRuleBasedResponse = (): {
    reply: string;
    matchedItems: CatalogueItem[];
    suggestedQueries: string[];
  } => {
    const qLower = latestMessage.toLowerCase();
    let reply = '';
    const suggested: string[] = [];

    // Check specific package inquiries
    if (qLower.includes('difference between') && (qLower.includes('package') || qLower.includes('standard') || qLower.includes('premium'))) {
      const standard = getItemById('decor-pkg-01');
      const premium = getItemById('decor-pkg-02');
      reply = `Here is how our two main decoration packages compare:\n\n• **${standard?.name} (${standard?.priceFormatted})**: Ideal for intimate gatherings of 100–150 guests. It brings together a traditional floral temple mandap, stage, welcoming entrance with brass urlis, and ambient lighting.\n\n• **${premium?.name} (${premium?.priceFormatted})**: Built for grand royal celebrations of 200–500 guests. It includes our carved dome mandap, a 32ft royal jaimala stage, a 30ft grand floral entrance tunnel, crystal chandeliers, and maharaja thrones.\n\nWould you like more details on either package?`;
      matchedItems = [standard, premium].filter(Boolean) as CatalogueItem[];
      suggested.push(
        'What is included in the Shubh Aarambh package?',
        'Can I add cold pyro entry to the package?',
        'Show me individual floral mandaps'
      );
      return { reply, matchedItems, suggestedQueries: suggested };
    }

    if (qLower.includes('what') && qLower.includes('included in') && (qLower.includes('shubh') || qLower.includes('package'))) {
      const pkg = getItemById('decor-pkg-01');
      if (pkg) {
        reply = `The **${pkg.name}** (${pkg.priceFormatted}) is curated for 100–150 guests and includes the Vedic temple mandap, wedding stage with marigold backdrop, brass urli welcome entrance, and warm ambient lighting. You can review the full inclusions and add-on options in the card below. Would you like to customize any color themes?`;
        matchedItems = [pkg];
        suggested.push(
          'What about the Rajwada Grandeur package?',
          'Can we add a photo booth to this?',
          'Show me individual floral mandaps'
        );
        return { reply, matchedItems, suggestedQueries: suggested };
      }
    }

    if (qLower.includes('food') && qLower.includes('photo') && (qLower.includes('decor') || qLower.includes('wedding'))) {
      // Cross-category
      const completePkg = getItemById('pkg-complete-01');
      const catering = getItemById('catering-01');
      const decor = getItemById('decor-pkg-01');
      const photo = getItemById('photo-01');
      reply = `We can take care of your food, decoration, and photography together. You can choose our complete **${completePkg?.name} (${completePkg?.priceFormatted})**, or curate individual services to match your preferences. Here are the most popular options:`;
      matchedItems = [completePkg, decor, catering, photo].filter(Boolean) as CatalogueItem[];
      suggested.push(
        'Tell me more about the Anand complete package',
        'What menu is included in the catering?',
        'Show me royal stage options'
      );
      return { reply, matchedItems, suggestedQueries: suggested };
    }

    if (qLower.includes('under') && (qLower.includes('50000') || qLower.includes('50,000') || qLower.includes('50k'))) {
      const budgetItems = searchCatalogue({ maxBudget: 50000, query: latestMessage }).items.slice(0, 4);
      reply = `Here are our top decoration offerings under ₹50,000 that offer wonderful craftsmanship and fresh floral aesthetics. Are you looking primarily for a mandap, a stage, or entrance decor?`;
      matchedItems = budgetItems;
      suggested.push(
        'What is included in the Vedic Temple Mandap?',
        'Show me stages under ₹50,000',
        'Can we combine mandap and stage under ₹1 Lakh?'
      );
      return { reply, matchedItems, suggestedQueries: suggested };
    }

    if (qLower.includes('150') || (qLower.includes('simple') && qLower.includes('spend'))) {
      const pkg = getItemById('decor-pkg-01');
      const mandap = getItemById('decor-mandap-03');
      const stage = getItemById('decor-stage-02');
      reply = `For an intimate wedding of around 150 guests with tasteful floral decoration, our **${pkg?.name} (${pkg?.priceFormatted})** is the most seamless choice. Alternatively, you can book our standalone **${mandap?.name}** and matching stage. Here are the best options for your guest count:`;
      matchedItems = [pkg, mandap, stage].filter(Boolean) as CatalogueItem[];
      suggested.push(
        'What is included in the Shubh Aarambh package?',
        'Does it include fresh flowers?',
        'Show me fairy light and ambient lighting options'
      );
      return { reply, matchedItems, suggestedQueries: suggested };
    }

    if (qLower.includes('phoolon wala') || qLower.includes('floral mandap') || qLower.includes('mandap with flowers') || qLower.includes('fresh flowers')) {
      const floralMandap = getItemById('decor-mandap-01');
      const templeMandap = getItemById('decor-mandap-03');
      const pastelMandap = getItemById('decor-mandap-04');
      reply = `Here are our most popular floral mandap options featuring fresh, fragrant blooms. Which style appeals to you more—fragrant roses and tuberoses, traditional marigolds, or contemporary pastel flowers?`;
      matchedItems = [floralMandap, templeMandap, pastelMandap].filter(Boolean) as CatalogueItem[];
      suggested.push(
        'What is included in the Vrindavan Blossom Mandap?',
        'Show me something traditional under ₹50,000',
        'Do you have matching floral stage decoration?'
      );
      return { reply, matchedItems, suggestedQueries: suggested };
    }

    if (qLower.includes('rajwadi') || qLower.includes('royal mandap') || qLower.includes('rajasthani')) {
      const royalMandap = getItemById('decor-mandap-02');
      const royalStage = getItemById('decor-stage-01');
      const royalPkg = getItemById('decor-pkg-02');
      reply = `For a royal palace-inspired wedding, here are our premier Rajwadi mandap, jaimala stage, and complete heritage decor options:`;
      matchedItems = [royalMandap, royalStage, royalPkg].filter(Boolean) as CatalogueItem[];
      suggested.push(
        'What is included in the Rajwada Shahi Dome Mandap?',
        'Can we add warm bistro lighting?',
        'Show me traditional welcome entry pathways'
      );
      return { reply, matchedItems, suggestedQueries: suggested };
    }

    // Broad discovery fallback
    if (preSearchResult.items.length > 0) {
      matchedItems = preSearchResult.items.slice(0, 3);
      reply = `Here are offerings that match what you described. Which of these catches your eye?`;
    } else {
      reply = `We would be delighted to help you explore our wedding collection. We offer mandaps, stages, floral entryways, haldi & mehndi setups, catering, and complete packages. Do you have a preferred theme or guest count in mind?`;
      matchedItems = WEDDING_CATALOGUE.filter(i => i.isFeatured).slice(0, 3);
    }

    suggested.push(
      'Floral mandap under ₹60,000',
      'What decoration packages do you have?',
      'Simple wedding setup for 150 guests'
    );

    return { reply, matchedItems, suggestedQueries: suggested };
  };

  // Try calling Gemini if API key is configured
  if (ai) {
    try {
      // Prepare catalogue context data for Gemini
      const candidateListSummary = WEDDING_CATALOGUE.map(item => ({
        id: item.id,
        name: item.name,
        category: item.category,
        subService: item.subService,
        priceFormatted: item.priceFormatted,
        price: item.price,
        pricingType: item.pricingType,
        style: item.style,
        flowerType: item.flowerType,
        suitableFor: item.suitableFor,
        whatsIncluded: item.whatsIncluded,
        whatsNotIncluded: item.whatsNotIncluded,
        guestRange: item.guestRange,
        tags: item.tags
      }));

      // Format conversation turns for Gemini
      const conversationContents = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      // Add catalogue source of truth context to the request
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: conversationContents,
        config: {
          systemInstruction: `${systemInstruction}
Here is the authoritative catalogue data available in our database. Rely strictly on this data:
${JSON.stringify(candidateListSummary, null, 2)}

In your response:
1. Provide a warm, conversational, consultation-style reply.
2. If you refer to or recommend catalogue items, mention their exact name and price.
3. At the very end of your response, output a single JSON block formatted exactly as:
\`\`\`catalogue_data
{
  "itemIds": ["id-1", "id-2"],
  "suggestedQueries": ["Question 1?", "Question 2?", "Question 3?"]
}
\`\`\`
`,
        },
      });

      const responseText = response.text || '';

      // Extract JSON block if present
      let finalReply = responseText;
      let recommendedIds: string[] = [];
      let suggestedQueries: string[] = [];

      const jsonMatch = responseText.match(/```catalogue_data\s*([\s\S]*?)\s*```/);
      if (jsonMatch) {
        try {
          const parsed = JSON.parse(jsonMatch[1]);
          if (Array.isArray(parsed.itemIds)) {
            recommendedIds = parsed.itemIds;
          }
          if (Array.isArray(parsed.suggestedQueries)) {
            suggestedQueries = parsed.suggestedQueries;
          }
          finalReply = responseText.replace(/```catalogue_data[\s\S]*?```/, '').trim();
        } catch {
          // If JSON parse fails, keep cleaned response
          finalReply = responseText.replace(/```catalogue_data[\s\S]*?```/, '').trim();
        }
      }

      // Map recommended IDs to full items
      if (recommendedIds.length > 0) {
        const foundItems = recommendedIds
          .map(id => getItemById(id))
          .filter(Boolean) as CatalogueItem[];
        if (foundItems.length > 0) {
          matchedItems = foundItems;
        }
      } else {
        // Fallback to pre-search items if none explicitly listed
        matchedItems = preSearchResult.items.slice(0, 3);
      }

      if (suggestedQueries.length === 0) {
        suggestedQueries = [
          'What is included in this option?',
          'Show me a simpler floral option',
          'What decoration packages do you have?'
        ];
      }

      return res.json({
        reply: finalReply,
        matchedItems,
        suggestedQueries,
        filtersApplied: preSearchResult.appliedFilters,
      });
    } catch (err: unknown) {
      console.warn('Gemini API call failed or encountered error, falling back to catalogue rule engine:', err);
      // Fall through to rule-based response
    }
  }

  // Graceful rule-based response
  const fallback = generateRuleBasedResponse();
  return res.json({
    reply: fallback.reply,
    matchedItems: fallback.matchedItems,
    suggestedQueries: fallback.suggestedQueries,
    filtersApplied: preSearchResult.appliedFilters,
  });
});

// ----------------- VITE / STATIC SERVING -----------------

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    // Development mode: attach Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: serve built assets from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Vivaah AI Wedding Catalogue Server running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
