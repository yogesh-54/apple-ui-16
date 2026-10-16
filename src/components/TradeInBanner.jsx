import React, { useState } from 'react';
import { RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TradeInBanner() {
  const [selectedDevice, setSelectedDevice] = useState('iPhone 15 Pro Max');
  const [estimatedValue, setEstimatedValue] = useState(650);

  const deviceValues = {
    'iPhone 15 Pro Max': 650,
    'iPhone 15 Pro': 520,
    'iPhone 15 Plus': 420,
    'iPhone 15': 380,
    'iPhone 14 Pro Max': 500,
    'iPhone 14 Pro': 400,
    'iPhone 13 Pro': 300,
    'iPhone 12': 180,
  };

  const handleDeviceChange = (e) => {
    const val = e.target.value;
    setSelectedDevice(val);
    setEstimatedValue(deviceValues[val] || 180);
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      {/* High impact dark banner matching the dark banner in Figma design */}
      <div className="bg-[#000000] text-white rounded-apple-lg p-8 md:p-14 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Glow effect */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0071e3]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-xl z-10">
          <div className="inline-flex items-center space-x-2 text-[#0071e3] text-xs font-semibold tracking-wider uppercase mb-2">
            <RefreshCw size={15} />
            <span>Apple Trade In</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Trade in your device.<br />
            <span className="text-[#86868b]">Upgrade and save.</span>
          </h2>

          <p className="text-sm md:text-base text-[#a1a1a6] mt-4 leading-relaxed">
            Get $180–$650 in credit when you trade in iPhone 11 or higher towards a new iPhone 16 or iPhone 16 Pro. It’s good for you and good for the planet.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#86868b]">
            <span className="flex items-center">
              <CheckCircle2 size={14} className="text-emerald-400 mr-1.5" /> Instant credit at checkout
            </span>
            <span className="flex items-center">
              <CheckCircle2 size={14} className="text-emerald-400 mr-1.5" /> Free prepaid trade-in kit
            </span>
          </div>
        </div>

        {/* Interactive Estimator Card */}
        <div className="w-full lg:w-[420px] bg-[#161617] border border-white/10 rounded-2xl p-6 sm:p-8 z-10 shadow-xl">
          <h3 className="text-lg font-semibold text-white tracking-tight">
            Calculate your trade-in value
          </h3>
          <p className="text-xs text-[#86868b] mt-1">Select your current model to view estimate:</p>

          <div className="mt-4">
            <label className="text-[11px] uppercase tracking-wider text-[#86868b] font-medium block mb-1.5">
              Current Device
            </label>
            <select
              value={selectedDevice}
              onChange={handleDeviceChange}
              className="w-full bg-[#242426] border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0071e3] transition-colors"
            >
              {Object.keys(deviceValues).map((dev) => (
                <option key={dev} value={dev}>
                  {dev}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-[#242426]/70 border border-white/5 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#86868b]">Estimated Trade-in Value</span>
              <p className="text-2xl font-bold text-white mt-0.5">Up to ${estimatedValue}</p>
            </div>
            <span className="text-[11px] text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              Credit Available
            </span>
          </div>

          <button
            onClick={() => alert(`Your estimated credit of $${estimatedValue} for ${selectedDevice} will be applied at checkout!`)}
            className="w-full mt-6 py-3 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white flex items-center justify-center transition-all shadow-md group"
          >
            <span>Apply Trade-in Credit</span>
            <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
