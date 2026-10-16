import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, Check } from 'lucide-react';

export default function TodayAtAppleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [bookedSession, setBookedSession] = useState(null);

  const sessions = [
    {
      id: 'session-1',
      title: 'Skills: Getting Started with iPhone 16',
      time: 'Today, 4:00 p.m. – 4:45 p.m.',
      location: 'Apple Fifth Avenue',
      desc: 'Learn how to customize your Lock Screen, master Camera Control, and discover Apple Intelligence features.',
      level: 'Beginner',
    },
    {
      id: 'session-2',
      title: 'Photo Walk: Capturing Macro & Low Light on iPhone 16 Pro',
      time: 'Tomorrow, 2:00 p.m. – 3:30 p.m.',
      location: 'Apple SoHo',
      desc: 'Explore framing, 48MP ProRAW photography, and 5x optical zoom outdoors.',
      level: 'Intermediate',
    },
    {
      id: 'session-3',
      title: 'Art Lab: Drawing with Apple Pencil Pro & iPad mini',
      time: 'Thursday, 5:00 p.m. – 6:00 p.m.',
      location: 'Apple Grand Central',
      desc: 'Experience barrel roll and haptic feedback to sketch dynamic digital artwork in Procreate.',
      level: 'All levels',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-apple-modal overflow-hidden border border-[#e5e5ea] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#e5e5ea] flex items-center justify-between bg-gradient-to-r from-[#f5f5f7] to-[#e8e8ed]">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Today at Apple</span>
            </div>
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mt-1">
              Free Personal Sessions
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <p className="text-xs text-[#6e6e73]">
            Join fun, hands-on sessions led by Apple Creatives to discover how to get the most from your new devices.
          </p>

          {sessions.map((s) => {
            const isBooked = bookedSession === s.id;
            return (
              <div
                key={s.id}
                className="p-5 rounded-2xl border border-[#e5e5ea] hover:border-[#0071e3] transition-all bg-[#fbfbfd] hover:bg-white space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-[#86868b] tracking-wider uppercase">
                      {s.level} • {s.location}
                    </span>
                    <h3 className="text-base font-semibold text-[#1d1d1f] mt-0.5">{s.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-[#6e6e73] leading-relaxed">{s.desc}</p>

                <div className="flex items-center justify-between pt-2 border-t border-[#f0f0f2]">
                  <span className="text-xs text-[#1d1d1f] flex items-center font-medium">
                    <Clock size={13} className="mr-1.5 text-[#0071e3]" />
                    {s.time}
                  </span>

                  <button
                    onClick={() => setBookedSession(s.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isBooked
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#0071e3] hover:bg-[#0077ed] text-white'
                    }`}
                  >
                    {isBooked ? (
                      <span className="flex items-center">
                        <Check size={12} className="mr-1" /> Reserved
                      </span>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
