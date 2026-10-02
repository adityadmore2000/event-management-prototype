import React, { useState } from 'react';
import { CatalogueItem } from '../types/catalogue.ts';
import {
  X,
  Check,
  Ban,
  Sparkles,
  Flower2,
  Users,
  Maximize2,
  Clock,
  MapPin,
  BookmarkCheck,
  Plus,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

interface ItemDetailModalProps {
  item: CatalogueItem | null;
  onClose: () => void;
  onAddToEnquiry: (item: CatalogueItem, selectedAddOns?: string[]) => void;
  isShortlisted?: boolean;
  onAskAI?: (question: string) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onAddToEnquiry,
  isShortlisted = false,
  onAskAI,
}) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!item) return null;

  const toggleAddOn = (addonId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const images = item.images && item.images.length > 0
    ? item.images
    : ['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E8DEC8] max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-[#F0E6D8]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF7F2] text-[#9B2226] border border-[#CA6702]/30">
              {item.category} • {item.subService || item.type}
            </span>
            {item.style && (
              <span className="text-xs text-[#7F5539] font-medium hidden sm:inline">
                Style: {item.style}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7F5539] hover:bg-[#F5EBE0] hover:text-[#2D2422] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Top Gallery & Quick Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Visual Preview */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F3EFEA] border border-[#E8DEC8]">
                <img
                  src={images[activeImageIndex]}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all"
                />
                {item.flowerType && item.flowerType !== 'None' && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E9D8A6]/90 backdrop-blur-md text-[#6B2D1B]">
                    <Flower2 className="w-3.5 h-3.5 text-[#AE2012]" />
                    {item.flowerType}
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[4/3] w-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#9B2226] ring-2 ring-[#9B2226]/20'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title, Pricing & Vital Specs */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#2D2422] leading-tight">
                  {item.name}
                </h2>

                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-2xl font-extrabold text-[#9B2226]">
                    {item.priceFormatted}
                  </span>
                  <span className="text-xs uppercase font-semibold text-[#8C7A6B] bg-[#FAF7F2] px-2.5 py-1 rounded border border-[#E5DAC8]">
                    {item.pricingType.replace('_', ' ')}
                  </span>
                </div>

                <p className="mt-4 text-sm text-[#5C4D44] leading-relaxed">
                  {item.description}
                </p>

                {item.suitableFor && (
                  <div className="mt-4 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] text-xs text-[#6C584C]">
                    <span className="font-bold text-[#9B2226]">Best suited for: </span>
                    {item.suitableFor}
                  </div>
                )}
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs text-[#523A28] pt-3 border-t border-[#F0E6D8]">
                {item.guestRange && (
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F5F0]">
                    <Users className="w-4 h-4 text-[#CA6702]" />
                    <span>{item.guestRange}</span>
                  </div>
                )}
                {item.sizeDimensions && (
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F5F0]">
                    <Maximize2 className="w-4 h-4 text-[#CA6702]" />
                    <span className="truncate">{item.sizeDimensions}</span>
                  </div>
                )}
                {item.duration && (
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F5F0]">
                    <Clock className="w-4 h-4 text-[#CA6702]" />
                    <span>{item.duration}</span>
                  </div>
                )}
                {item.locationSuitability && (
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F5F0]">
                    <MapPin className="w-4 h-4 text-[#CA6702]" />
                    <span className="truncate">{item.locationSuitability}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F0E6D8]">
            {/* What's Included */}
            <div className="p-4 rounded-2xl bg-[#F4F9F4] border border-[#D8EED8]">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#1E5622] mb-3">
                <Check className="w-4 h-4 text-[#2B9348]" />
                What's Included in this Offering
              </h4>
              <ul className="space-y-2 text-xs text-[#2A482A]">
                {item.whatsIncluded.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#2B9348] font-bold text-sm leading-none mt-0.5">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Included */}
            <div className="p-4 rounded-2xl bg-[#FFF7F7] border border-[#FADBD8]">
              <h4 className="flex items-center gap-2 text-sm font-bold text-[#8C1D18] mb-3">
                <Ban className="w-4 h-4 text-[#AE2012]" />
                What's Not Included (Separate / Add-ons)
              </h4>
              {item.whatsNotIncluded && item.whatsNotIncluded.length > 0 ? (
                <ul className="space-y-2 text-xs text-[#6B2D2B]">
                  {item.whatsNotIncluded.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#AE2012] font-bold text-sm leading-none mt-0.5">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-[#7F5539]">No exclusions specified in catalogue.</p>
              )}
            </div>
          </div>

          {/* Options & Themes */}
          {item.options && item.options.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7F5539] mb-2">
                Available Customization Options &amp; Palettes:
              </h4>
              <ul className="space-y-1 text-xs text-[#523A28]">
                {item.options.map((opt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CA6702]" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Add-ons Section */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-[#2D2422] flex items-center justify-between">
                <span>Enhancement Add-ons Available</span>
                <span className="text-xs text-[#7F5539] font-normal">Select to include in enquiry</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.addOns.map(addon => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'border-[#9B2226] bg-[#9B2226]/5 ring-1 ring-[#9B2226]'
                          : 'border-[#E8DEC8] hover:border-[#CA6702] bg-white'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-4 h-4 rounded flex items-center justify-center border text-white text-[10px] ${
                            isChecked ? 'bg-[#9B2226] border-[#9B2226]' : 'border-[#C8B8A6]'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </span>
                          <span className="text-xs font-bold text-[#2D2422]">{addon.name}</span>
                        </div>
                        <p className="text-[11px] text-[#6C584C] mt-1 pl-6">
                          {addon.description}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[#9B2226] whitespace-nowrap">
                        +{addon.priceFormatted}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Important Notes */}
          {item.importantNotes && item.importantNotes.length > 0 && (
            <div className="p-4 rounded-xl bg-[#FFFBEA] border border-[#F2DE9C] flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#CA6702] shrink-0 mt-0.5" />
              <div className="text-xs text-[#705200] space-y-1">
                <span className="font-bold block">Important Catalogue Notes:</span>
                {item.importantNotes.map((note, idx) => (
                  <p key={idx}>• {note}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-10 p-4 bg-white/95 backdrop-blur-md border-t border-[#F0E6D8] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onAskAI && (
              <button
                onClick={() => {
                  onClose();
                  onAskAI(`Can you tell me more about ${item.name} and how it fits into my wedding plan?`);
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-[#E8DEC8] hover:bg-[#FAF7F2] text-[#6C584C] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#CA6702]" />
                <span>Ask AI about this item</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onAddToEnquiry(item, selectedAddOns);
                onClose();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#9B2226] hover:bg-[#7B1113] text-white shadow-md transition-all active:scale-95"
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>{isShortlisted ? 'Update in Enquiry Moodboard' : 'Add to My Wedding Enquiry'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
