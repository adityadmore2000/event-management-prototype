import React from 'react';
import { CatalogueItem } from '../types/catalogue.ts';
import { Sparkles, Eye, Plus, Check, MessageSquare, Flower2, Users, IndianRupee } from 'lucide-react';

interface CatalogueCardProps {
  item: CatalogueItem;
  onViewDetails: (item: CatalogueItem) => void;
  onAddToEnquiry: (item: CatalogueItem) => void;
  onAskAI?: (item: CatalogueItem) => void;
  isShortlisted?: boolean;
  compact?: boolean;
}

export const CatalogueCard: React.FC<CatalogueCardProps> = ({
  item,
  onViewDetails,
  onAddToEnquiry,
  onAskAI,
  isShortlisted = false,
  compact = false,
}) => {
  const primaryImage = item.images && item.images.length > 0
    ? item.images[0]
    : 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';

  return (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${
      isShortlisted
        ? 'border-[#9B2226] ring-2 ring-[#9B2226]/10 shadow-md'
        : 'border-[#E8DEC8] hover:border-[#CA6702]/60 hover:shadow-lg'
    } ${compact ? 'max-w-sm' : 'w-full'}`}>
      {/* Visual Cover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F3EFEA]">
        <img
          src={primaryImage}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category & Badge Row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/60 backdrop-blur-md text-white border border-white/20">
            {item.subService || item.category}
          </span>

          {item.flowerType && item.flowerType !== 'None' && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#E9D8A6]/90 backdrop-blur-md text-[#6B2D1B]">
              <Flower2 className="w-3 h-3 text-[#AE2012]" />
              {item.flowerType}
            </span>
          )}
        </div>

        {/* Style & Price tag overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="text-xs text-white/90 font-medium truncate max-w-[65%] drop-shadow-sm">
            {item.style}
          </span>
          <div className="bg-[#9B2226] text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-md border border-[#CA6702]/30 flex items-center gap-0.5">
            <span>{item.priceFormatted}</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm sm:text-base text-[#2D2422] group-hover:text-[#9B2226] transition-colors line-clamp-1">
            {item.name}
          </h3>

          <p className="text-xs text-[#6C584C] mt-1 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Quick Specifications */}
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#7F5539]">
            {item.guestRange && (
              <span className="inline-flex items-center gap-1 bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#E5DAC8]">
                <Users className="w-3 h-3 text-[#CA6702]" />
                {item.guestRange}
              </span>
            )}
            {item.pricingType === 'package' && (
              <span className="inline-flex items-center gap-1 bg-[#E9D8A6]/30 text-[#8F3900] px-2 py-0.5 rounded border border-[#CA6702]/20 font-medium">
                Bundled Package
              </span>
            )}
          </div>

          {/* Inclusions preview */}
          {item.whatsIncluded && item.whatsIncluded.length > 0 && (
            <div className="mt-3 pt-3 border-t border-[#F3EFEA]">
              <span className="text-[10px] uppercase font-bold text-[#A68A78] tracking-wider block mb-1">
                Includes:
              </span>
              <ul className="text-xs text-[#523A28] space-y-1">
                {item.whatsIncluded.slice(0, 2).map((inc, i) => (
                  <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                    <span className="text-[#AE2012] font-bold">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
                {item.whatsIncluded.length > 2 && (
                  <li className="text-[11px] text-[#9B2226] font-medium pl-3">
                    + {item.whatsIncluded.length - 2} more inclusions...
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-t border-[#F3EFEA] flex items-center justify-between gap-2">
          <button
            onClick={() => onViewDetails(item)}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold bg-[#F5EBE0] hover:bg-[#EBD9C8] text-[#5A3825] transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#AE2012]" />
            <span>Details</span>
          </button>

          <button
            onClick={() => onAddToEnquiry(item)}
            className={`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
              isShortlisted
                ? 'bg-[#2B9348] text-white'
                : 'bg-[#9B2226] hover:bg-[#7B1113] text-white shadow-sm'
            }`}
          >
            {isShortlisted ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Saved</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Save</span>
              </>
            )}
          </button>

          {onAskAI && (
            <button
              onClick={() => onAskAI(item)}
              title="Ask Vivaah AI about this item"
              className="p-1.5 rounded-lg border border-[#E8DEC8] hover:bg-[#F3EFEA] text-[#7F5539] hover:text-[#9B2226] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
