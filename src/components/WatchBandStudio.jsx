import React, { useState } from 'react';
import { Sparkles, Plus, Check } from 'lucide-react';
import { watchStudioBands } from '../data/storeData';

export default function WatchBandStudio({ onAddToBag }) {
  const [selectedBand, setSelectedBand] = useState(watchStudioBands[0]);
  const [selectedCase, setSelectedCase] = useState('Jet Black Aluminum');
  const [added, setAdded] = useState(false);

  const cases = [
    { name: 'Jet Black Aluminum', finish: '#1a1a1a' },
    { name: 'Natural Titanium', finish: '#9e9994' },
    { name: 'Silver Aluminum', finish: '#e3e4e6' },
  ];

  const handleAdd = () => {
    onAddToBag({
      name: `Apple Watch Series 10 with ${selectedBand.name}`,
      price: 399 + selectedBand.price,
      image: selectedBand.image,
      details: `${selectedCase} • ${selectedBand.colorName}`,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      {/* Container with soft lavender/cool gray background matching Figma */}
      <div className="bg-[#f0eff4] rounded-apple-lg p-8 sm:p-12 overflow-hidden shadow-apple-card relative">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider uppercase text-[#6e6e73] mb-2">
            <Sparkles size={14} className="text-[#0071e3]" />
            <span>Apple Watch Studio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
            Make them yours.
          </h2>
          <p className="text-sm md:text-base text-[#6e6e73] mt-2">
            Mix and match cases and bands in any combination to create your signature style.
          </p>
        </div>

        {/* Studio Interactive Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Watch & Band Live Preview Stage */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/60 shadow-sm min-h-[380px]">
            {/* Visual preview with layered case and band */}
            <div className="relative w-48 h-64 flex items-center justify-center">
              {/* Watch band vertical stripes */}
              <div
                className="w-24 h-full rounded-2xl transition-all duration-500 shadow-md flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: selectedBand.hex }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />
                <div className="w-1.5 h-full bg-white/20 rounded-full" />
              </div>

              {/* Watch Case center overlay */}
              <div
                className="absolute w-28 h-36 rounded-[2rem] border-4 border-[#333] shadow-2xl flex flex-col items-center justify-between p-3 z-10 transition-colors duration-300"
                style={{
                  backgroundColor: cases.find(c => c.name === selectedCase)?.finish || '#1a1a1a',
                }}
              >
                {/* Watch screen */}
                <div className="w-full h-full bg-black rounded-[1.6rem] p-3 flex flex-col justify-between text-white border border-white/10">
                  <div className="flex justify-between items-center text-[9px] text-[#ff6200] font-semibold">
                    <span>OCT 14</span>
                    <span>72°</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-light tracking-tight font-sf">09:41</span>
                  </div>
                  <div className="flex justify-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Selected info */}
            <div className="mt-6 text-center">
              <p className="text-xs font-semibold text-[#6e6e73]">{selectedCase}</p>
              <h4 className="text-lg font-semibold text-[#1d1d1f] mt-0.5">{selectedBand.name}</h4>
              <p className="text-sm font-medium text-[#1d1d1f] mt-1">From ${399 + selectedBand.price}</p>
              
              <button
                onClick={handleAdd}
                className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all shadow-sm flex items-center justify-center mx-auto"
              >
                {added ? (
                  <>
                    <Check size={14} className="mr-1.5" /> Added to Bag
                  </>
                ) : (
                  <>
                    <Plus size={14} className="mr-1.5" /> Add this combination
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Band Selector Grid (Vertical ribbons matching Figma) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#6e6e73] mb-3">
                1. Select Case Finish
              </h3>
              <div className="flex items-center space-x-3">
                {cases.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedCase(c.name)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all flex items-center space-x-2 ${
                      selectedCase === c.name
                        ? 'border-[#0071e3] bg-white shadow-sm ring-1 ring-[#0071e3]'
                        : 'border-transparent bg-white/60 hover:bg-white'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: c.finish }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#6e6e73] mb-3">
                2. Select Band Style & Color
              </h3>
              
              {/* Vertical band swatch list matching Figma's vertical strap showcase */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {watchStudioBands.map((band) => {
                  const isSelected = selectedBand.id === band.id;
                  return (
                    <button
                      key={band.id}
                      onClick={() => setSelectedBand(band)}
                      className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-200 ${
                        isSelected
                          ? 'bg-white shadow-md ring-2 ring-[#0071e3]'
                          : 'bg-white/60 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {/* Vertical band bar representation */}
                      <div className="w-5 h-20 rounded-md relative shadow-inner overflow-hidden mb-2" style={{ backgroundColor: band.hex }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#1d1d1f] line-clamp-1">{band.name}</span>
                      <span className="text-[10px] text-[#6e6e73] mt-0.5">+${band.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
