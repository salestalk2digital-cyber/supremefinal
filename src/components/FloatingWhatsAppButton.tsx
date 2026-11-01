import React, { useState } from 'react';
import { MessageSquare, Phone, X, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '9667173693';
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    'Hi Supreme Ads, I am reaching out through your website (supremeadvertisment.in). I would like to consult on Meta ads, website development, and business growth.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Quick Context Popup Card */}
      {isOpen && (
        <div className="w-80 bg-white border border-[#E9E3D8] rounded-[8px] p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200 paper-grain text-[#191919]">
          <div className="flex items-start justify-between pb-3 border-b border-[#E9E3D8]">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  <MessageSquare size={18} />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-white rounded-full animate-ping" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border-2 border-white rounded-full" />
              </div>
              <div>
                <div className="text-xs font-display font-extrabold uppercase text-[#191919] tracking-tight">
                  Supreme Ads · Priority Desk
                </div>
                <div className="text-[11px] font-sans-ui text-[#25D366] font-semibold flex items-center gap-1">
                  <span>● Online</span>
                  <span className="text-[#191919]/50">· Response &lt; 15 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#191919]/50 hover:text-[#191919] p-1 rounded hover:bg-[#E9E3D8]/50 transition-colors"
              aria-label="Close WhatsApp card"
            >
              <X size={16} />
            </button>
          </div>

          <div className="py-3 text-xs font-sans-ui text-[#191919]/80 leading-relaxed">
            Need an immediate review of your ad spend, website conversion rate, or sales funnel? Message a senior partner directly.
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-[4px] text-xs font-display font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare size={15} />
              <span>Chat on WhatsApp ({phoneNumber})</span>
            </a>

            <a
              href={`tel:+91${phoneNumber}`}
              className="w-full py-2 px-4 bg-[#FFF9F0] hover:bg-[#F7F3EA] border border-[#E9E3D8] text-[#191919] rounded-[4px] text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={14} className="text-[#3155FF]" />
              <span>Call Direct: +91 {phoneNumber}</span>
            </a>
          </div>

          <div className="pt-3 border-t border-[#E9E3D8] mt-3 text-[10px] font-mono text-[#191919]/50 flex justify-between items-center">
            <span>supremeadvertisment.in</span>
            <span className="text-[#25D366] font-semibold">Delhi NCR Hub</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-[#191919] text-white px-3.5 py-2 rounded-full border border-white/10 shadow-lg cursor-pointer hover:bg-[#252525] transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-display font-bold uppercase tracking-wider">
              WhatsApp: +91 {phoneNumber}
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] hover:from-[#1AA852] hover:to-[#22C35E] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-106 active:scale-95 group focus:outline-none"
          aria-label="Open WhatsApp conversation"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          
          <MessageSquare size={26} className="relative z-10 group-hover:rotate-[-6deg] transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};
