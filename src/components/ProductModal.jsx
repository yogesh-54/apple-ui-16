import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToBag }) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState('256GB');
  const [selectedAppleCare, setSelectedAppleCare] = useState(false);

  const storages = [
    { size: '128GB', addedPrice: 0 },
    { size: '256GB', addedPrice: 100 },
    { size: '512GB', addedPrice: 300 },
    { size: '1TB', addedPrice: 500 },
  ];

  // Base price extraction
  const basePriceMatch = product.price.match(/\$(\d+)/);
  const basePrice = basePriceMatch ? parseInt(basePriceMatch[1], 10) : 999;
  const storageAdded = storages.find((s) => s.size === selectedStorage)?.addedPrice || 0;
  const appleCareAdded = selectedAppleCare ? 199 : 0;
  const totalPrice = basePrice + storageAdded + appleCareAdded;

  const handleAdd = () => {
    onAddToBag({
      name: `${product.title} (${product.category})`,
      price: totalPrice,
      image: product.image,
      details: `${selectedColor.name} • ${selectedStorage}${selectedAppleCare ? ' • AppleCare+' : ''}`,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-apple-modal relative border border-[#e5e5ea] animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors z-10"
        >
          <X size={18} />
        </button>

        <div className="p-8">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#b64400]">
            {product.badge}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] mt-1">
            Buy {product.category}
          </h2>
          <p className="text-sm text-[#6e6e73] mt-1">
            From ${totalPrice} or ${(totalPrice / 24).toFixed(2)}/mo. for 24 mo.
          </p>

          <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
            {/* Visual */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-[#fbfbfd] rounded-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-60 object-contain drop-shadow-xl"
              />
            </div>

            {/* Options */}
            <div className="w-full md:w-1/2 space-y-5">
              {/* Finish */}
              <div>
                <label className="text-xs font-semibold text-[#1d1d1f] block mb-2">
                  Finish: <span className="font-normal text-[#6e6e73]">{selectedColor.name}</span>
                </label>
                <div className="flex items-center space-x-2.5">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-7 h-7 rounded-full transition-transform ${
                        selectedColor.name === color.name
                          ? 'ring-2 ring-[#0071e3] ring-offset-2 scale-110'
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Storage */}
              <div>
                <label className="text-xs font-semibold text-[#1d1d1f] block mb-2">
                  Storage
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {storages.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedStorage(s.size)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        selectedStorage === s.size
                          ? 'border-[#0071e3] bg-[#0071e3]/5 text-[#0071e3] font-semibold ring-1 ring-[#0071e3]'
                          : 'border-[#d2d2d7] text-[#1d1d1f] hover:border-[#86868b]'
                      }`}
                    >
                      <div>{s.size}</div>
                      <div className="text-[10px] text-[#6e6e73]">
                        {s.addedPrice === 0 ? 'Included' : `+$${s.addedPrice}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* AppleCare+ */}
              <div
                onClick={() => setSelectedAppleCare(!selectedAppleCare)}
                className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start space-x-2.5 ${
                  selectedAppleCare
                    ? 'border-[#0071e3] bg-[#0071e3]/5 ring-1 ring-[#0071e3]'
                    : 'border-[#d2d2d7] hover:border-[#86868b]'
                }`}
              >
                <ShieldCheck size={18} className="text-[#0071e3] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between font-semibold text-[#1d1d1f]">
                    <span>AppleCare+ Coverage</span>
                    <span>+$199</span>
                  </div>
                  <p className="text-[11px] text-[#6e6e73] mt-0.5">
                    Unlimited repairs for accidental damage and 24/7 priority tech support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Perks list */}
          <div className="mt-8 pt-6 border-t border-[#e5e5ea] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6e6e73]">
            <div className="flex items-center space-x-2">
              <Truck size={16} className="text-[#0071e3]" />
              <span>Free delivery or pickup at an Apple Store</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw size={16} className="text-[#0071e3]" />
              <span>Free 14-day returns</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-4 border-t border-[#e5e5ea] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#6e6e73]">Total</span>
              <p className="text-2xl font-bold text-[#1d1d1f]">${totalPrice}</p>
            </div>
            <button
              onClick={handleAdd}
              className="px-8 py-3 rounded-full text-sm font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-md transition-all active:scale-95"
            >
              Add to Bag
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
