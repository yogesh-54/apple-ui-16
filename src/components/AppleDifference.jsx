import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw, CreditCard, Smile, Truck } from 'lucide-react';
import { appleDifferenceItems } from '../data/storeData';

export default function AppleDifference({ onOpenTradeIn }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'TradeIn':
        return <RefreshCw className="w-8 h-8 text-emerald-500" />;
      case 'CreditCard':
        return <CreditCard className="w-8 h-8 text-amber-500" />;
      case 'Smile':
        return <Smile className="w-8 h-8 text-indigo-500" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            <span>The Apple difference. </span>
            <span className="text-[#6e6e73]">Even more reasons to shop with us.</span>
          </h2>
        </div>

        <div className="hidden sm:flex items-center space-x-2.5">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d8d8dd] flex items-center justify-center text-[#1d1d1f] transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards list */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
      >
        {appleDifferenceItems.map((item) => (
          <div
            key={item.id}
            onClick={item.icon === 'TradeIn' ? onOpenTradeIn : undefined}
            className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] h-[340px] bg-white rounded-apple-lg p-7 flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center group-hover:scale-110 transition-transform">
              {getIcon(item.icon)}
            </div>

            <div className="my-auto">
              <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-[#f0f0f2]">
              <span className="text-xs font-semibold text-[#0071e3] group-hover:underline">
                {item.action} &gt;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
