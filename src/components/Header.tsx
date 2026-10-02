import React from 'react';
import { Sparkles, BookOpen, MessageSquareText, HeartHandshake, BookmarkCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: 'chat' | 'catalogue';
  onTabChange: (tab: 'chat' | 'catalogue') => void;
  enquiryCount: number;
  onOpenEnquiry: () => void;
  totalEstimatedBudget: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  enquiryCount,
  onOpenEnquiry,
  totalEstimatedBudget,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#9B2226] via-[#AE2012] to-[#CA6702] flex items-center justify-center text-white shadow-md shadow-[#9B2226]/15 ring-2 ring-[#E9D8A6]/60">
              <Sparkles className="w-5 h-5 text-[#FFDDD2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold text-[#4B1E19] tracking-wider">
                  VIVAAH WEDDINGS
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded-full bg-[#E9D8A6]/40 text-[#6B2D1B] border border-[#CA6702]/20">
                  Curated Celebrations
                </span>
              </div>
              <p className="text-xs text-[#7F5539] font-medium hidden sm:block">
                Bespoke Indian Wedding Decoration &amp; Event Management
              </p>
            </div>
          </div>

          {/* Navigation Mode Switcher */}
          <nav className="flex items-center bg-[#F3EFEA] p-1.5 rounded-xl border border-[#E5DAC8] shadow-inner">
            <button
              onClick={() => onTabChange('chat')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'chat'
                  ? 'bg-white text-[#9B2226] shadow-sm font-bold border border-[#E8DEC8]'
                  : 'text-[#6C584C] hover:text-[#2D2422]'
              }`}
            >
              <MessageSquareText className="w-4 h-4 text-[#AE2012]" />
              <span>Wedding Consultant</span>
            </button>
            <button
              onClick={() => onTabChange('catalogue')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'catalogue'
                  ? 'bg-white text-[#9B2226] shadow-sm font-bold border border-[#E8DEC8]'
                  : 'text-[#6C584C] hover:text-[#2D2422]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#CA6702]" />
              <span>Explore Catalogue</span>
            </button>
          </nav>

          {/* Shortlist / Enquiry Drawer Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#7B1113] to-[#9B2226] hover:from-[#600D0F] hover:to-[#7B1113] text-white text-xs sm:text-sm font-medium shadow-sm transition-all active:scale-95 border border-[#CA6702]/30"
              title="View your saved wedding enquiry moodboard"
            >
              <BookmarkCheck className="w-4 h-4 text-[#FFDDD2]" />
              <span className="hidden md:inline font-semibold">Enquiry List</span>
              {enquiryCount > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-[#CA6702] text-white text-[11px] font-bold">
                  {enquiryCount}
                </span>
              )}
              {totalEstimatedBudget > 0 && (
                <span className="hidden lg:inline-block text-[11px] bg-black/25 px-2 py-0.5 rounded-md border border-white/10 font-medium">
                  ₹{totalEstimatedBudget.toLocaleString('en-IN')}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
