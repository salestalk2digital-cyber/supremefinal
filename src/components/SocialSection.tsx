import React from 'react';
import { Camera, Video, Film, BarChart3, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface SocialSectionProps {
  onStartProject: () => void;
}

export const SocialSection: React.FC<SocialSectionProps> = ({ onStartProject }) => {
  const WORKFLOW = [
    { title: 'STRATEGY', desc: 'Brand POV, monthly content pillars & hooks' },
    { title: 'CONTENT', desc: 'Scriptwriting, reel concepts & storytelling' },
    { title: 'DESIGN', desc: 'Editorial carousels, custom typography' },
    { title: 'REELS', desc: 'Short-form video editing, sound matching' },
    { title: 'POSTING', desc: 'Prime-time scheduling & hashtag clusters' },
    { title: 'COMMUNITY', desc: 'Comment moderation & DM lead routing' },
    { title: 'ANALYTICS', desc: 'Retention rates, saves, reach & profile visits' },
    { title: 'IMPROVEMENT', desc: 'Iterating on top 10% viral formats' }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8FF38]/50 text-[#191919] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Discipline / 04 · Social Media Management
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
              YOUR BRAND IS ACTIVE.
              <br />
              <span className="text-[#191919]">BUT IS IT</span>
              <br />
              <span className="font-editorial italic font-normal text-[#F05A5A]">GROWING?</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              Posting random Canva templates every Tuesday is not a social media strategy. It just tells your customers that nobody is steering the ship.
              <br /><br />
              Supreme Ads runs an end-to-end production studio: video shoots on location in Delhi NCR, high-retention reel edits, and editorial art direction that turns casual scrollers into cult brand advocates.
            </p>

            <div className="mt-6 pt-4 border-t border-[#E9E3D8]">
              <button
                onClick={onStartProject}
                className="px-5 py-2.5 bg-[#191919] text-[#FFF9F0] text-xs font-display font-bold tracking-wider uppercase rounded-[3px] hover:bg-[#3155FF] transition-colors"
              >
                Book Social Media Engine
              </button>
            </div>
          </div>
        </div>

        {/* Agency Package Breakdown Card & Editorial Feed Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Concrete Retainer Deliverables */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 border border-[#E9E3D8] rounded-[3px] flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-display font-bold tracking-widest text-[#191919]/50 uppercase mb-2">
                Monthly Production Retainer
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#191919] uppercase">
                Complete Creative & Video Suite
              </h3>
              <p className="mt-2 text-xs md:text-sm text-[#191919]/70 font-sans-ui">
                Full-service social team: creative director, videographer, copywriter, and account manager.
              </p>

              {/* Exact Specs From Prompt */}
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-[#C8FF38] flex items-center justify-center font-display font-bold text-xs text-[#191919]">
                      18+
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm text-[#191919] uppercase">
                        18–20 POSTS / MONTH
                      </div>
                      <div className="text-xs text-[#191919]/60 font-sans-ui">
                        Curated mix of viral reels, editorial carousels & thought leadership
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-display font-bold text-[#3155FF] uppercase">Included</span>
                </div>

                <div className="p-4 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-[#F3A8C7] flex items-center justify-center font-display font-bold text-xs text-[#191919]">
                      <Video size={16} />
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm text-[#191919] uppercase">
                        2 VIDEO SHOOTS INCLUDED
                      </div>
                      <div className="text-xs text-[#191919]/60 font-sans-ui">
                        On-location in Delhi NCR with cinema cameras, studio lighting & direction
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-display font-bold text-[#3155FF] uppercase">Included</span>
                </div>

                <div className="p-4 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-[#CFC4FF] flex items-center justify-center font-display font-bold text-xs text-[#191919]">
                      <Sparkles size={16} />
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm text-[#191919] uppercase">
                        AI VOICE-OVER WHERE APPROPRIATE
                      </div>
                      <div className="text-xs text-[#191919]/60 font-sans-ui">
                        High-naturalism multilingual voice-over for fast viral explainers
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-display font-bold text-[#3155FF] uppercase">Included</span>
                </div>

                <div className="p-4 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-[#FFC4A8] flex items-center justify-center font-display font-bold text-xs text-[#191919]">
                      +1
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm text-[#191919] uppercase">
                        EXTRA SHOOT — ₹3,500
                      </div>
                      <div className="text-xs text-[#191919]/60 font-sans-ui">
                        Transparent add-on rate for event coverage or seasonal product drops
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-display font-bold text-[#191919] uppercase">On Demand</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E9E3D8] flex items-center justify-between">
              <span className="text-xs text-[#191919]/60 font-sans-ui">Location: Delhi NCR & Pan-India</span>
              <button
                onClick={onStartProject}
                className="text-xs font-display font-bold uppercase tracking-wider text-[#3155FF] hover:underline flex items-center gap-1"
              >
                Inquire for Retainer Slot <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Social Feed Preview */}
          <div className="lg:col-span-6 bg-[#191919] p-6 md:p-8 rounded-[3px] text-white flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="text-xs font-display font-bold tracking-widest text-[#C8FF38] uppercase">
                Editorial Feed Aesthetics
              </div>
              <span className="text-xs font-sans-ui text-white/50">High Aesthetic Standard</span>
            </div>

            {/* Asymmetric mini grid representing high-end Instagram aesthetic */}
            <div className="grid grid-cols-2 gap-3 my-6">
              <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden bg-white/5">
                <img
                  src="/src/assets/images/editorial_creative_direction_1791025926464.jpg"
                  alt="Editorial Lookbook Production"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-display font-semibold uppercase">01. Lookbook Film</span>
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden bg-white/5">
                <img
                  src="/src/assets/images/vybe_setters_event_1791025890283.jpg"
                  alt="Live Concert Reel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-display font-semibold uppercase">02. Viral Concert Reel</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-sans-ui">
              <span>Cinema 4K Quality · Sound Design</span>
              <span className="text-[#C8FF38] font-mono">100% Human Scripted</span>
            </div>
          </div>

        </div>

        {/* The 8-Stage Workflow Bar */}
        <div>
          <div className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/60 mb-6">
            Social Media Growth Lifecycle:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {WORKFLOW.map((item, index) => (
              <div
                key={item.title}
                className="p-3 bg-white border border-[#E9E3D8] rounded-[2px] flex flex-col justify-between"
              >
                <div className="text-[11px] font-display font-bold text-[#191919]/40">
                  0{index + 1}
                </div>
                <div className="text-xs font-display font-bold text-[#191919] uppercase mt-1">
                  {item.title}
                </div>
                <div className="text-[11px] text-[#191919]/60 font-sans-ui mt-1 leading-tight">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
