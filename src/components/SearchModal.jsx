import React, { useState } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { latestProducts, accessoriesData } from '../data/storeData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const quickLinks = [
    'iPhone 16 Pro',
    'iPhone 16',
    'Apple Watch Series 10',
    'AirPods 4',
    'MagSafe Charger',
    'Apple Intelligence',
  ];

  const searchResults = query.trim()
    ? [...latestProducts, ...accessoriesData].filter((item) =>
        (item.title || item.name || '').toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md animate-in fade-in duration-200 flex flex-col items-center pt-20 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-apple-modal overflow-hidden border border-[#e5e5ea] animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="p-4 px-6 border-b border-[#e5e5ea] flex items-center space-x-3">
          <Search size={20} className="text-[#86868b]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apple.com or products"
            className="flex-1 text-base text-[#1d1d1f] focus:outline-none placeholder:text-[#86868b]"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          {query.trim() === '' ? (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setQuery(item)}
                      className="flex items-center justify-between w-full text-left py-2 px-3 rounded-xl hover:bg-[#f5f5f7] text-sm text-[#1d1d1f] group transition-colors"
                    >
                      <span>{item}</span>
                      <ChevronRight size={14} className="text-[#86868b] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] mb-3">
                Results ({searchResults.length})
              </h4>
              {searchResults.length === 0 ? (
                <p className="text-sm text-[#86868b] py-6 text-center">No results found for "{query}".</p>
              ) : (
                <div className="space-y-2">
                  {searchResults.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (item.category && item.colors) {
                          onSelectProduct(item);
                        }
                        onClose();
                      }}
                      className="flex items-center space-x-3 p-3 rounded-2xl hover:bg-[#f5f5f7] cursor-pointer transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.title || item.name}
                        className="w-10 h-10 object-contain rounded-lg bg-white p-1 border border-black/5"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[#1d1d1f]">{item.title || item.name}</p>
                        <p className="text-xs text-[#6e6e73]">{item.price}</p>
                      </div>
                      <ChevronRight size={14} className="text-[#86868b]" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
