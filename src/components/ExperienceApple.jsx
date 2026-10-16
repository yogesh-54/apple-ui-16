import React from 'react';
import { appleServices } from '../data/storeData';
import { Tv, Music, Activity, Gamepad2, Newspaper, Layers, ChevronRight } from 'lucide-react';

export default function ExperienceApple() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Tv': return <Tv size={24} className="text-white" />;
      case 'Music': return <Music size={24} className="text-white" />;
      case 'Activity': return <Activity size={24} className="text-white" />;
      case 'Gamepad2': return <Gamepad2 size={24} className="text-white" />;
      case 'Newspaper': return <Newspaper size={24} className="text-white" />;
      case 'Layers': return <Layers size={24} className="text-white" />;
      default: return null;
    }
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-6">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
          <span>Experience the best of Apple. </span>
          <span className="text-[#6e6e73]">For work, school, and play.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {appleServices.map((service) => (
          <div
            key={service.id}
            className={`rounded-apple-lg p-7 text-white flex flex-col justify-between shadow-apple-card hover:shadow-apple-card-hover transition-all duration-300 bg-gradient-to-br ${service.gradient} group cursor-pointer min-h-[220px]`}
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                {getServiceIcon(service.icon)}
              </div>
              <ChevronRight size={18} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
              <p className="text-xs text-white/80 mt-1 font-normal line-clamp-2">{service.tagline}</p>
              <p className="text-[11px] text-white/90 font-medium mt-3 bg-white/10 px-2.5 py-1 rounded-full inline-block backdrop-blur-sm">
                {service.offer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
