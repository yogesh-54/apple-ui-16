import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { latestProducts } from '../data/storeData';

export default function TheLatestCarousel({ onSelectProduct }) {
  const carouselRef = useRef(null);
  const [selectedColors, setSelectedColors] = useState({});

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleColorSelect = (productId, colorHex) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorHex }));
  };

  // High quality curated product imagery matching iPhone 16 event
  const productVisuals = {
    'iphone-16-pro': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409?wid=800&hei=800&fmt=jpeg&qlt=90',
    'apple-watch-10': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=800&hei=800&fmt=jpeg&qlt=90',
    'iphone-16': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-model-unselect-gallery-2-202409?wid=800&hei=800&fmt=jpeg&qlt=90',
    'apple-watch-ultra-2': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ultra-case-unselect-gallery-1-202409_GEO_US?wid=800&hei=800&fmt=jpeg&qlt=90',
    'airpods-4': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=800&hei=800&fmt=jpeg&qlt=90',
    'ipad-mini': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202410?wid=800&hei=800&fmt=jpeg&qlt=90',
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            <span>The latest. </span>
            <span className="text-[#6e6e73]">Take a look at what’s new, right now.</span>
          </h2>
        </div>

        {/* Carousel Arrow Controls */}
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

      {/* Horizontal Carousel */}
      <div
        ref={carouselRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
      >
        {latestProducts.map((product) => {
          const isDark = product.bgTheme === 'dark';

          return (
            <div
              key={product.id}
              className={`snap-start flex-shrink-0 w-[320px] sm:w-[380px] md:w-[410px] h-[520px] rounded-apple-lg p-7 flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300 relative group overflow-hidden ${product.bgColor}`}
            >
              {/* Header inside card */}
              <div className="z-10">
                <span className={`text-[11px] font-semibold tracking-wider uppercase ${isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'}`}>
                  {product.category}
                </span>
                <h3 className={`text-2xl font-semibold mt-1 tracking-tight leading-snug ${product.textColor}`}>
                  {product.title}
                </h3>
                <p className={`text-sm mt-1.5 ${product.subtextColor}`}>
                  {product.price}
                </p>
              </div>

              {/* Product Visual */}
              <div className="my-auto flex items-center justify-center py-4 relative z-0">
                <img
                  src={productVisuals[product.id] || product.image}
                  alt={product.title}
                  className="max-h-[260px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to secondary image
                    e.currentTarget.src = product.image;
                  }}
                />
              </div>

              {/* Card Footer with Swatches & Action */}
              <div className="z-10 pt-2 flex items-center justify-between border-t border-black/5 dark:border-white/10">
                {/* Color swatches */}
                <div className="flex items-center space-x-1.5">
                  {product.colors.map((color, idx) => {
                    const isSelected = (selectedColors[product.id] || product.colors[0].hex) === color.hex;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleColorSelect(product.id, color.hex)}
                        title={color.name}
                        className={`w-4 h-4 rounded-full transition-transform ${
                          isSelected ? 'ring-2 ring-[#0071e3] ring-offset-2 scale-110' : 'hover:scale-110'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    );
                  })}
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm transition-all transform active:scale-95"
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
