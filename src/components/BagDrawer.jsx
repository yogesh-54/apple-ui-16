import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function BagDrawer({ isOpen, onClose, bagItems, onRemoveItem, onClearBag }) {
  if (!isOpen) return null;

  const subtotal = bagItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-[#e5e5ea] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={20} className="text-[#1d1d1f]" />
              <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
                Review your Bag ({bagItems.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Bag Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {bagItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#f5f5f7] flex items-center justify-center mx-auto mb-4 text-[#86868b]">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f]">Your Bag is empty.</h3>
                <p className="text-xs text-[#6e6e73] mt-1 max-w-xs mx-auto">
                  Free shipping and free returns on all orders.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#0071e3] text-white hover:bg-[#0077ed]"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              bagItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-[#fbfbfd] border border-[#f0f0f2]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded-xl bg-white p-1 border border-black/5"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#1d1d1f] leading-snug">{item.name}</h4>
                    {item.details && (
                      <p className="text-xs text-[#6e6e73] mt-0.5">{item.details}</p>
                    )}
                    <p className="text-xs font-bold text-[#1d1d1f] mt-1.5">
                      ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-[#86868b] hover:text-red-500 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {bagItems.length > 0 && (
            <div className="p-6 border-t border-[#e5e5ea] bg-[#fbfbfd] space-y-4">
              <div className="space-y-1.5 text-xs text-[#6e6e73]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1d1d1f]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#e5e5ea] flex justify-between items-center text-sm font-bold text-[#1d1d1f]">
                <span>Total</span>
                <span className="text-xl">${subtotal.toFixed(2)}</span>
              </div>

              {/* Apple Pay Button */}
              <button
                onClick={() => {
                  alert('Thank you! Your Apple Pay order was placed successfully!');
                  onClearBag();
                  onClose();
                }}
                className="w-full py-3.5 bg-black hover:bg-[#222] text-white rounded-full font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-md transition-all active:scale-95"
              >
                <span>Check Out with</span>
                <span className="font-bold flex items-center">Pay</span>
              </button>

              <button
                onClick={() => {
                  alert('Order completed via standard checkout!');
                  onClearBag();
                  onClose();
                }}
                className="w-full py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full font-semibold text-xs flex items-center justify-center space-x-1 transition-all"
              >
                <span>Check Out</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
