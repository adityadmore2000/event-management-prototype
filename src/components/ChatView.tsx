import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, CatalogueItem } from '../types/catalogue.ts';
import { CatalogueCard } from './CatalogueCard.tsx';
import { MarkdownRenderer } from './MarkdownRenderer.tsx';
import {
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Tag,
  HeartHandshake
} from 'lucide-react';

interface ChatViewProps {
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  onViewDetails: (item: CatalogueItem) => void;
  onAddToEnquiry: (item: CatalogueItem) => void;
  shortlistedItemIds: string[];
  onResetChat: () => void;
}

const SAMPLE_STARTER_PROMPTS = [
  {
    title: 'Simple 150-Guest Wedding',
    prompt: "I'm planning a simple wedding for around 150 people. I want nice decoration but don't want to spend too much.",
    badge: 'Intimate',
  },
  {
    title: 'Fresh Floral Mandap',
    prompt: 'Show me floral mandaps covered with fresh flowers like roses and tuberose.',
    badge: 'Floral',
  },
  {
    title: 'Decor Under ₹50,000',
    prompt: 'Show me wedding decoration options and stages under ₹50,000.',
    badge: 'Budget',
  },
  {
    title: 'Royal Rajwadi Grandeur',
    prompt: 'I want a royal Rajasthani palace theme with a dome mandap and warm ambient lighting.',
    badge: 'Royal',
  },
  {
    title: 'Package Comparison',
    prompt: 'What is the difference between your standard and premium decoration packages?',
    badge: 'Packages',
  },
  {
    title: 'Food, Decor & Photo Combo',
    prompt: 'I need food, decoration, and photography for my wedding.',
    badge: 'Complete',
  },
  {
    title: 'Haldi & Mehndi Setup',
    prompt: 'Show me Haldi and Mehndi decoration with vibrant marigolds, jhoola swing, and photo corner.',
    badge: 'Ceremonies',
  },
];

export const ChatView: React.FC<ChatViewProps> = ({
  messages,
  onSendMessage,
  isLoading,
  onViewDetails,
  onAddToEnquiry,
  shortlistedItemIds,
  onResetChat,
}) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input.trim());
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handlePromptClick = (promptText: string) => {
    onSendMessage(promptText);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] max-w-5xl mx-auto w-full">
      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Welcome Consultant Banner if initial conversation */}
        {messages.length <= 1 && (
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFF9F3] via-[#FAF3E9] to-[#F5EBE0] border border-[#E8DEC8] shadow-sm space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#9B2226] to-[#CA6702] flex items-center justify-center text-white shrink-0 shadow-md">
                <Sparkles className="w-6 h-6 text-[#FFDDD2]" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-lg sm:text-xl font-bold text-[#4B1E19]">
                    Welcome to Vivaah Wedding Curators
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#6C584C] leading-relaxed">
                  Tell us about your wedding vision—whether you imagine a fragrant fresh-flower mandap, a grand royal Rajwadi palace theme, or a simple ceremony for 150 guests with elegant lighting. We are here to guide you and find the best matches for your celebration.
                </p>
              </div>
            </div>

            {/* Quick Starter Chips */}
            <div className="pt-2 border-t border-[#E8DEC8]/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7F5539] block mb-2.5">
                Popular inquiries to get started:
              </span>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_STARTER_PROMPTS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePromptClick(p.prompt)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#E5DAC8] hover:border-[#CA6702] text-xs text-[#523A28] font-medium transition-all shadow-2xs hover:shadow-xs active:scale-98 text-left"
                  >
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#E9D8A6]/40 text-[#8F3900]">
                      {p.badge}
                    </span>
                    <span>{p.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Conversation Stream */}
        {messages.map((message) => {
          const isUser = message.role === 'user';

          return (
            <div
              key={message.id}
              className={`flex items-start gap-3 sm:gap-4 ${
                isUser ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                  isUser
                    ? 'bg-[#4B1E19] text-white'
                    : 'bg-gradient-to-tr from-[#9B2226] to-[#CA6702] text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-[#FFDDD2]" />}
              </div>

              {/* Message Content Container */}
              <div className={`space-y-3 max-w-[85%] sm:max-w-[78%] ${isUser ? 'text-right' : 'text-left'}`}>
                {/* Speech Bubble with rendered Markdown */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl shadow-xs ${
                    isUser
                      ? 'bg-gradient-to-r from-[#7B1113] to-[#9B2226] text-white rounded-tr-none'
                      : 'bg-white border border-[#E8DEC8] text-[#2D2422] rounded-tl-none'
                  }`}
                >
                  <MarkdownRenderer
                    content={message.content}
                    isUser={isUser}
                  />
                </div>

                {/* Embedded Matched Catalogue Cards */}
                {message.matchedItems && message.matchedItems.length > 0 && (
                  <div className="pt-1">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <Tag className="w-3.5 h-3.5 text-[#CA6702]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7F5539]">
                        Recommended Options for You ({message.matchedItems.length})
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {message.matchedItems.map((item) => (
                        <CatalogueCard
                          key={item.id}
                          item={item}
                          onViewDetails={onViewDetails}
                          onAddToEnquiry={onAddToEnquiry}
                          onAskAI={(item) =>
                            onSendMessage(`Tell me more about ${item.name} and how it fits into our wedding.`)
                          }
                          isShortlisted={shortlistedItemIds.includes(item.id)}
                          compact
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested Follow-up Prompts */}
                {message.suggestedQueries && message.suggestedQueries.length > 0 && (
                  <div className="pt-1 flex flex-wrap gap-2">
                    {message.suggestedQueries.map((query, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePromptClick(query)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#F3EFEA] border border-[#E5DAC8] text-xs text-[#6B2D1B] font-medium hover:border-[#CA6702] transition-colors text-left"
                      >
                        <Sparkles className="w-3 h-3 text-[#CA6702]" />
                        <span>{query}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#9B2226] to-[#CA6702] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Bot className="w-4 h-4 text-[#FFDDD2] animate-pulse" />
            </div>
            <div className="p-4 rounded-2xl rounded-tl-none bg-white border border-[#E8DEC8] text-xs text-[#7F5539] flex items-center gap-2.5 shadow-xs">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#AE2012] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-[#CA6702] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-[#E9D8A6] animate-bounce" />
              </div>
              <span className="font-medium text-[#523A28]">Finding the best matches for your celebration...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Bar */}
      <div className="p-4 sm:p-5 bg-white border-t border-[#E8DEC8] shadow-lg">
        <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe what you're looking for, e.g. 'Floral mandap with roses and warm lights under ₹60,000'..."
            rows={1}
            disabled={isLoading}
            className="w-full resize-none rounded-2xl pl-4 pr-12 py-3 bg-[#FAF7F2] border border-[#E5DAC8] text-sm text-[#2D2422] placeholder:text-[#9C8B7F] focus:outline-none focus:border-[#9B2226] focus:ring-2 focus:ring-[#9B2226]/10 transition-all max-h-32 min-h-[48px]"
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2.5 rounded-xl bg-[#9B2226] hover:bg-[#7B1113] disabled:opacity-40 disabled:hover:bg-[#9B2226] text-white shadow-sm transition-all active:scale-95 flex items-center justify-center"
            title="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-2 flex items-center justify-between text-[11px] text-[#8C7A6B]">
          <span className="flex items-center gap-1.5 text-[#7F5539]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#AE2012]" />
            Personalized Indian wedding curation and consultation
          </span>

          {messages.length > 2 && (
            <button
              onClick={onResetChat}
              className="flex items-center gap-1 hover:text-[#9B2226] transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Start New Conversation</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
