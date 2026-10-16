import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Calendar, Wrench } from 'lucide-react';
import { helpCards } from '../data/storeData';

export default function HelpCarousel({ onOpenSpecialistChat, onOpenSessionModal, onOpenGeniusModal }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleAction = (type) => {
    if (type === 'chat') onOpenSpecialistChat();
    else if (type === 'session') onOpenSessionModal();
    else if (type === 'genius') onOpenGeniusModal();
  };

  const icons = {
    chat: <MessageSquare size={20} className="text-[#0071e3]" />,
    session: <Calendar size={20} className="text-[#0071e3]" />,
    genius: <Wrench size={20} className="text-[#0071e3]" />,
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            <span>Help is here. </span>
            <span className="text-[#6e6e73]">Whenever and however you need it.</span>
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
        {helpCards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleAction(card.type)}
            className="snap-start flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] h-[480px] bg-white rounded-apple-lg p-7 flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6e6e73]">
                {card.category}
              </span>
              <h3 className="text-2xl font-semibold mt-1 tracking-tight text-[#1d1d1f] leading-snug group-hover:text-[#0071e3] transition-colors">
                {card.title}
              </h3>
            </div>

            <div className="relative my-auto py-2 overflow-hidden rounded-2xl">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#f0f0f2]">
              <span className="text-xs font-semibold text-[#0071e3] group-hover:underline">
                {card.actionText} &gt;
              </span>
              <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                {icons[card.type]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
