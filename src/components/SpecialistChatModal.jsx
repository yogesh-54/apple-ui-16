import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

export default function SpecialistChatModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [messages, setMessages] = useState([
    {
      sender: 'specialist',
      text: "Hello! I'm Sarah, an Apple Specialist. How can I help you explore iPhone 16, Apple Watch Series 10, or our latest products today?",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'Which iPhone 16 is right for me?',
    'How does trade-in work?',
    'What does the Camera Control button do?',
    'What’s new with Apple Watch Series 10?',
  ];

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: textToSend, time: 'Just now' },
    ];
    setMessages(newMessages);
    setInput('');

    // Simulated specialist response
    setTimeout(() => {
      let reply = "That's a great question! ";
      const lower = textToSend.toLowerCase();

      if (lower.includes('which iphone') || lower.includes('right for me')) {
        reply += "If you love advanced photography and titanium durability, iPhone 16 Pro offers our 48MP Fusion camera, 5x Telephoto, and A18 Pro chip. If you want vibrant colors and great all-around performance with Apple Intelligence, the iPhone 16 starts at just $799!";
      } else if (lower.includes('trade-in') || lower.includes('trade in')) {
        reply += "With Apple Trade In, you can get between $180 and $650 when trading in an iPhone 11 or newer. We apply the credit immediately at checkout or send you a prepaid kit to mail it in.";
      } else if (lower.includes('camera control')) {
        reply += "Camera Control is an all-new touch and force-sensitive sapphire crystal switch that lets you launch the camera, adjust zoom, exposure, and depth of field with simple slide gestures without looking away from your shot!";
      } else if (lower.includes('watch series 10') || lower.includes('watch 10')) {
        reply += "Apple Watch Series 10 is almost 10% thinner than Series 9, has up to 30% more active screen area with wide-angle OLED, and charges from 0 to 80% in about 30 minutes!";
      } else {
        reply += "Our team is here to ensure you get the perfect configuration. Would you like to select carrier financing with 0% APR or check in-store pickup?";
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'specialist', text: reply, time: 'Just now' },
      ]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full h-[580px] shadow-apple-modal flex flex-col justify-between border border-[#e5e5ea] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                alt="Specialist"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h3 className="text-sm font-semibold text-[#1d1d1f]">Sarah</h3>
                <span className="text-[10px] bg-[#0071e3]/10 text-[#0071e3] font-medium px-2 py-0.5 rounded-full">
                  Specialist
                </span>
              </div>
              <p className="text-[11px] text-[#6e6e73]">Apple Store Online</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#0071e3] text-white rounded-br-none'
                    : 'bg-[#f5f5f7] text-[#1d1d1f] rounded-bl-none border border-[#e5e5ea]'
                }`}
              >
                <p>{m.text}</p>
                <span
                  className={`text-[9px] mt-1 block ${
                    m.sender === 'user' ? 'text-white/70' : 'text-[#86868b]'
                  }`}
                >
                  {m.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 border-t border-[#f0f0f2] bg-[#fbfbfd] flex items-center space-x-2 overflow-x-auto no-scrollbar">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="flex-shrink-0 text-[11px] font-medium bg-white hover:bg-[#f0f0f4] text-[#1d1d1f] px-3 py-1.5 rounded-full border border-[#d2d2d7] transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-[#e5e5ea] flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a Specialist..."
            className="flex-1 bg-[#f5f5f7] border border-[#e5e5ea] focus:border-[#0071e3] rounded-full px-4 py-2.5 text-xs text-[#1d1d1f] focus:outline-none"
          />
          <button
            onClick={() => handleSend()}
            className="w-9 h-9 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white flex items-center justify-center transition-colors"
          >
            <Send size={15} />
          </button>
        </div>

      </div>
    </div>
  );
}
