import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ bagCount, onOpenBag, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const navItems = [
    {
      name: 'Store',
      href: '#store',
      subLinks: {
        explore: [
          { name: 'Shop the Latest', href: '#latest-section' },
          { name: 'Mac', href: '#latest-section' },
          { name: 'iPad', href: '#latest-section' },
          { name: 'iPhone', href: '#latest-section' },
          { name: 'Apple Watch', href: '#latest-section' },
          { name: 'Accessories', href: '#accessories-section' },
        ],
        quickLinks: [
          { name: 'Find a Store', href: '#' },
          { name: 'Order Status', href: '#' },
          { name: 'Apple Trade In', href: '#trade-in-section' },
          { name: 'Financing', href: '#' },
        ],
      },
    },
    {
      name: 'Mac',
      href: '#latest-section',
      subLinks: {
        explore: [
          { name: 'Explore All Mac', href: '#' },
          { name: 'MacBook Air', href: '#' },
          { name: 'MacBook Pro', href: '#' },
          { name: 'iMac', href: '#' },
          { name: 'Mac mini', href: '#' },
          { name: 'Mac Studio', href: '#' },
        ],
        quickLinks: [
          { name: 'Mac Support', href: '#' },
          { name: 'AppleCare+ for Mac', href: '#' },
          { name: 'macOS Sequoia', href: '#' },
        ],
      },
    },
    {
      name: 'iPad',
      href: '#latest-section',
      subLinks: {
        explore: [
          { name: 'Explore All iPad', href: '#' },
          { name: 'iPad Pro', href: '#' },
          { name: 'iPad Air', href: '#' },
          { name: 'iPad (10th gen)', href: '#' },
          { name: 'iPad mini', href: '#' },
          { name: 'Apple Pencil Pro', href: '#accessories-section' },
        ],
        quickLinks: [
          { name: 'iPad Support', href: '#' },
          { name: 'iPadOS 18', href: '#' },
        ],
      },
    },
    {
      name: 'iPhone',
      href: '#latest-section',
      subLinks: {
        explore: [
          { name: 'Explore All iPhone', href: '#' },
          { name: 'iPhone 16 Pro', href: '#latest-section' },
          { name: 'iPhone 16', href: '#latest-section' },
          { name: 'iPhone 15', href: '#' },
          { name: 'iPhone 14', href: '#' },
          { name: 'iPhone SE', href: '#' },
        ],
        quickLinks: [
          { name: 'Apple Intelligence', href: '#' },
          { name: 'Trade In iPhone', href: '#trade-in-section' },
          { name: 'iOS 18', href: '#' },
        ],
      },
    },
    {
      name: 'Watch',
      href: '#latest-section',
      subLinks: {
        explore: [
          { name: 'Explore All Apple Watch', href: '#' },
          { name: 'Apple Watch Series 10', href: '#latest-section' },
          { name: 'Apple Watch Ultra 2', href: '#latest-section' },
          { name: 'Apple Watch SE', href: '#' },
          { name: 'Apple Watch Studio', href: '#watch-studio' },
        ],
        quickLinks: [
          { name: 'Apple Watch Bands', href: '#watch-studio' },
          { name: 'watchOS 11', href: '#' },
        ],
      },
    },
    { name: 'Vision', href: '#latest-section' },
    { name: 'AirPods', href: '#sound-vision-section' },
    { name: 'TV & Home', href: '#sound-vision-section' },
    { name: 'Entertainment', href: '#entertainment-section' },
    { name: 'Accessories', href: '#accessories-section' },
    { name: 'Support', href: '#help-section' },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-md border-b border-[#e5e5ea]/80 transition-all duration-300"
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="max-w-[1024px] mx-auto px-4 h-11 flex items-center justify-between text-xs tracking-tight text-[#1d1d1f]/80">
        
        {/* Apple Logo */}
        <a href="#store" className="hover:opacity-70 transition-opacity flex items-center py-2">
          <svg className="w-4 h-4 fill-current text-[#1d1d1f]" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.97-14.42-6.19-9.47-11.07-20.73-14.64-33.79-3.57-13.06-5.36-25.26-5.36-36.6 0-14.69 3.69-26.69 11.07-36 7.39-9.31 16.79-14.12 28.21-14.44 5.34 0 11.29 1.49 17.84 4.47 6.55 2.97 10.82 4.54 12.82 4.7 1.83-.16 6.27-1.78 13.33-4.85 7.06-3.08 12.92-4.47 17.58-4.17 13.43.83 23.95 5.76 31.56 14.81-11.83 7.18-17.63 17.2-17.41 30.06.22 10.22 4.13 18.78 11.75 25.68 7.61 6.9 16.66 10.74 27.14 11.53-2.39 7.42-5.43 14.97-9.12 22.68zM119.22 33.34c0-7.39 2.66-14.41 7.99-21.05 5.33-6.64 11.95-10.98 19.86-13.02.22 1.09.33 2.07.33 2.94 0 7.39-2.77 14.52-8.31 21.38-5.54 6.85-12.23 11.08-20.07 12.69-.43-1.09-.64-2.07-.64-2.94z"/>
          </svg>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => setHoveredMenu(item.subLinks ? item : null)}
              className="py-3"
            >
              <a
                href={item.href}
                className="text-[#1d1d1f]/80 hover:text-[#000000] font-normal transition-colors"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-5">
          <button
            onClick={onOpenSearch}
            className="text-[#1d1d1f]/80 hover:text-[#000000] transition-colors"
            title="Search apple.com"
          >
            <Search size={15} strokeWidth={2} />
          </button>

          <button
            onClick={onOpenBag}
            className="text-[#1d1d1f]/80 hover:text-[#000000] transition-colors relative"
            title="Shopping Bag"
          >
            <ShoppingBag size={15} strokeWidth={2} />
            {bagCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#0071e3] text-white font-semibold rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                {bagCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1d1d1f]/80 hover:text-[#000000]"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {hoveredMenu && hoveredMenu.subLinks && (
        <div className="hidden md:block absolute top-11 left-0 right-0 bg-[#f5f5f7]/95 backdrop-blur-2xl border-b border-[#d2d2d7] py-8 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1024px] mx-auto px-8 grid grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-semibold text-[#86868b] tracking-wider uppercase mb-3">
                Explore {hoveredMenu.name}
              </p>
              <ul className="space-y-2">
                {hoveredMenu.subLinks.explore.map((sub) => (
                  <li key={sub.name}>
                    <a
                      href={sub.href}
                      onClick={() => setHoveredMenu(null)}
                      className="text-xl font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors flex items-center group"
                    >
                      <span>{sub.name}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-1.5 text-[#0071e3]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-[#86868b] tracking-wider uppercase mb-3">
                Quick Links
              </p>
              <ul className="space-y-2.5">
                {hoveredMenu.subLinks.quickLinks.map((sub) => (
                  <li key={sub.name}>
                    <a
                      href={sub.href}
                      onClick={() => setHoveredMenu(null)}
                      className="text-xs font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f5f5f7] border-b border-[#d2d2d7] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-semibold text-[#1d1d1f] hover:text-[#0071e3]"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
