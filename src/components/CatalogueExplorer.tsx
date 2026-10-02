import React, { useState, useMemo } from 'react';
import { CatalogueItem, CatalogueCategory, DecorationSubService } from '../types/catalogue.ts';
import { CATALOGUE_CATEGORIES, DECORATION_SUB_SERVICES } from '../data/weddingCatalogue.ts';
import { CatalogueCard } from './CatalogueCard.tsx';
import {
  Search,
  Filter,
  Sparkles,
  SlidersHorizontal,
  X,
  Flower2,
  Package,
  Layers
} from 'lucide-react';

interface CatalogueExplorerProps {
  items: CatalogueItem[];
  onViewDetails: (item: CatalogueItem) => void;
  onAddToEnquiry: (item: CatalogueItem) => void;
  onAskAI: (item: CatalogueItem) => void;
  shortlistedItemIds: string[];
}

export const CatalogueExplorer: React.FC<CatalogueExplorerProps> = ({
  items,
  onViewDetails,
  onAddToEnquiry,
  onAskAI,
  shortlistedItemIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubService, setSelectedSubService] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [selectedFlowerType, setSelectedFlowerType] = useState<string>('All');

  // Filter logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Sub-service filter (for Decoration)
      if (
        selectedSubService !== 'All' &&
        item.subService !== selectedSubService
      ) {
        return false;
      }

      // Flower type filter
      if (
        selectedFlowerType !== 'All' &&
        item.flowerType !== selectedFlowerType
      ) {
        return false;
      }

      // Price range filter
      if (selectedPriceRange !== 'All') {
        if (selectedPriceRange === 'under50k' && item.price > 50000) return false;
        if (
          selectedPriceRange === '50kTo1L' &&
          (item.price <= 50000 || item.price > 100000)
        )
          return false;
        if (selectedPriceRange === 'above1L' && item.price <= 100000) return false;
      }

      // Text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const corpus = [
          item.name,
          item.description,
          item.style,
          item.type,
          item.category,
          item.subService || '',
          ...item.tags,
        ]
          .join(' ')
          .toLowerCase();

        if (!corpus.includes(q)) return false;
      }

      return true;
    });
  }, [
    items,
    searchQuery,
    selectedCategory,
    selectedSubService,
    selectedPriceRange,
    selectedFlowerType,
  ]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSubService('All');
    setSelectedPriceRange('All');
    setSelectedFlowerType('All');
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== 'All' ||
    selectedSubService !== 'All' ||
    selectedPriceRange !== 'All' ||
    selectedFlowerType !== 'All';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Search & Header banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#4B1E19]">
            Structured Wedding Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-[#7F5539] mt-1">
            Browse our complete wedding inventory: Mandaps, Stages, Entry pathways, Catering, and Complete Bundles.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#A68A78] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mandaps, stages, marigold..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E5DAC8] text-xs sm:text-sm placeholder:text-[#9C8B7F] focus:outline-none focus:border-[#9B2226] focus:ring-1 focus:ring-[#9B2226]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A68A78] hover:text-[#2D2422]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Slider */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedSubService('All');
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-[#9B2226] text-white shadow-sm'
                : 'bg-white text-[#6C584C] hover:bg-[#F3EFEA] border border-[#E5DAC8]'
            }`}
          >
            All Categories ({items.length})
          </button>

          {CATALOGUE_CATEGORIES.map((cat) => {
            const count = items.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSubService('All');
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#9B2226] text-white shadow-sm'
                    : 'bg-white text-[#6C584C] hover:bg-[#F3EFEA] border border-[#E5DAC8]'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Sub-Service Pills (if Decoration selected) */}
        {(selectedCategory === 'Decoration' || selectedCategory === 'All') && (
          <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#E8DEC8] space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7F5539] block">
              Decoration Sub-Services:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setSelectedSubService('All')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedSubService === 'All'
                    ? 'bg-[#CA6702] text-white font-bold'
                    : 'bg-white text-[#6C584C] hover:bg-[#F3EFEA] border border-[#E8DEC8]'
                }`}
              >
                All Decoration ({items.filter(i => i.category === 'Decoration').length})
              </button>
              {DECORATION_SUB_SERVICES.map((sub) => {
                const count = items.filter(
                  (i) => i.category === 'Decoration' && i.subService === sub
                ).length;
                if (count === 0) return null;
                const isSelected = selectedSubService === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => {
                      setSelectedCategory('Decoration');
                      setSelectedSubService(sub);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-[#CA6702] text-white font-bold'
                        : 'bg-white text-[#6C584C] hover:bg-[#F3EFEA] border border-[#E8DEC8]'
                    }`}
                  >
                    {sub} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Auxiliary Filters Row: Price, Flower Type, Clear */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-3">
          {/* Price Range Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#523A28]">
            <span className="font-semibold text-[#7F5539]">Budget:</span>
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="bg-white border border-[#E5DAC8] rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#2D2422] focus:outline-none focus:border-[#9B2226]"
            >
              <option value="All">Any Price</option>
              <option value="under50k">Under ₹50,000</option>
              <option value="50kTo1L">₹50,000 - ₹1,00,000</option>
              <option value="above1L">Above ₹1,00,000</option>
            </select>
          </div>

          {/* Flower Type Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#523A28]">
            <span className="font-semibold text-[#7F5539]">Flowers:</span>
            <select
              value={selectedFlowerType}
              onChange={(e) => setSelectedFlowerType(e.target.value)}
              className="bg-white border border-[#E5DAC8] rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#2D2422] focus:outline-none focus:border-[#9B2226]"
            >
              <option value="All">All Flowers</option>
              <option value="Fresh Flowers">100% Fresh Flowers</option>
              <option value="Mixed">Mixed Flowers</option>
              <option value="Artificial Flowers">Artificial Flowers</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-[#9B2226] font-semibold hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        <span className="text-xs text-[#7F5539]">
          Showing <strong>{filteredItems.length}</strong> of {items.length} offerings
        </span>
      </div>

      {/* Catalogue Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <CatalogueCard
              key={item.id}
              item={item}
              onViewDetails={onViewDetails}
              onAddToEnquiry={onAddToEnquiry}
              onAskAI={onAskAI}
              isShortlisted={shortlistedItemIds.includes(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#E8DEC8] space-y-3">
          <p className="text-base font-bold text-[#2D2422]">
            No catalogue offerings matched your filters
          </p>
          <p className="text-xs text-[#7F5539] max-w-sm mx-auto">
            Try adjusting your search query, price range, or category filter to discover relevant items.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-xl bg-[#9B2226] text-white text-xs font-semibold hover:bg-[#7B1113] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
