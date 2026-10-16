import React from 'react';
import { Cpu, Camera, Battery, Sparkles, Sliders } from 'lucide-react';

export default function DeviceComparison({ onSelectProduct }) {
  const devices = [
    {
      id: 'iphone-16-pro',
      name: 'iPhone 16 Pro',
      tagline: 'The ultimate iPhone.',
      price: 'From $999',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409?wid=800&hei=800&fmt=jpeg&qlt=90',
      colors: ['#c5b49e', '#98928a', '#ebe7de', '#3b3a39'],
      display: '6.3″ or 6.9″ Super Retina XDR display with ProMotion up to 120Hz',
      intelligence: 'Built for Apple Intelligence',
      chip: 'A18 Pro chip with 6-core GPU',
      camera: 'Pro camera system (48MP Fusion, 48MP Ultra Wide, 5x Telephoto)',
      control: 'Camera Control button',
      battery: 'Up to 33 hours video playback',
    },
    {
      id: 'iphone-16',
      name: 'iPhone 16',
      tagline: 'A total powerhouse.',
      price: 'From $799',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-model-unselect-gallery-2-202409?wid=800&hei=800&fmt=jpeg&qlt=90',
      colors: ['#5e85c9', '#94b8b6', '#e9b4be', '#f2f2f2', '#343538'],
      display: '6.1″ or 6.7″ Super Retina XDR display',
      intelligence: 'Built for Apple Intelligence',
      chip: 'A18 chip with 5-core GPU',
      camera: 'Advanced dual-camera (48MP Fusion, 12MP Ultra Wide with Macro)',
      control: 'Camera Control button',
      battery: 'Up to 27 hours video playback',
    },
    {
      id: 'iphone-15',
      name: 'iPhone 15',
      tagline: 'As amazing as ever.',
      price: 'From $699',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=800&hei=800&fmt=jpeg&qlt=90',
      colors: ['#e3c8d4', '#e2e4cd', '#d2dee6', '#e0dedb', '#3b3b3d'],
      display: '6.1″ or 6.7″ Super Retina XDR display',
      intelligence: '—',
      chip: 'A16 Bionic chip with 5-core GPU',
      camera: 'Advanced dual-camera (48MP Main, 12MP Ultra Wide)',
      control: 'Ring/Silent switch',
      battery: 'Up to 26 hours video playback',
    },
  ];

  return (
    <section className="py-14 max-w-[1400px] mx-auto px-6">
      {/* Title */}
      <div className="mb-10 text-center max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
          Which iPhone is right for you?
        </h2>
        <p className="text-sm text-[#6e6e73] mt-2">
          Compare models side by side to find the ideal match for your needs.
        </p>
      </div>

      {/* Grid Comparison Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {devices.map((dev) => (
          <div
            key={dev.id}
            className="bg-white rounded-apple-lg p-7 flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300"
          >
            {/* Top Device Visual */}
            <div className="text-center">
              <div className="h-56 flex items-center justify-center p-2">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="max-h-52 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Color dots */}
              <div className="flex justify-center space-x-1.5 my-3">
                {dev.colors.map((c, i) => (
                  <span
                    key={i}
                    className="w-3.5 h-3.5 rounded-full border border-black/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{dev.name}</h3>
              <p className="text-xs text-[#6e6e73] mt-0.5">{dev.tagline}</p>
              <p className="text-sm font-semibold text-[#1d1d1f] mt-1.5">{dev.price}</p>

              <button
                onClick={() =>
                  onSelectProduct({
                    id: dev.id,
                    badge: 'NEW',
                    category: dev.name.toUpperCase(),
                    title: dev.tagline,
                    price: dev.price,
                    image: dev.image,
                    colors: dev.colors.map((c, i) => ({ name: `Color ${i + 1}`, hex: c })),
                  })
                }
                className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm transition-all"
              >
                Buy
              </button>
            </div>

            {/* Specs Specs rows */}
            <div className="mt-8 pt-6 border-t border-[#f0f0f2] space-y-6 text-xs text-center">
              {/* Intelligence */}
              <div>
                <Sparkles size={20} className="mx-auto text-[#0071e3] mb-1" />
                <p className="font-semibold text-[#1d1d1f]">{dev.intelligence}</p>
              </div>

              {/* Chip */}
              <div>
                <Cpu size={20} className="mx-auto text-[#86868b] mb-1" />
                <p className="font-semibold text-[#1d1d1f]">{dev.chip}</p>
              </div>

              {/* Camera */}
              <div>
                <Camera size={20} className="mx-auto text-[#86868b] mb-1" />
                <p className="text-[#6e6e73] leading-relaxed">{dev.camera}</p>
              </div>

              {/* Control */}
              <div>
                <Sliders size={20} className="mx-auto text-[#86868b] mb-1" />
                <p className="font-medium text-[#1d1d1f]">{dev.control}</p>
              </div>

              {/* Battery */}
              <div>
                <Battery size={20} className="mx-auto text-[#86868b] mb-1" />
                <p className="text-[#6e6e73]">{dev.battery}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
