import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Compass, Layers, PhoneCall, Zap } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const InteractiveNeedHero: React.FC = () => {
  const { navigateTo } = useNavigation();

  const NEEDS = [
    {
      id: 'leads',
      query: "I need high-intent leads who actually have money to spend.",
      category: "Meta Ads & Performance Marketing",
      tagline: "Stop paying for tire-kickers who say 'your price is too high.'",
      solution: "We architect multi-angle Meta ad campaigns that pre-qualify budget before submission, passing only high-intent buyers into your pipeline.",
      verifiedProof: "The Vybe Setters: ₹48K/mo spend → 10+ bookings at ₹40K+ minimum ticket.",
      accent: "#3155FF",
      targetPage: 'services' as const,
      context: 'Meta Ads Management'
    },
    {
      id: 'd2c',
      query: "I have a product, I need people to know, desire, and buy it.",
      category: "D2C Brand & E-Commerce Acceleration",
      tagline: "From local batches to national pan-India repeat orders.",
      solution: "We combine high-fashion product photography, sensory unboxing storytelling, and rapid Shopify/UPI checkout to turn first-time scrollers into loyal customers.",
      verifiedProof: "Sugar Mellow: Gourmet artisanal confectionery scaling seasonal corporate gifting.",
      accent: "#F47A38",
      targetPage: 'services' as const,
      context: 'D2C Brand Marketing'
    },
    {
      id: 'website',
      query: "My website looks basic; I need a modern platform that converts.",
      category: "Bespoke Web & Custom Software Systems",
      tagline: "We design in Figma and code in React. No bloated drag-and-drop templates.",
      solution: "Sub-second loading times, bespoke typography, automated WhatsApp routing, and custom software workflows engineered for your exact business process.",
      verifiedProof: "Production-grade React & Next.js architectures with built-in conversion tracking.",
      accent: "#7856FF",
      targetPage: 'services' as const,
      context: 'Website & Software Dev'
    },
    {
      id: 'social',
      query: "My brand is active on social media, but nobody is buying.",
      category: "Social Media Studio & Video Production",
      tagline: "18–20 curated posts per month with 2 on-location cinema shoots.",
      solution: "We ditch boring Canva templates for cinematic 4K reels, authentic founder POV videos, and editorial lookbooks produced in Delhi NCR.",
      verifiedProof: "Complete creative retainer: director, videographer, copywriter & daily moderation.",
      accent: "#25B889",
      targetPage: 'services' as const,
      context: 'Social Media Management'
    },
    {
      id: 'crm',
      query: "Leads come in, but follow-ups get lost in WhatsApp chats.",
      category: "Supreme Ads Sales Operating System",
      tagline: "Contacting leads within 15 minutes multiplies close rates by 391%.",
      solution: "A custom sales lead board that captures leads from Meta instantly, tags them as Hot/Warm/Cold, and provides 1-click WhatsApp & call dispatch.",
      verifiedProof: "Live system reference: lead-funnel-sa.vercel.app with daily follow-up queues.",
      accent: "#25B889",
      targetPage: 'crm' as const,
      context: 'Sales CRM'
    },
    {
      id: 'diagnostic',
      query: "Growth has stalled and I don't know where the leak is.",
      category: "Business Growth Diagnostic Audit",
      tagline: "Is it your hook, your offer, your lead qualification, or your follow-up?",
      solution: "We run a structured 7-stage customer lifecycle audit to pinpoint the exact broken link between initial ad reach and closed bank revenue.",
      verifiedProof: "Diagnose 6 common operational bottlenecks and receive a tailored corrective action plan.",
      accent: "#F05A5A",
      targetPage: 'diagnostic' as const,
      context: 'Growth Diagnostic'
    }
  ];

  const [activeNeedIndex, setActiveNeedIndex] = useState<number>(0);
  const activeNeed = NEEDS[activeNeedIndex];

  return (
    <section className="relative px-6 md:px-12 pt-10 pb-20 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Editorial Top Kicker */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-10 border-b border-[#E9E3D8] text-xs font-sans-ui text-[#191919]/70">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold tracking-widest text-[#191919] uppercase">
              SUPREME ADS / 2026
            </span>
            <span className="text-[#191919]/30">·</span>
            <span>Delhi, India</span>
            <span className="text-[#191919]/30">·</span>
            <span className="font-editorial italic text-base text-[#3155FF]">
              Turn Clicks Into Customers
            </span>
          </div>
          <div className="text-xs font-display font-semibold text-[#191919]/60 uppercase tracking-wider">
            Creative Performance & Engineering Studio
          </div>
        </div>

        {/* The Creative Question Headline */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3155FF]/10 text-[#3155FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-3">
            <Compass size={13} /> Tell Us Your Objective
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
            WHAT DOES YOUR BUSINESS
            <br />
            NEED <span className="font-editorial italic font-normal text-[#F47A38]">RIGHT NOW?</span>
          </h1>

          <p className="mt-4 text-sm md:text-base font-sans-ui text-[#191919]/75 max-w-2xl leading-relaxed">
            Select the exact growth challenge you are facing today. We’ll show you the precise commercial mechanism Supreme Ads builds to resolve it.
          </p>
        </div>

        {/* Unique Interactive Question & Answer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 Columns: The Interactive Desire Selector */}
          <div className="lg:col-span-6 flex flex-col space-y-2.5">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/50 mb-1">
              Choose What Best Describes Your Situation:
            </div>

            {NEEDS.map((need, idx) => {
              const isSelected = activeNeedIndex === idx;
              return (
                <button
                  key={need.id}
                  onClick={() => setActiveNeedIndex(idx)}
                  className={`w-full text-left p-4 rounded-[3px] border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#191919] text-[#FFF9F0] border-[#191919] shadow-md translate-x-1.5'
                      : 'bg-white hover:bg-[#F7F3EA] border-[#E9E3D8] text-[#191919]'
                  }`}
                >
                  <span className={`text-xs font-display font-bold pt-0.5 ${isSelected ? 'text-[#FFC4A8]' : 'text-[#3155FF]'}`}>
                    0{idx + 1}.
                  </span>

                  <div className="flex-1">
                    <div className="font-display font-bold text-sm md:text-base leading-snug">
                      "{need.query}"
                    </div>
                    <div className={`text-[11px] font-sans-ui uppercase tracking-wider mt-1 ${isSelected ? 'text-white/60' : 'text-[#191919]/50'}`}>
                      {need.category}
                    </div>
                  </div>

                  <ArrowRight size={16} className={`shrink-0 mt-1 transition-transform ${isSelected ? 'text-[#FFC4A8] translate-x-1' : 'text-stone-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Right 6 Columns: The Bespoke Solution Blueprint Box (Editorial, Non-sterile) */}
          <div className="lg:col-span-6 bg-white border border-[#E9E3D8] rounded-[4px] p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[480px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E9E3D8]">
                <span className="text-xs font-display font-bold uppercase tracking-widest text-[#3155FF]">
                  Bespoke Supreme Ads Protocol
                </span>
                <span className="text-xs font-sans-ui text-[#191919]/50">
                  Option 0{activeNeedIndex + 1} of 06
                </span>
              </div>

              <div className="mt-6">
                <span className="text-xs font-display font-bold uppercase text-[#191919]/50 tracking-wider">
                  Target Discipline:
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-[#191919] uppercase mt-1">
                  {activeNeed.category}
                </h2>

                <p className="text-base font-editorial italic text-[#3155FF] mt-2 text-lg">
                  "{activeNeed.tagline}"
                </p>

                <div className="mt-6 p-4 bg-[#FFF9F0] border-l-3 border-[#3155FF] rounded-r-[2px]">
                  <div className="text-xs font-display font-bold uppercase text-[#3155FF] tracking-wider mb-1">
                    How Supreme Ads Solves This:
                  </div>
                  <p className="text-xs md:text-sm font-sans-ui text-[#191919]/85 leading-relaxed">
                    {activeNeed.solution}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-display font-bold uppercase text-[#191919]/50 tracking-wider mb-1.5">
                    Verified Execution Proof:
                  </div>
                  <div className="p-3 bg-white border border-[#E9E3D8] rounded-[2px] text-xs font-sans-ui text-[#191919] flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#25B889] shrink-0" />
                    <span>{activeNeed.verifiedProof}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#E9E3D8] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => navigateTo(activeNeed.targetPage, activeNeed.context)}
                className="w-full sm:w-auto px-6 py-3 bg-[#191919] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] hover:bg-[#3155FF] transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore This Dedicated Page</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => navigateTo('contact', `Regarding: ${activeNeed.category}`)}
                className="w-full sm:w-auto px-6 py-3 bg-[#FFF9F0] border border-[#E9E3D8] text-[#191919] hover:bg-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] transition-colors text-center"
              >
                Get Custom Proposal
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
