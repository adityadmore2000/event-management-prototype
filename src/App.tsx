import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { ChatView } from './components/ChatView.tsx';
import { CatalogueExplorer } from './components/CatalogueExplorer.tsx';
import { ItemDetailModal } from './components/ItemDetailModal.tsx';
import { EnquiryDrawer } from './components/EnquiryDrawer.tsx';
import { CatalogueItem, ChatMessage, EnquiryItem } from './types/catalogue.ts';
import { WEDDING_CATALOGUE } from './data/weddingCatalogue.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'catalogue'>('chat');
  const [catalogueItems, setCatalogueItems] = useState<CatalogueItem[]>(WEDDING_CATALOGUE);
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<CatalogueItem | null>(null);
  const [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen] = useState(false);
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initial welcome message from the consultant
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      role: 'assistant',
      content:
        'Namaste! Welcome to Vivaah Wedding Curators. I am here to help you discover the perfect decoration, mandap, stage, and arrangements for your wedding.\n\nFeel free to tell me about your vision—whether you have a particular style in mind like fresh floral or royal palace, an approximate guest count, or a specific budget you would like to stay within.\n\nHow can I assist you with your wedding plans today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      matchedItems: [
        WEDDING_CATALOGUE.find(i => i.id === 'decor-pkg-01')!,
        WEDDING_CATALOGUE.find(i => i.id === 'decor-mandap-01')!,
        WEDDING_CATALOGUE.find(i => i.id === 'decor-stage-02')!,
      ].filter(Boolean),
      suggestedQueries: [
        'Simple floral wedding for 150 guests',
        'Floral mandap under ₹50,000',
        'What is included in the Shubh Aarambh package?',
        'Show me royal Rajwadi mandaps with warm lights',
      ],
    },
  ]);

  // Fetch catalogue from API on mount
  useEffect(() => {
    fetch('/api/catalogue')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.items) && data.items.length > 0) {
          setCatalogueItems(data.items);
        }
      })
      .catch(err => {
        console.warn('Could not fetch catalogue from backend, using bundled catalogue data:', err);
      });
  }, []);

  // Send message to AI
  const handleSendMessage = async (text: string) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat API responded with status ${response.status}`);
      }

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        matchedItems: data.matchedItems || [],
        suggestedQueries: data.suggestedQueries || [],
        queryIntent: data.filtersApplied,
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      // Fallback message grounded in catalogue
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content:
          'I apologize, but I had trouble reaching our live consultation engine. Based on our structured catalogue, here are relevant wedding options matching your query.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        matchedItems: catalogueItems.slice(0, 3),
        suggestedQueries: [
          'Show me decoration packages',
          'Vedic Serenity Temple Mandap',
          'Catering for 150 guests',
        ],
      };
      setMessages(prev => [...prev, assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Add item to enquiry list
  const handleAddToEnquiry = (item: CatalogueItem, selectedAddOns?: string[]) => {
    setEnquiryItems(prev => {
      const existingIndex = prev.findIndex(e => e.item.id === item.id);
      if (existingIndex >= 0) {
        // Update add-ons
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          selectedAddOns: selectedAddOns || updated[existingIndex].selectedAddOns,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            item,
            selectedAddOns: selectedAddOns || [],
            quantity: 1,
          },
        ];
      }
    });
  };

  const handleRemoveFromEnquiry = (itemId: string) => {
    setEnquiryItems(prev => prev.filter(e => e.item.id !== itemId));
  };

  const handleClearAllEnquiry = () => {
    setEnquiryItems([]);
  };

  const handleAskAIAboutItem = (item: CatalogueItem) => {
    setActiveTab('chat');
    handleSendMessage(`Tell me more about ${item.name} (${item.priceFormatted}). What is included and what add-ons do you recommend with it?`);
  };

  const handleAskAIAboutPlan = () => {
    setActiveTab('chat');
    const itemNames = enquiryItems.map(e => e.item.name).join(', ');
    handleSendMessage(
      `I have shortlisted the following wedding services in my enquiry moodboard: ${itemNames}. Can you review this plan, tell me if any essential wedding areas are missing, and summarize how they fit together?`
    );
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'msg-welcome',
        role: 'assistant',
        content:
          'Namaste! Welcome back. What kind of wedding setup, mandap, or arrangements can I help you explore today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        matchedItems: [
          catalogueItems.find(i => i.id === 'decor-pkg-01')!,
          catalogueItems.find(i => i.id === 'decor-mandap-01')!,
        ].filter(Boolean),
        suggestedQueries: [
          'Simple floral wedding for 150 guests',
          'Floral mandap under ₹50,000',
          'Royal Rajwadi mandap with fresh red roses',
        ],
      },
    ]);
  };

  // Compute total estimated budget
  const totalEstimatedBudget = enquiryItems.reduce((sum, entry) => {
    let p = entry.item.price;
    if (entry.selectedAddOns && entry.item.addOns) {
      entry.selectedAddOns.forEach(addonId => {
        const addon = entry.item.addOns.find(a => a.id === addonId);
        if (addon) p += addon.price;
      });
    }
    return sum + p;
  }, 0);

  const shortlistedItemIds = enquiryItems.map(e => e.item.id);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2422] flex flex-col selection:bg-[#E9D8A6] selection:text-[#6B2D1B]">
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        enquiryCount={enquiryItems.length}
        onOpenEnquiry={() => setIsEnquiryDrawerOpen(true)}
        totalEstimatedBudget={totalEstimatedBudget}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'chat' ? (
          <ChatView
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            onViewDetails={(item) => setSelectedItemForDetail(item)}
            onAddToEnquiry={handleAddToEnquiry}
            shortlistedItemIds={shortlistedItemIds}
            onResetChat={handleResetChat}
          />
        ) : (
          <CatalogueExplorer
            items={catalogueItems}
            onViewDetails={(item) => setSelectedItemForDetail(item)}
            onAddToEnquiry={handleAddToEnquiry}
            onAskAI={handleAskAIAboutItem}
            shortlistedItemIds={shortlistedItemIds}
          />
        )}
      </main>

      {/* Item Detail Modal */}
      {selectedItemForDetail && (
        <ItemDetailModal
          item={selectedItemForDetail}
          onClose={() => setSelectedItemForDetail(null)}
          onAddToEnquiry={handleAddToEnquiry}
          isShortlisted={shortlistedItemIds.includes(selectedItemForDetail.id)}
          onAskAI={(question) => {
            setActiveTab('chat');
            handleSendMessage(question);
          }}
        />
      )}

      {/* Enquiry Moodboard Drawer */}
      <EnquiryDrawer
        isOpen={isEnquiryDrawerOpen}
        onClose={() => setIsEnquiryDrawerOpen(false)}
        items={enquiryItems}
        onRemoveItem={handleRemoveFromEnquiry}
        onClearAll={handleClearAllEnquiry}
        onAskAIAboutPlan={handleAskAIAboutPlan}
      />
    </div>
  );
}
