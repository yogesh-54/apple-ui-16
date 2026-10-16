import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function QuickLinks() {
  const links = [
    { title: 'Order Status', href: '#' },
    { title: 'Shopping Help', href: '#' },
    { title: 'Returns', href: '#' },
    { title: 'Your Saves', href: '#' },
    { title: 'Apple Store App', href: '#' },
    { title: 'Financing', href: '#' },
    { title: 'Certified Refurbished', href: '#' },
    { title: 'Apple Trade In', href: '#' },
  ];

  return (
    <section className="py-8 max-w-[1400px] mx-auto px-6">
      <div className="border-t border-[#d2d2d7] pt-8">
        <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
          Quick Links
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="px-4 py-2 rounded-full text-xs font-medium text-[#1d1d1f] bg-white border border-[#d2d2d7] hover:border-[#1d1d1f] hover:bg-[#fafafc] transition-all duration-200 inline-flex items-center space-x-1.5 shadow-sm"
            >
              <span>{link.title}</span>
              <ExternalLink size={11} className="text-[#86868b]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
