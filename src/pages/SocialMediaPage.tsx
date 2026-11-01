import React from 'react';
import { Video, Film, Camera, ArrowRight, CheckCircle2, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const SocialMediaPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0 paper-grain">
      {/* Editorial Header */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8FF38]/50 text-[#191919] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
            Creative Content & Production Studio
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
            CINEMA PRODUCTION.
            <br />
            VIRAL REELS.
            <br />
            <span className="font-editorial italic font-normal text-[#F47A38]">NO CHEAP TEMPLATES.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl font-sans-ui text-[#191919]/80 max-w-3xl leading-relaxed">
            Posting generic graphics on Canva is not a social strategy. We provide an end-to-end studio retainer: on-location cinema shoots in Delhi NCR, director styling, high-retention reel edits, and editorial art direction that builds cult brand desire.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('contact', 'Social Media Retainer')}
              className="px-6 py-3.5 bg-[#191919] text-white text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#3155FF] transition-colors"
            >
              Book Social Media Retainer
            </button>
            <button
              onClick={() => navigateTo('work')}
              className="px-6 py-3.5 bg-white border border-[#E9E3D8] text-[#191919] text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#F7F3EA] transition-colors"
            >
              View Client Reels & Lookbooks
            </button>
          </div>
        </div>
      </section>

      {/* Retainer Specs Grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/50">
              Clear Transparent Retainer
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#191919] uppercase mt-2">
              WHAT IS INCLUDED IN YOUR MONTHLY RETAINER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[3px] flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-[#C8FF38] flex items-center justify-center font-display font-bold text-xs text-[#191919] mb-4">
                  18+
                </span>
                <h3 className="font-display font-bold text-lg uppercase text-[#191919]">
                  18–20 POSTS / MONTH
                </h3>
                <p className="text-xs text-[#191919]/70 font-sans-ui mt-2 leading-relaxed">
                  Curated mix of viral short-form reels, high-status editorial carousels, founder POV videos, and product showcase clips.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#E9E3D8] text-[11px] font-display font-bold text-[#3155FF] uppercase">
                Included Monthly
              </div>
            </div>

            <div className="p-6 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[3px] flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-[#F3A8C7] flex items-center justify-center font-display font-bold text-xs text-[#191919] mb-4">
                  <Video size={16} />
                </span>
                <h3 className="font-display font-bold text-lg uppercase text-[#191919]">
                  2 VIDEO SHOOTS INCLUDED
                </h3>
                <p className="text-xs text-[#191919]/70 font-sans-ui mt-2 leading-relaxed">
                  On-location video production in Delhi NCR with professional cinema camera setups, studio lighting, audio capture, and creative director guidance.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#E9E3D8] text-[11px] font-display font-bold text-[#3155FF] uppercase">
                Included Monthly
              </div>
            </div>

            <div className="p-6 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[3px] flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-[#CFC4FF] flex items-center justify-center font-display font-bold text-xs text-[#191919] mb-4">
                  <Sparkles size={16} />
                </span>
                <h3 className="font-display font-bold text-lg uppercase text-[#191919]">
                  AI VOICE-OVER
                </h3>
                <p className="text-xs text-[#191919]/70 font-sans-ui mt-2 leading-relaxed">
                  High-naturalism multilingual voice-overs used strategically for fast viral explainers, product features, and cultural hooks.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#E9E3D8] text-[11px] font-display font-bold text-[#3155FF] uppercase">
                Where Appropriate
              </div>
            </div>

            <div className="p-6 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[3px] flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-[#FFC4A8] flex items-center justify-center font-display font-bold text-xs text-[#191919] mb-4">
                  +1
                </span>
                <h3 className="font-display font-bold text-lg uppercase text-[#191919]">
                  EXTRA SHOOT — ₹3,500
                </h3>
                <p className="text-xs text-[#191919]/70 font-sans-ui mt-2 leading-relaxed">
                  Completely transparent, fixed-price add-on rate for event coverage, seasonal product drops, or extra behind-the-scenes shoots.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#E9E3D8] text-[11px] font-display font-bold text-[#191919] uppercase">
                On Demand
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#191919] text-[#FFF9F0]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#C8FF38]">
              Ready for Elite Video & Content?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mt-1">
              Book Your Monthly Production Slot.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I%20want%20to%20consult%20on%20the%20Social%20Media%20retatiner."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-display font-extrabold uppercase tracking-widest rounded-[3px] transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageSquare size={16} />
              <span>WhatsApp: 9667173693</span>
            </a>

            <button
              onClick={() => navigateTo('contact', 'Social Media Studio Retainer')}
              className="px-8 py-4 bg-[#C8FF38] text-[#191919] text-xs font-display font-extrabold tracking-widest uppercase rounded-[3px] hover:bg-white transition-colors"
            >
              Inquire For Retainer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
