import React, { useState } from 'react';
import { X, MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

export default function StoreLocatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [searchQuery, setSearchQuery] = useState('');

  const stores = [
    {
      name: 'Apple Fifth Avenue',
      address: '767 Fifth Avenue, New York, NY 10153',
      hours: 'Open 24 hours a day',
      phone: '(212) 336-1440',
      status: 'Open 24 hours',
      distance: '0.8 miles',
    },
    {
      name: 'Apple SoHo',
      address: '103 Prince Street, New York, NY 10012',
      hours: '10:00 a.m. – 8:00 p.m.',
      phone: '(212) 226-3126',
      status: 'Open today until 8:00 p.m.',
      distance: '2.1 miles',
    },
    {
      name: 'Apple Grand Central',
      address: '45 Grand Central Terminal, New York, NY 10017',
      hours: '8:00 a.m. – 8:00 p.m.',
      phone: '(212) 284-1800',
      status: 'Open today until 8:00 p.m.',
      distance: '1.2 miles',
    },
    {
      name: 'Apple Union Square',
      address: '300 Post Street, San Francisco, CA 94108',
      hours: '10:00 a.m. – 7:00 p.m.',
      phone: '(415) 486-4800',
      status: 'Open today until 7:00 p.m.',
      distance: 'In city center',
    },
  ];

  const filtered = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-apple-modal overflow-hidden border border-[#e5e5ea] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#e5e5ea] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#0071e3]">
              Apple Retail
            </span>
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mt-0.5">
              Find an Apple Store
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-[#fbfbfd] border-b border-[#e5e5ea]">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-3 text-[#86868b]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, state, or ZIP code"
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#d2d2d7] rounded-full text-xs text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]"
            />
          </div>
        </div>

        {/* Store List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filtered.map((store) => (
            <div
              key={store.name}
              className="p-4 rounded-2xl border border-[#e5e5ea] hover:border-[#0071e3] transition-all bg-white hover:shadow-sm group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-xs text-[#6e6e73] mt-1 flex items-center">
                    <MapPin size={13} className="mr-1 text-[#0071e3]" />
                    {store.address}
                  </p>
                </div>
                <span className="text-[11px] font-medium text-[#0071e3] bg-[#0071e3]/10 px-2 py-0.5 rounded-full">
                  {store.distance}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-[#f0f0f2] flex flex-wrap items-center justify-between text-xs text-[#6e6e73]">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <Clock size={12} className="mr-1 text-emerald-600" />
                    {store.status}
                  </span>
                  <span className="flex items-center">
                    <Phone size={12} className="mr-1" />
                    {store.phone}
                  </span>
                </div>
                <button
                  onClick={() => {
                    alert(`Directions to ${store.name} opened in Apple Maps!`);
                  }}
                  className="text-[#0071e3] font-semibold hover:underline flex items-center mt-2 sm:mt-0"
                >
                  <Navigation size={12} className="mr-1" /> Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
