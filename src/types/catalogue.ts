export type CatalogueCategory =
  | 'Decoration'
  | 'Catering'
  | 'Venue'
  | 'Photography & Videography'
  | 'Entertainment'
  | 'Makeup & Mehndi'
  | 'Event Rentals'
  | 'Complete Wedding Packages';

export type DecorationSubService =
  | 'Mandap'
  | 'Stage'
  | 'Entry Decoration'
  | 'Flower Decoration'
  | 'Backdrop'
  | 'Ceiling Decoration'
  | 'Lighting'
  | 'Table Decoration'
  | 'Sofa & Seating'
  | 'Bride/Groom Entry'
  | 'Haldi Decoration'
  | 'Mehndi Decoration'
  | 'Photo Booth'
  | 'Decorative Props'
  | 'Decoration Packages';

export type FlowerType = 'Fresh Flowers' | 'Artificial Flowers' | 'Mixed' | 'None';

export type PricingType = 'fixed' | 'per_person' | 'package' | 'per_day';

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  description: string;
}

export interface CatalogueItem {
  id: string;
  name: string;
  category: CatalogueCategory;
  subService?: DecorationSubService | string;
  description: string;
  suitableFor: string;
  style: string;
  type: string;
  price: number;
  priceFormatted: string;
  pricingType: PricingType;
  flowerType?: FlowerType;
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  options: string[];
  addOns: AddOnOption[];
  guestRange?: string;
  guestCapacityMax?: number;
  sizeDimensions?: string;
  duration?: string;
  locationSuitability?: string;
  setupDetails?: string;
  images: string[];
  importantNotes: string[];
  tags: string[];
  isFeatured?: boolean;
  packageType?: 'Individual Service' | 'Package' | 'Add-on';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  matchedItems?: CatalogueItem[];
  suggestedQueries?: string[];
  queryIntent?: {
    identifiedCategory?: string;
    style?: string;
    budgetLimit?: number;
    guestCount?: number;
  };
}

export interface EnquiryItem {
  item: CatalogueItem;
  selectedAddOns: string[];
  notes?: string;
  quantity?: number;
}
