import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  isUser?: boolean;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
  isUser = false,
}) => {
  return (
    <div className={`markdown-content text-xs sm:text-sm leading-relaxed ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className={`font-display text-base sm:text-lg font-bold my-2 ${isUser ? 'text-white' : 'text-[#4B1E19]'}`}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={`font-display text-sm sm:text-base font-bold my-2 ${isUser ? 'text-white' : 'text-[#4B1E19]'}`}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={`font-display text-xs sm:text-sm font-bold my-1.5 ${isUser ? 'text-white' : 'text-[#5C2417]'}`}>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-1.5 leading-relaxed">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className={`font-bold ${isUser ? 'text-white' : 'text-[#2D2422]'}`}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="my-1.5 space-y-1 pl-4 list-disc marker:text-[#AE2012]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-1.5 space-y-1 pl-4 list-decimal marker:text-[#AE2012] marker:font-bold">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed pl-1">{children}</li>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-3 rounded-lg border border-[#E8DEC8]">
              <table className="w-full text-left text-xs border-collapse">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#FAF7F2] border-b border-[#E8DEC8] text-[#4B1E19] font-bold">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-[#F3EFEA]">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-[#FAF7F2]/50 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-3 py-2 font-semibold text-xs">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-xs">{children}</td>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#CA6702] pl-3 my-2 text-xs italic text-[#7F5539]">
              {children}
            </blockquote>
          ),
          hr: () => (
            <hr className="my-3 border-t border-[#E8DEC8]" />
          ),
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-[#FAF7F2] border border-[#E5DAC8] text-[#8F3900] text-[11px] font-mono">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
