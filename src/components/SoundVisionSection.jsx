import React from 'react';
import { soundVisionItems } from '../data/storeData';
import { Volume2 } from 'lucide-react';

export default function SoundVisionSection({ onAddToBag }) {
  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
          <span>Loud and clear. </span>
          <span className="text-[#6e6e73]">Unmatched sound and vision.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {soundVisionItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-apple-lg p-7 flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300 group"
          >
            <div>
              <span className="text-[10px] font-semibold text-[#b64400] tracking-wider uppercase">
                {item.badge}
              </span>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mt-1">
                {item.name}
              </h3>
              <p className="text-sm text-[#6e6e73] mt-1">{item.subtitle}</p>
              <p className="text-xs font-semibold text-[#1d1d1f] mt-1.5">{item.price}</p>
            </div>

            <div className="my-8 h-52 flex items-center justify-center overflow-hidden rounded-2xl bg-[#fbfbfd]">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-48 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-4 border-t border-[#f0f0f2] flex items-center justify-between">
              {/* Color swatches */}
              <div className="flex items-center space-x-1.5">
                {item.colors.map((hex, idx) => (
                  <span
                    key={idx}
                    className="w-3.5 h-3.5 rounded-full border border-black/10"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  onAddToBag({
                    name: item.name,
                    price: parseFloat(item.price.replace('$', '')),
                    image: item.image,
                    details: 'High-fidelity Audio',
                  })
                }
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all shadow-sm"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
