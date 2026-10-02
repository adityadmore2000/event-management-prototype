import React, { useState } from 'react';
import { EnquiryItem } from '../types/catalogue.ts';
import { X, Trash2, Copy, Check, Info, FileSpreadsheet, ArrowRight } from 'lucide-react';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: EnquiryItem[];
  onRemoveItem: (itemId: string) => void;
  onClearAll: () => void;
  onAskAIAboutPlan: () => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
  onAskAIAboutPlan,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Calculate total estimated budget
  const totalBasePrice = items.reduce((sum, entry) => {
    let price = entry.item.price;
    // Add selected add-ons
    if (entry.selectedAddOns && entry.item.addOns) {
      entry.selectedAddOns.forEach(addonId => {
        const addon = entry.item.addOns.find(a => a.id === addonId);
        if (addon) price += addon.price;
      });
    }
    return sum + price;
  }, 0);

  const generateSummaryText = () => {
    let text = `🌸 MY WEDDING CATALOGUE ENQUIRY SUMMARY 🌸\n`;
    text += `Generated via Vivaah AI Wedding Catalogue Assistant\n\n`;
    text += `Total Shortlisted Offerings: ${items.length}\n`;
    text += `Estimated Total Investment: ₹${totalBasePrice.toLocaleString('en-IN')}\n\n`;
    text += `--- SELECTED ITEMS ---\n\n`;

    items.forEach((entry, idx) => {
      text += `${idx + 1}. ${entry.item.name} (${entry.item.category}${entry.item.subService ? ' - ' + entry.item.subService : ''})\n`;
      text += `   Base Price: ${entry.item.priceFormatted}\n`;
      text += `   Style: ${entry.item.style}\n`;
      if (entry.item.flowerType && entry.item.flowerType !== 'None') {
        text += `   Flowers: ${entry.item.flowerType}\n`;
      }
      if (entry.selectedAddOns && entry.selectedAddOns.length > 0) {
        text += `   Selected Add-ons:\n`;
        entry.selectedAddOns.forEach(addonId => {
          const addon = entry.item.addOns.find(a => a.id === addonId);
          if (addon) {
            text += `     + ${addon.name} (${addon.priceFormatted})\n`;
          }
        });
      }
      text += `   Key Inclusions: ${entry.item.whatsIncluded.slice(0, 3).join(', ')}\n\n`;
    });

    text += `\n*Note: Booking dates, custom floral palettes, and venue coordination will be confirmed directly with your wedding planner.`;
    return text;
  };

  const handleCopySummary = () => {
    const summary = generateSummaryText();
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-[#E8DEC8] animate-slideIn">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#F0E6D8] flex items-center justify-between bg-[#FAF7F2]">
          <div>
            <h3 className="font-display text-lg font-bold text-[#4B1E19]">
              Wedding Enquiry List
            </h3>
            <p className="text-xs text-[#7F5539]">
              {items.length} {items.length === 1 ? 'item' : 'items'} shortlisted from catalogue
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7F5539] hover:bg-[#F3EFEA] hover:text-[#2D2422]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#7F5539]">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#E8DEC8] flex items-center justify-center mb-3">
                <FileSpreadsheet className="w-7 h-7 text-[#CA6702]" />
              </div>
              <p className="font-semibold text-sm text-[#2D2422]">No items shortlisted yet</p>
              <p className="text-xs mt-1 text-[#8C7A6B] max-w-xs">
                As you chat with Vivaah AI or explore the catalogue, click "Save" to collect mandaps, stages, and packages here for enquiry.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((entry, idx) => (
                <div
                  key={entry.item.id}
                  className="p-3.5 rounded-xl border border-[#E8DEC8] bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <span className="text-[10px] uppercase font-bold text-[#CA6702] tracking-wider">
                        {entry.item.subService || entry.item.category}
                      </span>
                      <h4 className="text-xs font-bold text-[#2D2422] line-clamp-1 mt-0.5">
                        {entry.item.name}
                      </h4>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xs font-extrabold text-[#9B2226]">
                          {entry.item.priceFormatted}
                        </span>
                        <span className="text-[10px] text-[#7F5539]">
                          ({entry.item.pricingType.replace('_', ' ')})
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(entry.item.id)}
                      className="p-1 text-[#A68A78] hover:text-[#AE2012] transition-colors"
                      title="Remove from enquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add-ons list if any */}
                  {entry.selectedAddOns && entry.selectedAddOns.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-[#E8DEC8]/60 text-[11px] text-[#5C4D44] space-y-1">
                      <span className="font-semibold text-[10px] text-[#7F5539]">Included Add-ons:</span>
                      {entry.selectedAddOns.map(addonId => {
                        const addon = entry.item.addOns.find(a => a.id === addonId);
                        if (!addon) return null;
                        return (
                          <div key={addon.id} className="flex items-center justify-between text-[11px]">
                            <span>+ {addon.name}</span>
                            <span className="font-bold text-[#9B2226]">{addon.priceFormatted}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onClearAll}
                  className="text-xs text-[#9B2226] hover:underline font-medium"
                >
                  Clear all items
                </button>
              </div>
            </div>
          )}

          {/* Wedding Consultation Notice */}
          <div className="p-3 rounded-xl bg-[#FFFBEA] border border-[#F2DE9C] text-xs text-[#705200] flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 text-[#CA6702] mt-0.5" />
            <p>
              Our wedding planning team will review your shortlisted selections to coordinate setup schedules, floral freshness, and on-site logistics.
            </p>
          </div>
        </div>

        {/* Drawer Footer with Total & Export */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#F0E6D8] bg-[#FAF7F2] space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase font-bold text-[#7F5539]">
                Estimated Total:
              </span>
              <span className="font-display text-xl font-extrabold text-[#9B2226]">
                ₹{totalBasePrice.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCopySummary}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#9B2226] hover:bg-[#7B1113] text-white shadow-sm transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#A7C957]" />
                    <span>Enquiry Summary Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Enquiry Summary</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onAskAIAboutPlan();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-semibold text-[#5A3825] hover:bg-[#EBD9C8] bg-[#F5EBE0] transition-colors"
              >
                <span>Ask Vivaah AI to review this plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CA6702]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
