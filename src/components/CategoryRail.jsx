import React from 'react';
import { categories } from '../data/storeData';

export default function CategoryRail({ activeCategory, onSelectCategory }) {
  // Map icons or illustrations
  const categoryImages = {
    mac: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha',
    iphone: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409?wid=200&hei=130&fmt=png-alpha',
    ipad: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=200&hei=130&fmt=png-alpha',
    watch: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=200&hei=130&fmt=png-alpha',
    vision: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=200&hei=130&fmt=png-alpha',
    airpods: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=200&hei=130&fmt=png-alpha',
    airtag: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202104?wid=200&hei=130&fmt=png-alpha',
    appletv: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha',
    homepod: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha',
    accessories: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=200&hei=130&fmt=png-alpha',
    giftcard: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-giftcards-nav-202109?wid=200&hei=130&fmt=png-alpha',
  };

  return (
    <nav aria-label="Product Categories" className="max-w-[1200px] mx-auto px-6 py-4">
      <div className="flex items-center space-x-6 md:space-x-9 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none transition-all duration-200"
            >
              <div
                className={`w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white shadow-md scale-105 ring-2 ring-[#0071e3]'
                    : 'group-hover:scale-105 group-hover:bg-white/60'
                }`}
              >
                <img
                  src={categoryImages[cat.id]}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300"
                  onError={(e) => {
                    // Fallback emoji if remote image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<span class="text-3xl">${cat.icon}</span>`;
                  }}
                />
              </div>
              <span
                className={`mt-2 text-xs font-semibold tracking-tight transition-colors ${
                  isActive ? 'text-[#0071e3]' : 'text-[#1d1d1f] group-hover:text-[#0071e3]'
                }`}
              >
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
