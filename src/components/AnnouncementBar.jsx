import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function AnnouncementBar({ onOpenTradeIn }) {
  return (
    <aside aria-label="Special Offers" className="bg-[#f5f5f7] border-b border-[#e5e5ea] text-xs py-3 px-4 text-center font-normal text-[#1d1d1f]">
      <div className="max-w-6xl mx-auto flex items-center justify-center space-x-1.5 flex-wrap">
        <span>Get $180–$650 in credit when you trade in iPhone 11 or higher.<sup>1</sup></span>
        <button
          onClick={onOpenTradeIn}
          className="text-[#0071e3] hover:underline inline-flex items-center font-medium transition-colors"
        >
          Shop iPhone <ChevronRight size={13} className="ml-0.5" />
        </button>
      </div>
    </aside>
  );
}
