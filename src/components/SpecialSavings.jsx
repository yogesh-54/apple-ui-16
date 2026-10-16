import React from 'react';
import { GraduationCap, Briefcase, ShieldCheck, ChevronRight } from 'lucide-react';

export default function SpecialSavings() {
  const savings = [
    {
      id: 'edu',
      category: 'EDUCATION',
      title: 'Save on Mac or iPad with education pricing.',
      desc: 'Available to current and newly accepted college students and their parents, as well as faculty, staff, and homeschool teachers.',
      icon: <GraduationCap size={28} className="text-[#0071e3]" />,
      action: 'Shop Education Store',
    },
    {
      id: 'biz',
      category: 'BUSINESS',
      title: 'From enterprise to small business, we’ll work with you.',
      desc: 'Whether you’re a company of 10 or 10,000, our team will help you find the right hardware, software, and financing options.',
      icon: <Briefcase size={28} className="text-[#0071e3]" />,
      action: 'Shop Business Store',
    },
    {
      id: 'gov',
      category: 'GOVERNMENT & MILITARY',
      title: 'Special pricing for military personnel, veterans, and government.',
      desc: 'Exclusive discounts on select Apple products and accessories for active military, veterans, and federal, state, and local agencies.',
      icon: <ShieldCheck size={28} className="text-[#0071e3]" />,
      action: 'Shop Government Store',
    },
  ];

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
          <span>Special savings. </span>
          <span className="text-[#6e6e73]">Exclusive offers for students, businesses, and more.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {savings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-apple-lg p-7 flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#6e6e73]">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mt-1 group-hover:text-[#0071e3] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#6e6e73] mt-2.5 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-[#f0f0f2] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0071e3] group-hover:underline">
                {item.action}
              </span>
              <ChevronRight size={14} className="text-[#0071e3]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
