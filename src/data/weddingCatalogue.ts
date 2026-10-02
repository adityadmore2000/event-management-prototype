import { CatalogueItem } from '../types/catalogue.ts';

export const WEDDING_CATALOGUE: CatalogueItem[] = [
  // ==================== DECORATION: MANDAP ====================
  {
    id: 'decor-mandap-01',
    name: 'Vrindavan Blossom Fresh Floral Mandap',
    category: 'Decoration',
    subService: 'Mandap',
    description: 'An ethereal mandap blanketed with 100% fresh flowers including fragrant desi gulab (roses), white mogra, scented tuberose (rajnigandha), and pastel carnations. Features four sculpted floral pillars and an open-sky floral canopy.',
    suitableFor: 'Weddings wanting an authentic, fragrant, flower-heavy atmosphere (100-300 guests)',
    style: 'Floral & Romantic',
    type: 'Floral Mandap',
    price: 60000,
    priceFormatted: '₹60,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Four heavy fresh-flower wrapped pillars (10ft height)',
      'Overhead circular fresh floral canopy with cascading tuberose tassels',
      'Havan Kund platform with copper fire pit and fresh floral border',
      'Two carved wooden chairs for Bride & Groom + 4 low stools for parents/pandit',
      'Floral backdrop behind the mandap with warm fairy light backwash',
      'Fresh flower petals (10 kg) for guest blessings during phere'
    ],
    whatsNotIncluded: [
      'Sound system for panditji mantra recitation',
      'Heavy generator backup (available as add-on)'
    ],
    options: [
      'Color themes: All White & Gold, Pastel Peach & Blush Pink, or Traditional Red & Orange Marigold'
    ],
    addOns: [
      {
        id: 'addon-mandap-lotus',
        name: 'Fresh Lotus Buds Suspension',
        price: 8000,
        priceFormatted: '₹8,000',
        description: '50 fresh pink and white lotus blooms suspended from the mandap dome ceiling'
      },
      {
        id: 'addon-mandap-water',
        name: 'Surrounding Floral Water Moat (Urli Perimeter)',
        price: 15000,
        priceFormatted: '₹15,000',
        description: '8 large brass urlis with floating tea lights and rose petals encircling the mandap'
      }
    ],
    guestRange: '100 - 300 guests',
    sizeDimensions: '16ft x 16ft, 10ft height',
    duration: 'Full Muhurat duration (up to 12 hours)',
    locationSuitability: 'Both Indoor Banquet and Outdoor Lawn',
    setupDetails: 'Requires 6 hours setup before muhurat. Flowers delivered fresh on wedding morning.',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'All flowers are procured fresh on the morning of the ceremony.',
      'Mandap layout can be adjusted for indoor banquet halls or lawn lawns.'
    ],
    tags: [
      'phoolon wala mandap',
      'floral mandap',
      'mandap with flowers',
      'fresh flowers',
      'fresh flower mandap',
      'rose mandap',
      'mogra',
      'rajnigandha',
      'classy',
      'romantic',
      'elegant',
      'mandap'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-mandap-02',
    name: 'Rajwada Shahi Dome Royal Mandap',
    category: 'Decoration',
    subService: 'Mandap',
    description: 'A majestic palace-inspired mandap reminiscent of Rajasthani havelis. Crafted with hand-carved jali pillars, an ornate central dome, royal crimson velvet drapes with gota patti borders, and rich red rose chandeliers.',
    suitableFor: 'Grand traditional and royal theme weddings (200-500 guests)',
    style: 'Royal Rajasthani',
    type: 'Dome Mandap',
    price: 75000,
    priceFormatted: '₹75,000',
    pricingType: 'fixed',
    flowerType: 'Mixed',
    whatsIncluded: [
      'Four antique-gold carved composite pillars with Rajasthani jharokha arches',
      'Handcrafted ornate royal dome structure with crystal chandelier center',
      'Fresh Dutch red roses and marigold garlands framing the dome',
      'Pair of Maharaja & Maharani carved wooden thrones with crimson velvet cushioning',
      'Elevated wooden carpeted stage base (18ft x 18ft) with gold skirting',
      'Mandap spot lighting and warm ambient focus lights'
    ],
    whatsNotIncluded: [
      'Air coolers/misters for outdoor mandap',
      'Priest puja items (samagri)'
    ],
    options: [
      'Fabric options: Royal Maroon & Antique Gold, Deep Emerald Green & Gold, or Ivory & Gold'
    ],
    addOns: [
      {
        id: 'addon-rajwada-fountain',
        name: 'Center Water Mist Fountain with Rose Water',
        price: 12000,
        priceFormatted: '₹12,000',
        description: 'Aromatic rose-scented mist fountain at the entrance of the mandap'
      },
      {
        id: 'addon-rajwada-toran',
        name: 'Antique Gota Patti Toran Border Extension',
        price: 6500,
        priceFormatted: '₹6,500',
        description: 'Authentic Jaipur gota work hangings across all 4 mandap arches'
      }
    ],
    guestRange: '200 - 500 guests',
    sizeDimensions: '18ft x 18ft, 12ft height',
    duration: 'Full wedding day',
    locationSuitability: 'Ideal for open lawns or high-ceiling banquet halls (minimum 14ft ceiling)',
    setupDetails: 'Requires 8 hours setup by specialized Rajasthani decor craftsmen.',
    images: [
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Requires a minimum ceiling height of 14ft if placed indoors.',
      'Includes fire-safe treatment on all fabrics for the havan kund phere.'
    ],
    tags: [
      'rajwadi mandap',
      'royal mandap',
      'rajasthani mandap',
      'dome mandap',
      'dome',
      'shahi mandap',
      'royal',
      'traditional',
      'grand',
      'maharaja thrones',
      'mandap'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-mandap-03',
    name: 'Vedic Serenity Temple Mandap',
    category: 'Decoration',
    subService: 'Mandap',
    description: 'A serene and deeply auspicious traditional South Indian & Vedic style mandap. Features South Indian temple gopuram pillars, lush green banana leaf accents, fragrant yellow and saffron marigold strands, and antique brass bells.',
    suitableFor: 'Traditional South Indian, Arya Samaj, or Vedic weddings seeking cultural purity and simplicity on a budget (100-250 guests)',
    style: 'Traditional Temple',
    type: 'Temple Mandap',
    price: 45000,
    priceFormatted: '₹45,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Four temple pillar replicas with carved auspicious motifs',
      'Fresh marigold (genda phool) strings and fragrant jasmine hangings',
      'Natural banana tree accents with fresh tender coconut leaf toran',
      'Traditional brass diya stands (Deepams) with oil wicks and marigold base',
      'Havan kund setup with wooden seating planks (manai)',
      'Traditional brass bell hangings that chime gently'
    ],
    whatsNotIncluded: [
      'Brass puja samagri utensils (available on rent)'
    ],
    options: [
      'Marigold combination: Pure Orange & Yellow, or White Mogra & Marigold duo'
    ],
    addOns: [
      {
        id: 'addon-temple-brass',
        name: 'Set of 4 Grand 6ft Brass Kuthu Vilakku Lamps',
        price: 5000,
        priceFormatted: '₹5,000',
        description: 'Authentic Kerala/Tamil brass lamps with fresh flower garlands'
      }
    ],
    guestRange: '100 - 250 guests',
    sizeDimensions: '14ft x 14ft, 9ft height',
    duration: 'Full wedding day',
    locationSuitability: 'Indoor Banquets, Temple Courtyards, Community Halls, and Lawns',
    setupDetails: 'Requires 4 hours setup time.',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Highly budget-friendly under ₹50,000 without compromising on authentic floral beauty.',
      '100% natural, biodegradable flowers and eco-friendly leaves.'
    ],
    tags: [
      'south indian mandap',
      'temple mandap',
      'traditional mandap',
      'simple mandap',
      'under 50000',
      'under 50k',
      'marigold mandap',
      'genda phool',
      'vedic',
      'budget friendly',
      'affordable mandap',
      'mandap'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-mandap-04',
    name: 'Modern Pastel Glass & Floral Mandap',
    category: 'Decoration',
    subService: 'Mandap',
    description: 'A contemporary luxury mandap with slim champagne gold metallic pillars, mirrored glass havan platform, and a cloud of blush pink roses, white hydrangeas, and delicate baby’s breath (gypsophila).',
    suitableFor: 'Modern couples desiring an airy, subtle, minimalist luxury aesthetic (150-300 guests)',
    style: 'Modern Minimalist',
    type: 'Floral Mandap',
    price: 55000,
    priceFormatted: '₹55,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Champagne gold metal open-frame pillars (4 units)',
      'Asymmetric floral clouds of pink roses, gypsophila, and eucalyptus greens',
      'White acrylic mirror havan stage base with concealed LED edge glow',
      'Modern gold wireframe chairs with ivory velvet cushions',
      'Warm spotlighting to highlight floral textures'
    ],
    whatsNotIncluded: [
      'Floral chandelier upgrade'
    ],
    options: [
      'Color palette: Blush & Ivory, Sage Green & White, or Lavender & Silver'
    ],
    addOns: [
      {
        id: 'addon-modern-led-mesh',
        name: 'Concealed Starlight Fairy Mesh Base',
        price: 7000,
        priceFormatted: '₹7,000',
        description: 'Illuminates the mandap floor with a starry glass reflection'
      }
    ],
    guestRange: '150 - 300 guests',
    sizeDimensions: '16ft x 16ft, 10ft height',
    duration: 'Full wedding day',
    locationSuitability: 'Indoor Air-Conditioned Halls and Evening Open-Air Terraces/Lawns',
    setupDetails: 'Requires 5 hours setup time.',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Exceptional for daytime or sundowner muhurats.',
      'Looks exquisite in candid photography and drone shots.'
    ],
    tags: [
      'modern mandap',
      'pastel mandap',
      'minimalist mandap',
      'classy',
      'not flashy',
      'elegant',
      'simple wedding',
      'fresh flowers',
      'roses',
      'mandap'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: STAGE ====================
  {
    id: 'decor-stage-01',
    name: 'Grand Royal Jaimala & Reception Stage',
    category: 'Decoration',
    subService: 'Stage',
    description: 'A spectacular multi-arched stage created for the couple’s Jaimala garland exchange and evening wedding reception. Features a 30ft gold-embossed backdrop, heavy floral arches, and opulent royal sofa.',
    suitableFor: 'Grand wedding receptions and royal Jaimala ceremonies (250-600 guests)',
    style: 'Royal & Grand',
    type: 'Jaimala Stage',
    price: 58000,
    priceFormatted: '₹58,000',
    pricingType: 'fixed',
    flowerType: 'Mixed',
    whatsIncluded: [
      'Carved 30ft x 12ft backdrop with golden filigree arches and velvet drapery',
      'Multi-tiered floral runner across the top arch and pillars',
      'Royal double-seater high-back ivory and gold carved sofa',
      'Raised wooden carpeted stage platform (32ft x 16ft) with steps on both sides',
      'Complete stage focus lighting package with 8 LED Par Cans and warm spots',
      'Fresh flower bouquet arrangements on pedestals flanking the sofa'
    ],
    whatsNotIncluded: [
      'Fog/Cold Pyro machines (available as bride/groom entry add-on)',
      'Custom couple LED neon name sign'
    ],
    options: [
      'Backdrop drapes: Royal Wine Red, Champagne Ivory, or Royal Navy Blue'
    ],
    addOns: [
      {
        id: 'addon-stage-neon',
        name: 'Custom Acrylic LED Neon Couple Name Monogram',
        price: 4500,
        priceFormatted: '₹4,500',
        description: 'Glowing couple name sign mounted at the center of the backdrop (kept by couple)'
      },
      {
        id: 'addon-stage-chandelier',
        name: 'Pair of Overhead Grand Crystal Chandeliers',
        price: 9000,
        priceFormatted: '₹9,000',
        description: 'Suspended above the stage on a secure truss'
      }
    ],
    guestRange: '250 - 600 guests',
    sizeDimensions: '32ft width x 16ft depth x 12ft height',
    duration: 'Full Event (up to 10 hours)',
    locationSuitability: 'Banquet halls and large wedding lawns',
    setupDetails: 'Requires 6 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Requires adequate stage width at the venue (minimum 35ft recommended).',
      'Comfortably accommodates large family photo sessions on stage.'
    ],
    tags: [
      'jaimala stage',
      'reception stage',
      'wedding stage',
      'stage decoration',
      'royal stage',
      'grand stage',
      'stage with flowers',
      'stage'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-stage-02',
    name: 'Classic Mogra & Marigold Traditional Stage',
    category: 'Decoration',
    subService: 'Stage',
    description: 'A charming, traditional Indian wedding stage adorned with dense curtains of fragrant mogra (jasmine) and bright yellow/orange marigold floral tassels against warm golden silk drapes.',
    suitableFor: 'Traditional weddings and budget-conscious celebrations under ₹50,000 (100-250 guests)',
    style: 'Traditional Simple',
    type: 'Wedding Stage',
    price: 38000,
    priceFormatted: '₹38,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      '20ft x 10ft golden silk backdrop with cascading fresh marigold strings',
      'Traditional carved two-seater wedding diwan sofa with silk bolsters',
      'Raised stage flooring with red carpet and side steps',
      'Warm stage lights (6 LED Pars) providing natural photographic skin tones',
      'Two large brass urlis with floating candles and marigold petals at stage corners'
    ],
    whatsNotIncluded: [
      'Exotic imported flowers'
    ],
    options: [
      'Backdrop fabric: Golden Mustard, Crimson Red, or Raw Silk Cream'
    ],
    addOns: [
      {
        id: 'addon-stage-mogra-heavy',
        name: 'Double Density Fresh Mogra Curtains',
        price: 7000,
        priceFormatted: '₹7,000',
        description: 'Increases mogra flower density by 100% for intense natural fragrance'
      }
    ],
    guestRange: '100 - 250 guests',
    sizeDimensions: '20ft width x 12ft depth x 10ft height',
    duration: 'Full wedding day',
    locationSuitability: 'Indoor halls, community centers, and intimate lawns',
    setupDetails: 'Requires 3.5 hours setup time.',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Best seller for simple, elegant ceremonies under ₹50,000 budget.',
      'Natural mogra fragrance fills the entire stage area.'
    ],
    tags: [
      'simple stage',
      'marigold stage',
      'traditional stage',
      'budget stage',
      'under 50000',
      'under 50k',
      'under ₹50,000',
      'mogra stage',
      'genda phool stage',
      'wedding stage',
      'stage'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-stage-03',
    name: 'Curved Floral Arc Reception Stage',
    category: 'Decoration',
    subService: 'Stage',
    description: 'An elegant contemporary reception stage featuring a sweeping double-crescent floral arc loaded with pastel roses, baby’s breath, and eucalyptus greenery, framing a luxury curved velvet sofa.',
    suitableFor: 'Evening receptions and cocktail weddings with a classy, modern theme (150-350 guests)',
    style: 'Modern Pastel',
    type: 'Reception Stage',
    price: 48000,
    priceFormatted: '₹48,000',
    pricingType: 'fixed',
    flowerType: 'Mixed',
    whatsIncluded: [
      'Double crescent golden metallic floral arcs (10ft height)',
      'High-grade pastel roses, white carnations, and greenery foliage',
      'Cream curved boucle/velvet luxury couple sofa',
      'Seamless white acrylic stage flooring (24ft x 12ft)',
      'Concealed warm backlight halo creating a soft photographic glow'
    ],
    whatsNotIncluded: [
      'Truss lighting structure'
    ],
    options: [
      'Flower tones: Dusty Rose & Ivory, Champagne & Peach, or Lilac & White'
    ],
    addOns: [
      {
        id: 'addon-arc-fairy-curtain',
        name: 'Dense Warm Fairy Light Drape Behind Arc',
        price: 5500,
        priceFormatted: '₹5,500',
        description: 'Creates a magical starry night effect behind the floral arc'
      }
    ],
    guestRange: '150 - 350 guests',
    sizeDimensions: '24ft width x 12ft depth x 10ft height',
    duration: 'Full evening (up to 8 hours)',
    locationSuitability: 'Banquet halls and evening lawns',
    setupDetails: 'Requires 4.5 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Subtle, non-flashy, highly sophisticated look.',
      'Meets budget constraints under ₹50,000.'
    ],
    tags: [
      'reception stage',
      'floral arc',
      'curved stage',
      'pastel stage',
      'modern stage',
      'under 50000',
      'classy',
      'elegant',
      'not flashy',
      'stage'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: ENTRY DECORATION ====================
  {
    id: 'decor-entry-01',
    name: 'Shahi Welcoming Grand Floral Tunnel',
    category: 'Decoration',
    subService: 'Entry Decoration',
    description: 'A breathtaking 30ft entrance tunnel covered with lush fresh flowers, fragrant hanging rajnigandha strings, crystal drop chandeliers, and warm ground uplighting to give guests a royal welcome.',
    suitableFor: 'Main wedding entrance for luxury and mid-to-large weddings (200-600 guests)',
    style: 'Royal Floral',
    type: 'Welcome Entry',
    price: 42000,
    priceFormatted: '₹42,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      '30ft length x 10ft width arched tunnel framework',
      'Fresh flower runners (roses, chrysanthemums, and marigolds) along arches',
      'Suspended scented tuberose (rajnigandha) and jasmine drops',
      '3 crystal chandelier fixtures suspended at intervals',
      'Red or ivory aisle carpet running full length',
      'Personalized Welcome mirror board with couple names and floral framing'
    ],
    whatsNotIncluded: [
      'Dhol players / welcoming artists (available under Entertainment)'
    ],
    options: [
      'Carpet color: Royal Crimson Red, Champagne Gold, or Emerald Green'
    ],
    addOns: [
      {
        id: 'addon-entry-cold-pyro',
        name: 'Entry Cold Pyro Sparkler Pillars (Set of 4)',
        price: 8000,
        priceFormatted: '₹8,000',
        description: 'Smokeless cold pyro sparks for the VIP arrival of the bride and groom'
      }
    ],
    guestRange: '200 - 600 guests',
    sizeDimensions: '30ft length x 10ft width x 10ft height',
    duration: 'Full event',
    locationSuitability: 'Main venue driveway, garden gate, or banquet entrance corridor',
    setupDetails: 'Requires 4 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'First impression for all wedding guests.',
      'Tunnel length can be extended in 10ft increments on request.'
    ],
    tags: [
      'entry decoration',
      'welcome entry',
      'floral tunnel',
      'entrance gate',
      'tunnel',
      'royal entry',
      'phoolon wali entry',
      'entry'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-entry-02',
    name: 'Vintage Brass Urli & Diya Pathway',
    category: 'Decoration',
    subService: 'Entry Decoration',
    description: 'A traditional, culturally rich entrance pathway featuring heavy brass urlis filled with water, floating rose petals, and flickering tea-light candles, bordered by floral torans and marigold chains.',
    suitableFor: 'Traditional ceremonies, evening muhurats, and intimate weddings (100-250 guests)',
    style: 'Traditional Warm',
    type: 'Welcome Entry',
    price: 25000,
    priceFormatted: '₹25,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      '8 large hand-hammered brass urlis with fresh rose petals and floating wax diyas',
      '12 traditional brass pillar lamps (kuthu vilakku / deepams) with real oil wicks',
      'Traditional marigold and mango leaf toran entrance archway',
      'Custom wooden easel with floral garland welcome sign',
      'Warm pathway LED spotlights illuminating the brass accents'
    ],
    whatsNotIncluded: [
      'Long covered fabric tunnel'
    ],
    options: [
      'Flower tones: Sunshine Marigold & Red Rose, or White Mogra & Lotus'
    ],
    addOns: [
      {
        id: 'addon-entry-bell',
        name: 'Hanging Temple Brass Bells Border',
        price: 4000,
        priceFormatted: '₹4,000',
        description: 'Authentic brass bells strung along the pathway that chime as guests walk'
      }
    ],
    guestRange: '100 - 250 guests',
    sizeDimensions: '20ft pathway length',
    duration: 'Full evening',
    locationSuitability: 'Courtyards, pathways, and banquet entrance doors',
    setupDetails: 'Requires 2.5 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Very affordable under ₹30,000 with a soul-stirring traditional aesthetic.',
      'Safe smokeless floating candles used to prevent any fabric hazards.'
    ],
    tags: [
      'entry decoration',
      'diya pathway',
      'brass urli',
      'traditional entry',
      'simple entry',
      'under 50000',
      'under 30000',
      'affordable entry',
      'welcome entry',
      'entry'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: BRIDE/GROOM ENTRY ====================
  {
    id: 'decor-entry-bride-01',
    name: 'Royal Floral Phoolon Ki Chaadar',
    category: 'Decoration',
    subService: 'Bride/Groom Entry',
    description: 'A handcrafted, fragrant floral canopy carried by the bride’s brothers and cousins as she walks down the aisle. Decorated with cascading fresh tuberoses (rajnigandha), desi red roses, and twinkling fairy lights.',
    suitableFor: 'Bridal walking entry during Jaimala or Mandap arrival',
    style: 'Traditional Romantic',
    type: 'Bride & Groom Entry',
    price: 12000,
    priceFormatted: '₹12,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Lightweight wooden frame with 4 padded carrying handles (8ft x 6ft)',
      '100% fresh flowers: Red roses, white rajnigandha hangings, and jasmine border',
      'Concealed micro-fairy battery lights for a soft glow over the bride',
      'Delivered fresh 2 hours before the bridal entry muhurat'
    ],
    whatsNotIncluded: [
      'Cold pyro / dry ice fog (available as add-on)'
    ],
    options: [
      'Color themes: Classic Deep Red & White, Pastel Peach & Baby’s Breath, or Bright Yellow Marigold'
    ],
    addOns: [
      {
        id: 'addon-chaadar-kaleere',
        name: 'Hanging Gold Kaleere & Pearl Drop Extensions',
        price: 3000,
        priceFormatted: '₹3,000',
        description: 'Authentic Punjabi gold kaleere drops suspended from the corners of the chaadar'
      }
    ],
    sizeDimensions: '8ft x 6ft canopy frame',
    duration: 'Bridal entry ceremony',
    locationSuitability: 'All indoor and outdoor aisles',
    setupDetails: 'Delivered pre-assembled directly to the bridal suite.',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Lightweight structural engineering so brothers can carry it comfortably without fatigue.',
      'Guaranteed fresh scent for the bride’s entrance.'
    ],
    tags: [
      'phoolon ki chaadar',
      'bridal entry',
      'bride entry',
      'chaadar',
      'flower canopy',
      'bride walking',
      'jaimala entry',
      'entry'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-entry-pyro-01',
    name: 'Magical Dry Ice Cloud & Cold Pyro Entry Pathway',
    category: 'Decoration',
    subService: 'Bride/Groom Entry',
    description: 'A fairytale entrance effect creating a dense, cloud-like floor fog (dry ice smoke) combined with 8 synchronized smokeless cold pyro sparklers firing as the couple walks to the stage.',
    suitableFor: 'Jaimala and Grand Couple Entry',
    style: 'Modern Spectacular',
    type: 'Bride & Groom Entry',
    price: 18000,
    priceFormatted: '₹18,000',
    pricingType: 'fixed',
    flowerType: 'None',
    whatsIncluded: [
      'Commercial dual-nozzle dry ice fog machine generating knee-high dense white cloud',
      '8 wireless cold pyro sparkler units (indoor and outdoor safe, non-toxic, cold to touch)',
      'Dedicated pyrotechnic technician to operate on precise music cues',
      'Fire-safety certified apparatus'
    ],
    whatsNotIncluded: [
      'Rose petal shower cannons (available as add-on)'
    ],
    options: [
      'Sparkler firing sequence: Instantaneous simultaneous blast or sequential wave'
    ],
    addOns: [
      {
        id: 'addon-petal-blast',
        name: 'Pair of Air-Compressed Rose Petal Blast Cannons',
        price: 5000,
        priceFormatted: '₹5,000',
        description: 'Showers 5 kg of fresh rose petals 20ft into the air over the couple'
      }
    ],
    duration: 'Entry and Jaimala sequence',
    locationSuitability: 'Indoor Banquets and Outdoor Lawns',
    setupDetails: 'Requires 1 hour technical rehearsal with DJ/sound team.',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      '100% cold spark technology: Does not trigger smoke detectors, safe for delicate fabrics.',
      'Leaves zero residue on bridal lehengas or venue flooring.'
    ],
    tags: [
      'cold pyro',
      'dry ice fog',
      'cloud entry',
      'bride groom entry',
      'jaimala special entry',
      'smoke effect',
      'sparklers',
      'entry'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: HALDI DECORATION ====================
  {
    id: 'decor-haldi-01',
    name: 'Sunshine Genda Phool Haldi Jhoola & Urli Setup',
    category: 'Decoration',
    subService: 'Haldi Decoration',
    description: 'A vibrant, photogenic traditional Haldi setup complete with a decorated carved wooden swing (jhoola), a giant 5ft hammered brass urli for the couple’s floral bath, yellow & orange marigold drapes, and quirky traditional cushions.',
    suitableFor: 'Haldi ceremony for 50-200 family members and friends',
    style: 'Traditional Vibrant',
    type: 'Haldi Decoration',
    price: 35000,
    priceFormatted: '₹35,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Handcrafted wooden swing (jhoola) adorned with fresh marigold floral ropes',
      'Giant 5ft hammered brass urli container where the bride/groom sits for flower shower',
      '16ft x 10ft yellow and orange marigold floral backdrop wall',
      'Yellow and hot pink silk bolsters and floor cushions for family seating (set of 8)',
      '10 kg fresh marigold and rose petals for Haldi flower shower (phoolon ki haldi)',
      'Traditional brass bowls for turmeric paste with wooden mixing ladles'
    ],
    whatsNotIncluded: [
      'Haldi paste ingredients',
      'Customized printed Haldi sunglasses'
    ],
    options: [
      'Backdrop style: Solid marigold wall or marigold-curtain with tassel hangings'
    ],
    addOns: [
      {
        id: 'addon-haldi-props',
        name: 'Quirky Haldi Photo Corner (Cutting Chai & Yellow Cycle)',
        price: 8000,
        priceFormatted: '₹8,000',
        description: 'Vintage yellow bicycle with flower baskets and quirky Hindi slogan boards'
      }
    ],
    guestRange: '50 - 200 guests',
    sizeDimensions: '16ft x 12ft setup area',
    duration: 'Haldi event duration (up to 6 hours)',
    locationSuitability: 'Courtyard, poolside, terrace, or garden lawn',
    setupDetails: 'Requires 3 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Ideal for the trending "Phoolon ki Haldi" concept where guests shower petals instead of messy chemical colors.',
      'Waterproof ground sheeting provided beneath the brass urli to protect flooring.'
    ],
    tags: [
      'haldi decoration',
      'haldi',
      'jhoola',
      'swing',
      'urli',
      'phoolon ki haldi',
      'genda phool',
      'marigold',
      'yellow decor',
      'haldi setup',
      'under 50000'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: MEHNDI DECORATION ====================
  {
    id: 'decor-mehndi-01',
    name: 'Vibrant Bohemian Moroccon-Indian Mehndi Lounge',
    category: 'Decoration',
    subService: 'Mehndi Decoration',
    description: 'A colorful, relaxed Mehndi lounge with multi-colored flowing canopy drapes, floral dreamcatchers, low diwan baithak seating with colorful Rajasthani mirror-work bolsters, and fairy light canopies.',
    suitableFor: 'Afternoon or sangeet-evening Mehndi ceremonies (75-200 guests)',
    style: 'Boho & Colorful',
    type: 'Mehndi Decoration',
    price: 38000,
    priceFormatted: '₹38,000',
    pricingType: 'fixed',
    flowerType: 'Mixed',
    whatsIncluded: [
      'Central draped gazebo/canopy with teal, mustard, magenta, and orange fabrics',
      'Bride’s comfortable Mehndi throne seat with footrest stool',
      'Low diwan seating for 20 guests with gaddi mattresses and vibrant embroidered cushions',
      '4 low brass tea-tables for guests and mehndi artists',
      'Hanging floral dreamcatchers and colorful tassel garlands',
      'Ambient warm lighting and fairy light strings across the canopy'
    ],
    whatsNotIncluded: [
      'Mehndi artist charges (available under Makeup & Mehndi category)'
    ],
    options: [
      'Color theme: Multi-colour Fiesta, Pink & Teal Oasis, or Lime & Yellow Sunshine'
    ],
    addOns: [
      {
        id: 'addon-mehndi-bangle',
        name: 'Traditional Lac & Glass Bangle Bar Cart Setup',
        price: 6000,
        priceFormatted: '₹6,000',
        description: 'Decorated wooden cart with stands for guest bangle giveaways'
      }
    ],
    guestRange: '75 - 200 guests',
    sizeDimensions: '20ft x 20ft lounge area',
    duration: 'Full ceremony (up to 8 hours)',
    locationSuitability: 'Lawns, pool decks, banquet halls, or terrace gardens',
    setupDetails: 'Requires 4 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Designed specifically for relaxed lounging while henna dries.',
      'Includes comfortable padded back support for the bride during long mehndi application.'
    ],
    tags: [
      'mehndi decoration',
      'mehendi',
      'mehndi setup',
      'boho mehndi',
      'colorful decor',
      'canopy',
      'diwan seating',
      'bangle cart',
      'under 50000'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: LIGHTING ====================
  {
    id: 'decor-light-01',
    name: 'Warm Amber Bistro & Fairy Light Starry Canopy',
    category: 'Decoration',
    subService: 'Lighting',
    description: 'Transform an open lawn or banquet into a starry wonderland. Features criss-cross warm amber bistro bulbs, 1,000+ meters of micro-fairy light curtains, and architectural warm uplighting on surrounding trees and walls.',
    suitableFor: 'Evening outdoor receptions, dinner areas, and cocktail nights (150-400 guests)',
    style: 'Warm Ambient',
    type: 'Fairy Lights',
    price: 28000,
    priceFormatted: '₹28,000',
    pricingType: 'fixed',
    flowerType: 'None',
    whatsIncluded: [
      'Overhead grid of warm amber bistro bulb strings (up to 2,500 sq ft coverage)',
      'Dense warm white fairy light wall backdrop (20ft x 10ft)',
      '12 high-output LED warm amber par cans for ambient perimeter wash',
      'All heavy-duty insulated cabling, distribution boxes, and safety MCBs',
      'On-site lighting technician throughout the event'
    ],
    whatsNotIncluded: [
      'Generator power backup fuel (available as rental)'
    ],
    options: [
      'Light tone: Warm Golden Amber (2700K) or Soft Candlelight Ivory (3000K)'
    ],
    addOns: [
      {
        id: 'addon-light-tree-wrap',
        name: 'Fairy Light Tree Trunk Wraps (Set of 4 trees)',
        price: 6000,
        priceFormatted: '₹6,000',
        description: 'Tightly wraps surrounding garden tree trunks with glowing fairy lights'
      }
    ],
    guestRange: '150 - 400 guests',
    sizeDimensions: 'Covers up to 2,500 sq ft area',
    duration: 'Full evening',
    locationSuitability: 'Outdoor lawns, open courtyards, terraces, and dining zones',
    setupDetails: 'Requires 4 hours installation.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Provides that quintessential cozy, classy, romantic Indian wedding dinner atmosphere.',
      'Fits comfortably within budget constraints (under ₹30,000).'
    ],
    tags: [
      'lighting',
      'warm lights',
      'fairy lights',
      'fairy light canopy',
      'bistro lights',
      'ambient lighting',
      'decorative lights',
      'starry night',
      'under 50000',
      'under 30000'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-light-02',
    name: 'Grand Crystal Chandelier & Stage Truss Rig',
    category: 'Decoration',
    subService: 'Lighting',
    description: 'A concert-grade lighting rig featuring a black aluminium goal-post truss with 4 opulent crystal chandeliers, 8 intelligent moving head beam lights, and soft profile spots for the stage and mandap.',
    suitableFor: 'High-end luxury receptions and sangeet stages (300-800 guests)',
    style: 'Royal Luxury',
    type: 'Stage Lights',
    price: 48000,
    priceFormatted: '₹48,000',
    pricingType: 'fixed',
    flowerType: 'None',
    whatsIncluded: [
      'Aluminium box truss structure (40ft span)',
      '4 vintage crystal chandeliers with warm filament bulbs',
      '8 Sharpy moving-head beam lights with DMX console control',
      '4 warm LED profile spots focused on the bride & groom',
      'DMX lighting console operator for dynamic stage cues'
    ],
    whatsNotIncluded: [
      'Stage backdrop (lighting truss only)'
    ],
    options: [
      'Lighting schemes: Royal Warm Gold, Romantic Blush, or Dynamic Sangeet Party Colors'
    ],
    addOns: [],
    guestRange: '300 - 800 guests',
    sizeDimensions: '40ft truss span, 16ft clearance height',
    duration: 'Full evening event',
    locationSuitability: 'High-ceiling banquets (min 16ft) and outdoor stages',
    setupDetails: 'Requires 5 hours rigging.',
    images: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Transforms any standard stage into a high-production royal ballroom experience.'
    ],
    tags: [
      'stage lights',
      'chandeliers',
      'crystal chandelier',
      'truss lighting',
      'moving heads',
      'sangeet lighting',
      'lighting'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: PHOTO BOOTH ====================
  {
    id: 'decor-photobooth-01',
    name: 'Vintage Floral Cycle Rickshaw Photo Corner',
    category: 'Decoration',
    subService: 'Photo Booth',
    description: 'A charming, interactive Indian photo booth featuring a fully restored antique Indian cycle rickshaw hand-painted with quirky wedding motifs, packed with fresh yellow marigold baskets, and framed by a rustic wooden backdrop with wedding signage.',
    suitableFor: 'Pre-wedding events, Haldi, Mehndi, and Wedding guest engagement (All guest sizes)',
    style: 'Quirky Desi & Floral',
    type: 'Floral Photo Booth',
    price: 18000,
    priceFormatted: '₹18,000',
    pricingType: 'fixed',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Authentic painted antique cycle rickshaw (guests can sit inside for photos)',
      'Fresh marigold and bougainvillea flower garlands covering the rickshaw frame',
      'Wooden slatted backdrop (10ft x 8ft) with faux green hedge',
      'Quirky wedding photo prop sticks (e.g. "Ladkewale", "Ladkiwale", "Patakha Guddi", "Dilwale")',
      'Warm photo floodlights on tripod for crisp smartphone and camera photography'
    ],
    whatsNotIncluded: [
      'Instant Polaroid camera prints (available as add-on)'
    ],
    options: [
      'Rickshaw color: Mustard Yellow, Royal Teal Blue, or Antique White'
    ],
    addOns: [
      {
        id: 'addon-polaroid',
        name: 'Instant Polaroid Camera Station with 100 Photo Keepsakes',
        price: 6500,
        priceFormatted: '₹6,500',
        description: 'Instant film prints given to guests on customized couple keepsake cards'
      }
    ],
    sizeDimensions: '12ft width x 10ft depth x 8ft height',
    duration: 'Full event',
    locationSuitability: 'Lobby, lawn entry, or cocktail reception area',
    setupDetails: 'Requires 2 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Huge crowd-puller for guest selfies and Instagram stories.',
      'Very affordable under ₹20,000.'
    ],
    tags: [
      'photo booth',
      'rickshaw photo booth',
      'floral photo booth',
      'selfie booth',
      'quirky props',
      'haldi photo booth',
      'mehndi photo booth',
      'under 20000',
      'under 50000'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'decor-photobooth-02',
    name: 'Royal Rajasthani Jharokha Floral Frame',
    category: 'Decoration',
    subService: 'Photo Booth',
    description: 'An aristocratic photo corner featuring a lifesize Rajasthani palace window (Jharokha) intricately carved in antique gold finish, framed with deep red roses, brass lamps, and royal velvet bolsters.',
    suitableFor: 'Traditional and royal-themed wedding receptions',
    style: 'Royal Rajasthani',
    type: 'Traditional Photo Booth',
    price: 20000,
    priceFormatted: '₹20,000',
    pricingType: 'fixed',
    flowerType: 'Mixed',
    whatsIncluded: [
      '8ft carved Rajasthani Jharokha window arch frame',
      'Fresh red roses and marigold floral borders',
      'Two 4ft brass peacock oil lamps (diya pillars) flanking the frame',
      'Red velvet royal carpet base with brass urli floating petals',
      'Soft photo spot lighting'
    ],
    whatsNotIncluded: [
      'Photographer (available under Photography category)'
    ],
    options: [
      'Gold antique finish or White marble haveli finish'
    ],
    addOns: [],
    sizeDimensions: '10ft width x 8ft height',
    duration: 'Full event',
    locationSuitability: 'Banquet foyer or lawn focal points',
    setupDetails: 'Requires 2.5 hours setup.',
    images: [
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Gives guests a regal portrait backdrop that matches the bride and groom’s royal aesthetic.'
    ],
    tags: [
      'photo booth',
      'jharokha photo frame',
      'royal photo booth',
      'rajasthani photo booth',
      'traditional photo booth',
      'under 50000'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== DECORATION: DECORATION PACKAGES ====================
  {
    id: 'decor-pkg-01',
    name: '"Shubh Aarambh" Intimate Wedding Decor Package',
    category: 'Decoration',
    subService: 'Decoration Packages',
    description: 'A complete, tastefully curated wedding decoration package designed specifically for intimate and budget-conscious weddings of 100 to 150 guests. Bundles a traditional floral mandap, elegant stage, welcoming entry decor, and warm ambient lighting into one seamless, stress-free offering.',
    suitableFor: 'Simple, elegant weddings for around 100 to 150 guests who want beautiful floral decor without overspending',
    style: 'Traditional Elegant',
    type: 'Decoration Package',
    price: 85000,
    priceFormatted: '₹85,000',
    pricingType: 'package',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Vedic Serenity Temple Mandap (14ft x 14ft) with fresh marigold & mogra flowers, havan kund, and traditional seating',
      'Classic Mogra & Marigold Wedding Stage (20ft x 10ft) with golden silk backdrop and couple seating diwan',
      'Vintage Brass Urli & Diya Welcoming Entrance Pathway with floral toran and personalized welcome easel board',
      'Warm Amber Ambient Lighting package with LED par cans and pathway wash',
      'Fresh flower shower petals (8 kg) for phere ceremony',
      'Full delivery, setup, on-site event coordination, and post-event teardown'
    ],
    whatsNotIncluded: [
      'Bridal entry phoolon ki chaadar (available as add-on for ₹12,000)',
      'Heavy generator backup (venue must provide standard 3-phase connection)'
    ],
    options: [
      'Floral color schemes: Pure Saffron & Yellow Marigold, or Marigold with White Mogra touches'
    ],
    addOns: [
      {
        id: 'addon-shubh-chaadar',
        name: 'Fresh Tuberose Phoolon Ki Chaadar for Bride',
        price: 10000,
        priceFormatted: '₹10,000 (Package Discount)',
        description: 'Discounted bridal entry canopy bundled into the package'
      },
      {
        id: 'addon-shubh-photobooth',
        name: 'Vintage Cycle Rickshaw Photo Booth',
        price: 14000,
        priceFormatted: '₹14,000 (Package Discount)',
        description: 'Interactive guest selfie corner bundled at a package discount'
      }
    ],
    guestRange: '100 - 150 guests',
    sizeDimensions: 'Covers complete venue zones (Entry + Stage + Mandap + Ambient Lighting)',
    duration: 'Full wedding day (up to 14 hours)',
    locationSuitability: 'Indoor Banquet Halls, Community Bhavans, Temple Courtyards, and Intimate Lawns',
    setupDetails: 'Complete setup completed 4 hours prior to wedding muhurat.',
    images: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Save over ₹23,000 compared to booking individual components separately (₹45k mandap + ₹38k stage + ₹25k entry = ₹1,08,000 standalone value).',
      'The catalogue does not allow removing individual items to reduce the fixed package price, but items can be upgraded.'
    ],
    tags: [
      'decoration packages',
      'decoration package',
      'standard package',
      'shubh aarambh',
      'simple wedding',
      '150 people',
      '150 guests',
      'budget package',
      'under 1 lakh',
      'under 100000',
      'complete decor',
      'mandap and stage',
      'flowers'
    ],
    isFeatured: true,
    packageType: 'Package'
  },
  {
    id: 'decor-pkg-02',
    name: '"Rajwada Grandeur" Royal Heritage Decor Package',
    category: 'Decoration',
    subService: 'Decoration Packages',
    description: 'Our flagship royal wedding decoration package inspired by Rajasthan’s imperial palaces. Includes the majestic Rajwada Dome Mandap, Grand Jaimala Stage with golden arches, 30ft Shahi Floral Entrance Tunnel, Crystal Chandeliers, Maharaja thrones, and full royal lighting.',
    suitableFor: 'Couples dreaming of a lavish, royal palace-style celebration with no compromises (200-500 guests)',
    style: 'Royal Rajasthani',
    type: 'Decoration Package',
    price: 225000,
    priceFormatted: '₹2,25,000',
    pricingType: 'package',
    flowerType: 'Mixed',
    whatsIncluded: [
      'Rajwada Shahi Dome Royal Mandap (18ft x 18ft) with crystal center and carved pillars',
      'Grand Royal Jaimala & Reception Stage (32ft x 16ft) with golden arches and high-back sofa',
      'Shahi Welcoming Grand Floral Tunnel (30ft long) with chandeliers and fresh floral ceiling',
      'Pair of carved gold-leaf Maharaja & Maharani Thrones with crimson velvet cushioning',
      'Full Venue Lighting Rig with 4 Crystal Chandeliers, 24 LED Uplighters, and Warm Amber Stage Wash',
      'Royal Rajasthani Jharokha Photo Booth with antique brass props',
      'Royal Phoolon Ki Chaadar for bridal entry included complimentary in this package',
      'Dedicated Senior Decor Production Manager on-site throughout the day'
    ],
    whatsNotIncluded: [
      'Air conditioning / heating generators for outdoor tents',
      'Catering or hospitality staff'
    ],
    options: [
      'Theme palettes: Imperial Crimson & Gold, Royal Emerald & Cream, or Regal Peacock Navy & Gold'
    ],
    addOns: [
      {
        id: 'addon-rajwada-pyro',
        name: 'Grand Cold Pyro & Fog Entry Package',
        price: 15000,
        priceFormatted: '₹15,000',
        description: 'Dry ice cloud and 8 cold sparkler fountains for Jaimala'
      }
    ],
    guestRange: '200 - 500 guests',
    sizeDimensions: 'Complete venue transformation across all zones',
    duration: 'Full wedding day & evening (up to 16 hours)',
    locationSuitability: 'Luxury Hotel Banquets, Palace Lawns, and Heritage Properties',
    setupDetails: 'Requires 12 hours setup by a team of 20 craftsmen.',
    images: [
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Provides a unified, cinematic royal aesthetic with zero coordination headaches.',
      'Standalone item value exceeds ₹2,80,000 when booked separately.'
    ],
    tags: [
      'decoration packages',
      'decoration package',
      'premium package',
      'royal package',
      'rajwada grandeur',
      'luxury decor',
      'palace wedding',
      'grand wedding',
      'mandap stage entry',
      'royal'
    ],
    isFeatured: true,
    packageType: 'Package'
  },
  {
    id: 'decor-pkg-03',
    name: '"Vrindavan Blossom" Fresh Floral Luxe Package',
    category: 'Decoration',
    subService: 'Decoration Packages',
    description: 'A botanical masterpiece drenched entirely in 100% fresh, natural Indian and Dutch flowers. Combines the Vrindavan Fresh Floral Mandap, Curved Floral Arc Stage, Scented Rose Wall Backdrop, Bridal Phoolon Ki Chaadar, and Fairy Light Canopy.',
    suitableFor: 'Couples who want an aromatic, all-fresh-flower botanical wedding with romantic elegance (150-350 guests)',
    style: 'Fresh Floral Luxury',
    type: 'Decoration Package',
    price: 180000,
    priceFormatted: '₹1,80,000',
    pricingType: 'package',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Vrindavan Blossom Fresh Floral Mandap (16ft x 16ft) with cascading tuberose and rose canopies',
      'Curved Floral Arc Reception Stage (24ft x 12ft) with fresh pastel roses and baby’s breath',
      'Cascading Fresh Rose & Jasmine Floral Wall (8ft x 12ft) photo backdrop with golden monogram',
      'Handcrafted Fresh Tuberose & Red Rose Phoolon Ki Chaadar for bridal walk',
      'Warm Amber Bistro & Fairy Light Starry Canopy over dinner area',
      '15 Fresh Floral Centerpiece compotes for dining tables',
      '15 kg fresh rose petal shower for phere muhurat'
    ],
    whatsNotIncluded: [
      'Catering or sound systems'
    ],
    options: [
      'Color themes: Classic Crimson Red & Fragrant White Mogra, or English Pastel Blush & Peach'
    ],
    addOns: [],
    guestRange: '150 - 350 guests',
    sizeDimensions: 'Full venue floral coverage',
    duration: 'Full wedding day',
    locationSuitability: 'Lawns, courtyards, and luxury indoor ballrooms',
    setupDetails: 'Requires 8 hours setup with early-morning flower procurement.',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Every single bloom is fresh and sourced from flower farms on event morning.',
      'Signature intoxicating natural fragrance fills the entire venue.'
    ],
    tags: [
      'decoration packages',
      'fresh flowers package',
      'floral package',
      'vrindavan blossom',
      'phoolon wala package',
      'roses',
      'classy',
      'romantic',
      'luxury floral'
    ],
    isFeatured: true,
    packageType: 'Package'
  },

  // ==================== CATERING ====================
  {
    id: 'catering-01',
    name: 'Royal Shahi Dawat (5-Course Pure Vegetarian Feast)',
    category: 'Catering',
    description: 'An opulent royal vegetarian culinary journey featuring live counters, authentic royal curries, artisanal tandoori breads, and decadent traditional Indian desserts.',
    suitableFor: 'Weddings desiring gourmet traditional vegetarian dining (150-1000 guests)',
    style: 'Royal Indian Vegetarian',
    type: 'Buffet & Live Counters',
    price: 1200,
    priceFormatted: '₹1,200 / person',
    pricingType: 'per_person',
    whatsIncluded: [
      '3 Welcome Mocktails & Fresh Juices on guest arrival',
      '6 Live Starters (Paneer Tikka Angaar, Dahi Ke Kebab, Crispy Lotus Stem, Soya Chaap, etc.)',
      'Live Chaat Bazaar (Delhi Golgappe, Banarasi Tamatar Chaat, Palak Patta Chaat)',
      '8 Main Course delicacies including Paneer Lababdar, Dal Bukhara, Subz Dum Biryani',
      'Assorted Tandoori Breads (Naan, Laccha Paratha, Missi Roti)',
      '4 Traditional Desserts (Hot Gulab Jamun, Moong Dal Halwa, Rabdi Jalebi Live, Kesar Kulfi)',
      'Premium bone china cutlery, copper chafing dishes, and uniformed service staff'
    ],
    whatsNotIncluded: [
      'Packaged bottled drinking water (available at ₹20/bottle MRP)',
      'Bar counter / Liquor glassware'
    ],
    options: [
      'Jain food option prepared without onion and garlic available on request'
    ],
    addOns: [
      {
        id: 'addon-cat-kulfi',
        name: 'Artisanal Natural Fruit Ice Cream Counter',
        price: 150,
        priceFormatted: '₹150 / plate add-on',
        description: 'Handcrafted seasonal mango, tender coconut, and sitaphal scoops'
      }
    ],
    guestRange: 'Minimum 150 guests',
    locationSuitability: 'All venues with banquet kitchen or open lawn setup space',
    images: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Price is quoted strictly per person (per plate). Minimum billing for 150 guests.',
      'Includes food tasting session for 4 family members prior to the wedding.'
    ],
    tags: [
      'catering',
      'food',
      'per plate',
      'vegetarian catering',
      'veg food',
      'shahi dawat',
      'chaat counter',
      'dinner'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },
  {
    id: 'catering-02',
    name: 'Grand Awadhi & Multi-Cuisine Feast (Veg & Non-Veg)',
    category: 'Catering',
    description: 'A lavish dual-cuisine wedding spread featuring slow-cooked Awadhi mutton dum biryani, Galouti kebabs with Mughlai paratha, butter chicken, alongside rich vegetarian spreads and live pasta stations.',
    suitableFor: 'Multi-cultural and grand wedding receptions desiring both gourmet non-veg and pure veg options (200-800 guests)',
    style: 'Awadhi & Multi-Cuisine',
    type: 'Buffet & Live Counters',
    price: 1650,
    priceFormatted: '₹1,650 / person',
    pricingType: 'per_person',
    whatsIncluded: [
      'Separate dedicated vegetarian and non-vegetarian preparation and buffet zones',
      '8 Starters (4 Non-Veg including Galouti Kebabs & Fish Amritsari; 4 Veg)',
      'Live Awadhi Dum Biryani Handi (Mutton & Subz Biryani)',
      'Live Italian Pasta & Wood-fired Pizza Counter',
      '10 Main Courses including Murgh Makhani, Gosht Rogan Josh, Paneer Butter Masala',
      '6 Gourmet Desserts (Live Malpua with Rabdi, Baklava, Ice Creams)'
    ],
    whatsNotIncluded: [
      'Alcoholic beverages and liquor permits'
    ],
    options: [
      'Halal meat certified'
    ],
    addOns: [],
    guestRange: 'Minimum 200 guests',
    locationSuitability: 'Venues with dedicated kitchen license',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Vegetarian and non-vegetarian food is prepared in strictly segregated kitchen sections.'
    ],
    tags: [
      'catering',
      'non veg catering',
      'awadhi biryani',
      'food',
      'per plate',
      'kebabs'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== VENUE ====================
  {
    id: 'venue-01',
    name: 'The Heritage Haveli & Courtyard',
    category: 'Venue',
    description: 'A magnificent heritage-style venue featuring an authentic open stone courtyard surrounded by carved jharokha balconies, paired with an air-conditioned indoor banquet hall.',
    suitableFor: 'Heritage weddings, royal theme ceremonies, and cocktail evenings (Capacity: 150 to 350 guests)',
    style: 'Heritage Royal',
    type: 'Indoor Banquet + Open Lawn Courtyard',
    price: 250000,
    priceFormatted: '₹2,50,000 / day',
    pricingType: 'per_day',
    whatsIncluded: [
      'Full 24-hour exclusive rental of stone courtyard and indoor AC banquet hall',
      '3 air-conditioned luxury bridal dressing suites with en-suite vanity bathrooms',
      'Complimentary valet parking for up to 100 cars',
      'Standard ambient garden lighting and security personnel'
    ],
    whatsNotIncluded: [
      'Mandatory refundable security deposit (₹50,000)',
      'External vendor royalty fees (none if using our catalogue vendors)'
    ],
    options: [
      'Single day wedding or 2-day multi-ceremony booking'
    ],
    addOns: [],
    guestRange: '150 - 350 guests capacity',
    sizeDimensions: 'Courtyard (8,000 sq ft) + AC Banquet (5,000 sq ft)',
    locationSuitability: 'Scenic city outskirts / Heritage belt',
    images: [
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Outdoor music permitted until 10:00 PM as per local green norms, indoor music can continue until 1:00 AM.'
    ],
    tags: [
      'venue',
      'haveli',
      'courtyard',
      'heritage venue',
      'palace',
      'wedding venue',
      'lawn and banquet'
    ],
    isFeatured: true,
    packageType: 'Individual Service'
  },

  // ==================== PHOTOGRAPHY & VIDEOGRAPHY ====================
  {
    id: 'photo-01',
    name: '"Vivah Memoirs" Candid Photography & Cinematic Film',
    category: 'Photography & Videography',
    description: 'A comprehensive, high-end photography and cinematic filming package capturing every fleeting emotion, the mandap phere, family rituals, and candid laughter in 4K resolution.',
    suitableFor: 'Full wedding day coverage seeking Bollywood-style cinematic teaser and raw candid moments',
    style: 'Cinematic & Candid',
    type: 'Photo & Video Package',
    price: 140000,
    priceFormatted: '₹1,40,000',
    pricingType: 'package',
    whatsIncluded: [
      '2 Senior Candid Photographers (Sony A7 IV / Canon R5 gear with prime lenses)',
      '2 Traditional Photographers & Videographers for complete family stage coverage',
      '1 Drone Aerial Cinematographer for bird-eye venue and baraat shots',
      '3-to-5 minute Cinematic Teaser Trailer with licensed romantic music',
      'Full 40-to-60 minute documentary wedding film in 4K',
      '2 Premium Flush-mount Leatherette Wedding Photo Albums (40 pages each)',
      'All high-resolution edited photos (600+ images) delivered on cloud gallery'
    ],
    whatsNotIncluded: [
      'Pre-wedding outdoor shoot (available as add-on for ₹25,000)'
    ],
    options: [],
    addOns: [
      {
        id: 'addon-photo-prewed',
        name: '1-Day Heritage Pre-Wedding Shoot with Stylist',
        price: 25000,
        priceFormatted: '₹25,000',
        description: 'Includes 2 costume changes, 25 retouched photos, and 1-min teaser'
      }
    ],
    duration: 'Full wedding day (up to 14 hours coverage)',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Album design proofs sent to couple for approval before printing.',
      'Candid team specializes in unobtrusive shooting without interrupting rituals.'
    ],
    tags: [
      'photography',
      'videography',
      'candid photography',
      'cinematic video',
      'wedding album',
      'drone',
      'photos'
    ],
    isFeatured: true,
    packageType: 'Package'
  },

  // ==================== ENTERTAINMENT ====================
  {
    id: 'ent-01',
    name: 'Traditional Shehnai & Nagada Welcoming Troupe',
    category: 'Entertainment',
    description: 'An authentic acoustic ensemble of 5 master musicians playing soulful Shehnai melodies and rhythmic Nagadas to welcome guests and provide traditional auspicious background music during the sacred phere.',
    suitableFor: 'Baraat reception, guest entry, and traditional muhurat rituals',
    style: 'Traditional Classical',
    type: 'Live Folk Troupe',
    price: 35000,
    priceFormatted: '₹35,000',
    pricingType: 'fixed',
    whatsIncluded: [
      '2 Master Shehnai players playing Raag Yaman and auspicious wedding melodies',
      '2 Nagada / Dhol percussionists',
      '1 Tasha player',
      'Traditional royal sherwani attire with turbans for all artists',
      'Continuous performance during guest arrival (2 hours) and sacred phere (2 hours)'
    ],
    whatsNotIncluded: [
      'Amplified speaker system (classical acoustic performance)'
    ],
    options: [],
    addOns: [],
    duration: '4 hours total performance',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Creates a pious, emotional, deeply Indian ambiance that recordings cannot replicate.'
    ],
    tags: [
      'entertainment',
      'shehnai',
      'nagada',
      'dhol',
      'traditional music',
      'welcoming music',
      'phere music'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== MAKEUP & MEHNDI ====================
  {
    id: 'makeup-01',
    name: 'Bridal Glow Luxury HD Makeup & Hair Styling',
    category: 'Makeup & Mehndi',
    description: 'Flawless high-definition bridal makeup by a certified celebrity bridal makeup artist using international brands (Charlotte Tilbury, MAC, Dior), complete with bespoke hair styling, lehenga draping, and jewelry setting.',
    suitableFor: 'The bride for her main wedding ceremony and reception',
    style: 'Bridal Glamour',
    type: 'Bridal Styling',
    price: 30000,
    priceFormatted: '₹30,000',
    pricingType: 'fixed',
    whatsIncluded: [
      'Pre-wedding skin consultation and skin-prep routine 2 weeks prior',
      'High-Definition (HD) waterproof bridal makeup suited to Indian wedding lighting',
      'Bespoke bridal hairstyle with fresh floral placement or hair accessories',
      'Premium mink eyelash extensions and colored contact lenses (optional)',
      'Professional bridal lehenga & dupatta double-draping and iron-setting',
      'Complete bridal jewelry mounting and setting'
    ],
    whatsNotIncluded: [
      'Family/bridesmaid makeup (available at ₹5,000 per person)'
    ],
    options: [
      'Subtle Dewy Natural look or Royal Matte Glamour look'
    ],
    addOns: [
      {
        id: 'addon-makeup-mom',
        name: 'Mother of the Bride / Sister HD Makeup',
        price: 6000,
        priceFormatted: '₹6,000 / person',
        description: 'Includes full HD makeup, saree draping, and blow-dry hair styling'
      }
    ],
    duration: '3.5 hours on-site in bridal suite',
    locationSuitability: 'On-location at wedding venue or hotel room',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Artist arrives with complete professional vanity lighting kit and skincare prep.'
    ],
    tags: [
      'makeup',
      'bridal makeup',
      'hd makeup',
      'hair styling',
      'lehenga draping',
      'beauty',
      'bride'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },
  {
    id: 'makeup-02',
    name: 'Royal Rajasthani Handcrafted Bridal Mehndi',
    category: 'Makeup & Mehndi',
    description: 'Exquisite, high-detail traditional bridal henna applied by a senior Mehndi artist. Features storytelling motifs (baraat procession, Radha-Krishna portraits, groom name riddle), reaching up to the elbows and mid-calves.',
    suitableFor: 'Bridal Mehndi ceremony',
    style: 'Traditional Marwari / Rajasthani',
    type: 'Bridal Henna',
    price: 18000,
    priceFormatted: '₹18,000',
    pricingType: 'fixed',
    whatsIncluded: [
      'Full arms (up to elbow) intricate double-sided Marwari/Arabic bridal design',
      'Feet and legs (up to mid-calf) matching delicate floral and peacock pattern',
      '100% natural herbal organic henna cones (guaranteed dark maroon/brown stain, zero chemicals)',
      'Nilgiri & clove oil aftercare application package for deep color development'
    ],
    whatsNotIncluded: [
      'Guest mehndi artist squad (available at ₹1,500/artist per hour)'
    ],
    options: [],
    addOns: [],
    duration: '5 to 6 hours application time',
    images: [
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Natural organic mehndi: Must be applied 48 hours prior to the wedding day for peak dark color.'
    ],
    tags: [
      'mehndi',
      'bridal mehndi',
      'henna',
      'rajasthani mehndi',
      'mehendi',
      'under 20000',
      'under 50000'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== EVENT RENTALS ====================
  {
    id: 'rental-01',
    name: 'Silent Diesel Generator (125 kVA) with Dual Backup',
    category: 'Event Rentals',
    description: 'Industrial-grade soundproof silent generator providing continuous, uninterrupted power backup for all wedding stage lights, chandeliers, and kitchen warming appliances.',
    suitableFor: 'Lawn and outdoor weddings requiring reliable auxiliary power',
    style: 'Utility & Power',
    type: 'Power Equipment',
    price: 22000,
    priceFormatted: '₹22,000 / event',
    pricingType: 'fixed',
    whatsIncluded: [
      '125 kVA soundproof acoustic enclosure silent generator',
      'Up to 8 hours of diesel fuel included',
      'Main distribution board and heavy 3-phase cabling',
      'Licensed generator operator on-site for instant automatic changeover'
    ],
    whatsNotIncluded: [
      'Additional fuel beyond 8 hours (billed at actual diesel pump rates)'
    ],
    options: [],
    addOns: [],
    duration: 'Up to 10 hours',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Crucial insurance against sudden municipal power cuts during sacred phere or reception.'
    ],
    tags: [
      'generator',
      'power backup',
      'silent genset',
      'rentals',
      'event rentals'
    ],
    isFeatured: false,
    packageType: 'Individual Service'
  },

  // ==================== COMPLETE WEDDING PACKAGES ====================
  {
    id: 'pkg-complete-01',
    name: '"Anand" Intimate All-in-One Wedding Package',
    category: 'Complete Wedding Packages',
    description: 'An all-inclusive, stress-free wedding bundle that covers everything required for a flawless 150-guest celebration: Shubh Aarambh floral decoration, gourmet Royal Shahi Dawat catering for 150 people, Vivah Memoirs photography, and Bridal Mehndi.',
    suitableFor: 'Families who want an end-to-end, single-window wedding solution for 150 guests with transparent pricing and zero hassle',
    style: 'Complete Wedding Bundle',
    type: 'All-Inclusive Wedding Package',
    price: 420000,
    priceFormatted: '₹4,20,000',
    pricingType: 'package',
    flowerType: 'Fresh Flowers',
    whatsIncluded: [
      'Complete "Shubh Aarambh" Decoration: Mandap, Stage, Entrance, and Warm Lighting',
      'Royal Shahi Dawat 5-Course Catering for 150 guests (Live starters, buffet, chaat, desserts)',
      '"Vivah Memoirs" Candid Photography & 4K Cinematic Film + 2 Wedding Albums',
      'Royal Rajasthani Bridal Mehndi application',
      'Bridal Phoolon Ki Chaadar for walking entry',
      'Dedicated Day-of-Event Wedding Coordinator managing flow and vendor timing'
    ],
    whatsNotIncluded: [
      'Venue rental (client selects venue or books via our venue catalogue)',
      'Liquor and bartender charges'
    ],
    options: [
      'Guest count can be scaled above 150 at ₹1,200 per additional plate'
    ],
    addOns: [
      {
        id: 'addon-anand-makeup',
        name: 'Bridal Glow Luxury HD Makeup Add-on',
        price: 25000,
        priceFormatted: '₹25,000 (Package Discount)',
        description: 'Add luxury bridal makeup at discounted package pricing'
      }
    ],
    guestRange: 'Optimized for 150 guests',
    sizeDimensions: 'End-to-end event scope',
    duration: 'Full Wedding Day',
    locationSuitability: 'Any chosen banquet hall or lawn venue',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Total standalone component cost is ₹4,63,000 (Decor ₹85k + Catering 150x₹1,200 = ₹1,80k + Photo ₹1,40k + Mehndi ₹18k + Chaadar ₹12k + Coordinator ₹28k). Booking this all-in-one package saves ₹43,000!',
      'Includes dedicated coordinator on wedding day.'
    ],
    tags: [
      'complete wedding packages',
      'complete package',
      'all in one',
      '150 guests',
      '150 people',
      'wedding package',
      'food and decor',
      'food decoration photography',
      'anand package'
    ],
    isFeatured: true,
    packageType: 'Package'
  },
  {
    id: 'pkg-complete-02',
    name: '"Maharaja" Grand Royal Vivaah All-Inclusive Package',
    category: 'Complete Wedding Packages',
    description: 'The pinnacle of luxury wedding execution for 250 guests. Combines the Rajwada Grandeur Royal Decor package, Grand Awadhi multi-cuisine catering, full Vivah Memoirs photography with drone, Shehnai welcoming troupe, Bridal HD makeup, and complete event coordination.',
    suitableFor: 'High-end royal celebrations for 250+ guests seeking supreme grandeur and seamless execution',
    style: 'Royal Grandeur',
    type: 'All-Inclusive Wedding Package',
    price: 850000,
    priceFormatted: '₹8,50,000',
    pricingType: 'package',
    flowerType: 'Mixed',
    whatsIncluded: [
      '"Rajwada Grandeur" Royal Heritage Decor Package (Dome Mandap, Stage, 30ft Tunnel, Chandeliers, Maharaja Thrones)',
      'Grand Awadhi & Multi-Cuisine Feast for 250 guests (Veg & Non-Veg with live stations)',
      'Vivah Memoirs Full Photography & 4K Drone Cinematic Film + 2 Luxury Albums',
      'Traditional Shehnai & Nagada Welcoming Troupe for 4 hours',
      'Bridal Glow Luxury HD Makeup & Hair Styling',
      'Royal Phoolon Ki Chaadar + Cold Pyro Entry pathway',
      '2 Dedicated Wedding Operations Managers orchestrating the entire event'
    ],
    whatsNotIncluded: [
      'Venue rental charges (can be combined with The Heritage Haveli)'
    ],
    options: [
      'Additional guests beyond 250 billed at ₹1,650 per plate'
    ],
    addOns: [],
    guestRange: '250+ guests',
    duration: 'Full wedding day & evening',
    images: [
      'https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    importantNotes: [
      'Comprehensive royal experience with all premium catalogue categories aligned in harmony.',
      'Saves over ₹90,000 compared to booking individual vendors.'
    ],
    tags: [
      'complete wedding packages',
      'maharaja package',
      'royal wedding package',
      'all in one',
      'grand wedding',
      'luxury wedding',
      '250 guests',
      'cross category'
    ],
    isFeatured: true,
    packageType: 'Package'
  }
];

export const CATALOGUE_CATEGORIES = [
  'Decoration',
  'Catering',
  'Venue',
  'Photography & Videography',
  'Entertainment',
  'Makeup & Mehndi',
  'Event Rentals',
  'Complete Wedding Packages'
] as const;

export const DECORATION_SUB_SERVICES = [
  'Mandap',
  'Stage',
  'Entry Decoration',
  'Flower Decoration',
  'Backdrop',
  'Ceiling Decoration',
  'Lighting',
  'Table Decoration',
  'Sofa & Seating',
  'Bride/Groom Entry',
  'Haldi Decoration',
  'Mehndi Decoration',
  'Photo Booth',
  'Decorative Props',
  'Decoration Packages'
] as const;
