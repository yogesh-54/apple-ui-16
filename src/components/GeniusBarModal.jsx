import React, { useState } from 'react';
import { X, Wrench, CheckCircle2, Calendar } from 'lucide-react';

export default function GeniusBarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [device, setDevice] = useState('iPhone');
  const [issue, setIssue] = useState('Battery & Power');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const slots = [
    'Today at 3:15 PM',
    'Today at 4:30 PM',
    'Tomorrow at 11:00 AM',
    'Tomorrow at 2:45 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-apple-modal overflow-hidden border border-[#e5e5ea] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-[#e5e5ea] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#0071e3]">
              <Wrench size={16} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
                Genius Bar Reservation
              </h2>
              <p className="text-xs text-[#6e6e73]">Expert hardware & software support</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {confirmed ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f]">Reservation Confirmed!</h3>
              <p className="text-xs text-[#6e6e73] max-w-sm mx-auto">
                We look forward to seeing you at <strong>Apple Fifth Avenue</strong> on <strong>{selectedSlot}</strong> for your {device} ({issue}).
              </p>
              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#0071e3] text-white"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div>
                <label className="text-xs font-semibold text-[#1d1d1f] block mb-1.5">
                  1. Select Device
                </label>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {['iPhone', 'Mac', 'iPad', 'Watch'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setDevice(item)}
                      className={`py-2 rounded-xl border text-center transition-all ${
                        device === item
                          ? 'border-[#0071e3] bg-[#0071e3]/10 text-[#0071e3] font-semibold ring-1 ring-[#0071e3]'
                          : 'border-[#d2d2d7] text-[#1d1d1f] hover:border-[#86868b]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1d1d1f] block mb-1.5">
                  2. What type of issue are you experiencing?
                </label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full bg-[#f5f5f7] border border-[#d2d2d7] rounded-xl px-4 py-2.5 text-xs text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]"
                >
                  <option value="Battery & Power">Battery & Charging Issues</option>
                  <option value="Display or Screen">Cracked Screen / Display Quality</option>
                  <option value="Camera or Audio">Camera, Microphone or Audio Problem</option>
                  <option value="Software Setup">iOS Setup / iCloud / Data Recovery</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1d1d1f] block mb-1.5">
                  3. Available Time Slots (Apple Fifth Avenue)
                </label>
                <div className="space-y-2">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full p-3 rounded-xl border text-left text-xs flex items-center justify-between transition-all ${
                        selectedSlot === slot
                          ? 'border-[#0071e3] bg-[#0071e3]/5 text-[#0071e3] font-semibold ring-1 ring-[#0071e3]'
                          : 'border-[#e5e5ea] text-[#1d1d1f] hover:border-[#86868b]'
                      }`}
                    >
                      <span className="flex items-center">
                        <Calendar size={13} className="mr-2" />
                        {slot}
                      </span>
                      <span>Genius Available</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={!selectedSlot}
                onClick={() => setConfirmed(true)}
                className={`w-full py-3 rounded-full text-xs font-semibold transition-all ${
                  selectedSlot
                    ? 'bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm'
                    : 'bg-[#e5e5ea] text-[#86868b] cursor-not-allowed'
                }`}
              >
                Confirm Reservation
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
