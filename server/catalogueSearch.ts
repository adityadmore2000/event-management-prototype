import { WEDDING_CATALOGUE } from '../src/data/weddingCatalogue.ts';
import { CatalogueItem, CatalogueCategory, DecorationSubService } from '../src/types/catalogue.ts';

export interface SearchCriteria {
  query?: string;
  category?: CatalogueCategory | string;
  subService?: DecorationSubService | string;
  maxBudget?: number;
  minBudget?: number;
  guestCount?: number;
  flowerType?: string;
  style?: string;
  packageOnly?: boolean;
}

export interface SearchResult {
  items: CatalogueItem[];
  appliedFilters: {
    maxBudget?: number;
    guestCount?: number;
    category?: string;
    subService?: string;
    style?: string;
  };
}

// Extracts explicit numeric budget constraints from user queries
export function parseBudgetFromQuery(query: string): number | undefined {
  const normalized = query.toLowerCase();

  // Pattern: "under 1 lakh", "under 1.5 lakh", "1 lakh"
  const lakhMatch = normalized.match(/under\s*(?:₹|rs\.?|inr)?\s*([0-9.]+)\s*(?:lakh|lac|lacs)/i) ||
                    normalized.match(/(?:budget|around|upto|within)\s*(?:₹|rs\.?|inr)?\s*([0-9.]+)\s*(?:lakh|lac|lacs)/i);
  if (lakhMatch) {
    const val = parseFloat(lakhMatch[1]);
    if (!isNaN(val)) return Math.round(val * 100000);
  }

  // Pattern: "under 50k", "under 50,000", "under ₹50000", "< 50000"
  const kMatch = normalized.match(/under\s*(?:₹|rs\.?|inr)?\s*([0-9]+)\s*k\b/i) ||
                 normalized.match(/(?:budget|around|upto|within)\s*(?:₹|rs\.?|inr)?\s*([0-9]+)\s*k\b/i);
  if (kMatch) {
    const val = parseInt(kMatch[1], 10);
    if (!isNaN(val)) return val * 1000;
  }

  const numMatch = normalized.match(/under\s*(?:₹|rs\.?|inr)?\s*([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,7})/i) ||
                   normalized.match(/(?:budget|around|upto|within|below)\s*(?:of\s*)?(?:₹|rs\.?|inr)?\s*([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,7})/i);
  if (numMatch) {
    const cleanNum = numMatch[1].replace(/,/g, '');
    const val = parseInt(cleanNum, 10);
    if (!isNaN(val)) return val;
  }

  return undefined;
}

// Extracts guest count from user query
export function parseGuestCountFromQuery(query: string): number | undefined {
  const normalized = query.toLowerCase();
  const match = normalized.match(/([0-9]{2,4})\s*(?:guests|people|persons|pax|members|invited)/i) ||
                normalized.match(/for\s*(?:around\s*)?([0-9]{2,4})\b/i);
  if (match) {
    const val = parseInt(match[1], 10);
    if (!isNaN(val)) return val;
  }
  return undefined;
}

// Search and rank catalogue items
export function searchCatalogue(criteria: SearchCriteria): SearchResult {
  let queryText = (criteria.query || '').trim().toLowerCase();
  const detectedBudget = criteria.maxBudget ?? parseBudgetFromQuery(queryText);
  const detectedGuests = criteria.guestCount ?? parseGuestCountFromQuery(queryText);

  // Synonyms and normalization mappings
  const synonymMap: Record<string, string[]> = {
    'phoolon wala': ['flower', 'floral', 'fresh flowers', 'rose', 'mogra'],
    'phool': ['flower', 'floral', 'flowers'],
    'rajwadi': ['royal', 'rajasthani', 'shahi', 'dome'],
    'rajputana': ['royal', 'rajasthani'],
    'simple': ['traditional simple', 'minimalist', 'intimate', 'shubh aarambh', 'budget'],
    'classy': ['elegant', 'minimalist', 'romantic', 'pastel', 'fresh floral'],
    'not too flashy': ['simple', 'pastel', 'minimalist', 'subtle', 'intimate'],
    'not flashy': ['simple', 'pastel', 'minimalist', 'subtle', 'intimate'],
    'not too expensive': ['budget', 'affordable', 'under 50000', 'shubh aarambh'],
    'food': ['catering', 'buffet', 'dawat', 'chaat'],
    'photos': ['photography & videography', 'photography', 'candid'],
    'video': ['photography & videography', 'cinematic'],
    'haldi': ['haldi decoration', 'jhoola', 'marigold', 'urli'],
    'mehndi': ['mehndi decoration', 'mehendi', 'henna', 'boho'],
    'mehendi': ['mehndi decoration', 'henna'],
    'genda phool': ['marigold', 'fresh flowers'],
    'genda': ['marigold'],
    'stage': ['stage', 'jaimala', 'reception stage'],
    'mandap': ['mandap', 'phere'],
    'entry': ['entry decoration', 'tunnel', 'chaadar', 'pathway'],
    'lights': ['lighting', 'fairy lights', 'warm lights', 'chandeliers']
  };

  const resultsWithScore = WEDDING_CATALOGUE.map((item) => {
    let score = 0;

    // Check budget constraint
    if (detectedBudget !== undefined) {
      if (item.pricingType === 'per_person') {
        // If it's catering per person and user specified overall budget
        if (detectedGuests) {
          const estimatedCost = item.price * detectedGuests;
          if (estimatedCost <= detectedBudget) {
            score += 20;
          } else {
            score -= 30; // Exceeds budget
          }
        }
      } else {
        if (item.price <= detectedBudget) {
          score += 25;
        } else {
          // Penalty if user specified hard max budget and item is higher
          const overage = item.price - detectedBudget;
          if (overage > 0) {
            score -= 40;
          }
        }
      }
    }

    // Category match
    if (criteria.category) {
      if (item.category.toLowerCase() === criteria.category.toLowerCase()) {
        score += 30;
      }
    }

    // Sub-service match
    if (criteria.subService && item.subService) {
      if (item.subService.toLowerCase() === criteria.subService.toLowerCase()) {
        score += 35;
      }
    }

    // Guest range match
    if (detectedGuests !== undefined) {
      if (item.guestRange) {
        if (item.guestRange.toLowerCase().includes(detectedGuests.toString())) {
          score += 15;
        }
        // Check 150 guests matching packages
        if (detectedGuests <= 150 && (item.tags.includes('150 guests') || item.tags.includes('150 people') || item.tags.includes('intimate'))) {
          score += 20;
        }
      }
    }

    // Style match
    if (criteria.style && item.style.toLowerCase().includes(criteria.style.toLowerCase())) {
      score += 20;
    }

    // Flower type match
    if (criteria.flowerType && item.flowerType) {
      if (item.flowerType.toLowerCase() === criteria.flowerType.toLowerCase()) {
        score += 20;
      }
    }

    // Package only
    if (criteria.packageOnly && (item.category === 'Complete Wedding Packages' || item.subService === 'Decoration Packages')) {
      score += 30;
    }

    // Keyword & semantic scoring against query
    if (queryText) {
      const itemSearchCorpus = [
        item.name,
        item.category,
        item.subService || '',
        item.description,
        item.style,
        item.type,
        item.suitableFor,
        item.flowerType || '',
        ...item.whatsIncluded,
        ...item.tags
      ].join(' ').toLowerCase();

      // Check direct inclusion
      if (itemSearchCorpus.includes(queryText)) {
        score += 40;
      }

      // Check query words
      const words = queryText.split(/\s+/).filter(w => w.length > 2);
      for (const word of words) {
        if (itemSearchCorpus.includes(word)) {
          score += 10;
        }
      }

      // Check synonyms
      for (const [key, syns] of Object.entries(synonymMap)) {
        if (queryText.includes(key)) {
          if (itemSearchCorpus.includes(key)) {
            score += 25;
          }
          for (const syn of syns) {
            if (itemSearchCorpus.includes(syn)) {
              score += 15;
            }
          }
        }
      }

      // Check tag matches
      for (const tag of item.tags) {
        if (queryText.includes(tag.toLowerCase())) {
          score += 30;
        }
      }
    }

    // Boost featured items slightly
    if (item.isFeatured) {
      score += 3;
    }

    return { item, score };
  });

  // Filter positive scores and sort descending
  const matched = resultsWithScore
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => r.item);

  return {
    items: matched,
    appliedFilters: {
      maxBudget: detectedBudget,
      guestCount: detectedGuests,
      category: criteria.category,
      subService: criteria.subService,
      style: criteria.style
    }
  };
}

export function getItemById(id: string): CatalogueItem | undefined {
  return WEDDING_CATALOGUE.find(item => item.id === id);
}

export function getAllItems(): CatalogueItem[] {
  return WEDDING_CATALOGUE;
}
