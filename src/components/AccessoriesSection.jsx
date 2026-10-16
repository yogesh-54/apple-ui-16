import React, { useState } from 'react';
import { accessoriesData } from '../data/storeData';
import { Plus, Check } from 'lucide-react';

export default function AccessoriesSection({ onAddToBag }) {
  const [activeTab, setActiveTab] = useState('All');
  const [addedIds, setAddedIds] = useState({});
  const [selectedAccColors, setSelectedAccColors] = useState({});

  const tabs = ['All', 'iPhone', 'iPad'];

  const filteredAccessories = activeTab === 'All'
    ? accessoriesData
    : accessoriesData.filter((item) => item.category === activeTab || item.category === 'All');

  const handleAdd = (item) => {
    const selectedColor = selectedAccColors[item.id] || item.colors[0].name;
    onAddToBag({
      name: item.name,
      price: item.price,
      image: item.image,
      details: `Color: ${selectedColor}`,
    });

    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const handleColorChange = (itemId, colorName) => {
    setSelectedAccColors((prev) => ({ ...prev, [itemId]: colorName }));
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
            <span>Accessories. </span>
            <span className="text-[#6e6e73]">Essentials that pair perfectly with your favorite devices.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 bg-[#e8e8ed] p-1 rounded-full self-start md:self-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-[#1d1d1f] shadow-sm font-semibold'
                  : 'text-[#6e6e73] hover:text-[#1d1d1f]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccessories.map((item) => {
          const isAdded = addedIds[item.id];
          const currentColor = selectedAccColors[item.id] || item.colors[0].name;

          return (
            <div
              key={item.id}
              className="bg-white rounded-apple-lg p-6 flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#b64400] tracking-wider uppercase">
                    {item.badge}
                  </span>
                  <span className="text-xs font-medium text-[#6e6e73]">${item.price.toFixed(2)}</span>
                </div>

                <div className="my-6 h-48 flex items-center justify-center overflow-hidden rounded-xl bg-[#fbfbfd]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                        e.currentTarget.src = item.fallbackImage;
                      }
                    }}
                  />
                </div>

                <h3 className="text-base font-semibold text-[#1d1d1f] line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-xs text-[#6e6e73] mt-1">{currentColor}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f2] flex items-center justify-between">
                {/* Color swatches */}
                <div className="flex items-center space-x-1.5">
                  {item.colors.map((c, idx) => {
                    const isSelected = currentColor === c.name;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleColorChange(item.id, c.name)}
                        className={`w-3.5 h-3.5 rounded-full border border-black/10 transition-transform ${
                          isSelected ? 'ring-2 ring-[#0071e3] ring-offset-1 scale-110' : 'hover:scale-110'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    );
                  })}
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center transition-all ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={12} className="mr-1" /> Added
                    </>
                  ) : (
                    <>
                      <Plus size={12} className="mr-1" /> Add to Bag
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
