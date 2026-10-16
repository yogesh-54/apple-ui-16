import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function StoreHero({ onOpenSpecialistChat, onOpenStoreLocator }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        
        {/* Main Store Headline */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            <span>Store. </span>
            <span className="text-[#6e6e73]">The best way to buy the products you love.</span>
          </h1>
        </div>

        {/* Right side specialist & store location cards */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 text-sm text-[#1d1d1f]">
          {/* Ask a Specialist */}
          <div className="flex items-center space-x-3.5 group cursor-pointer" onClick={onOpenSpecialistChat}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
              alt="Apple Specialist"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <div>
              <p className="font-semibold text-xs text-[#1d1d1f]">Need shopping help?</p>
              <button className="text-[#0071e3] group-hover:underline text-xs flex items-center font-medium mt-0.5">
                Ask a Specialist <ChevronRight size={13} className="ml-0.5" />
              </button>
            </div>
          </div>

          {/* Visit an Apple Store */}
          <div className="flex items-center space-x-3.5 group cursor-pointer" onClick={onOpenStoreLocator}>
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1d1d1f] ring-1 ring-[#e5e5ea]">
              <MapPin size={18} className="text-[#0071e3]" />
            </div>
            <div>
              <p className="font-semibold text-xs text-[#1d1d1f]">Visit an Apple Store</p>
              <button className="text-[#0071e3] group-hover:underline text-xs flex items-center font-medium mt-0.5">
                Find one near you <ChevronRight size={13} className="ml-0.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
