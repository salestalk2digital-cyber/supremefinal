import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface MetaAdsSectionProps {
  onStartProject: () => void;
  onViewVybeCase: () => void;
}

export const MetaAdsSection: React.FC<MetaAdsSectionProps> = ({ onStartProject, onViewVybeCase }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const PROCESS_STEPS = [
    {
      step: '01',
      name: 'UNDERSTAND',
      tagline: 'Diagnose your real unit economics and customer trigger points.',
      description: 'We do not run ads blindly. We interview you to discover who actually pays you, what objections they bring up, and why your past buyers decided to say yes.',
      deliverable: 'Customer Avatar & Objection Matrix'
    },
    {
      step: '02',
      name: 'TARGET',
      tagline: 'Define audience clusters without relying on lazy broad settings.',
      description: 'We map layered affinity audiences, geographic micro-clusters (e.g. South Delhi, Gurgaon, NCR hubs), and custom lookalikes built from closed buyers.',
      deliverable: '3 Core Audience Segments Tested'
    },
    {
      step: '03',
      name: 'CREATE',
      tagline: 'Hooking attention in the first 2 seconds.',
      description: 'High-production visual assets, candid video formats, and direct response copy that addresses genuine problems instead of fluff slogans.',
      deliverable: '4 Distinct Angle Creative Bundles'
    },
    {
      step: '04',
      name: 'TEST',
      tagline: 'Systematic dynamic testing before scaling spend.',
      description: 'Testing 3 hooks × 2 body angles × 2 calls to action inside a clean ABO testing sandbox to find clear statistical winners before scaling budget.',
      deliverable: 'Winning Angle Validation'
    },
    {
      step: '05',
      name: 'OPTIMISE',
      tagline: 'Killing loser ads fast and scaling winners.',
      description: 'Daily bid and budget management. We reallocate budget toward low CPL, high conversion angles while eliminating audience fatigue before it drains profit.',
      deliverable: 'Budget Reallocation & Lower CPA'
    },
    {
      step: '06',
      name: 'QUALIFY',
      tagline: 'Pre-filtering leads so your sales team talks to real buyers.',
      description: 'We don’t celebrate 100 cheap leads who cannot afford your price. We add intentional qualifying questions (budget tier, event date, requirement specs) into the form.',
      deliverable: 'High-Intent Pre-screened Leads'
    },
    {
      step: '07',
      name: 'FOLLOW UP',
      tagline: 'Instant handoff into Supreme Ads CRM & WhatsApp.',
      description: 'Leads are routed immediately via webhook into our CRM and your phone. Because contacting a lead within 15 minutes increases close rates by up to 391%.',
      deliverable: 'Zero-Lag WhatsApp & Call Dispatch'
    },
    {
      step: '08',
      name: 'CONVERT',
      tagline: 'Turning conversations into signed contracts.',
      description: 'We review actual sales conversations, pitch decks, and WhatsApp scripts with your team to fix the gap between lead inquiry and closed revenue.',
      deliverable: 'Measurable ROI & Revenue'
    }
  ];

  return (
    <section id="meta-ads-section" className="py-20 md:py-32 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header with Cobalt + Lavender Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3155FF]/10 text-[#3155FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Performance Marketing · Meta Ads Management
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
              GETTING LEADS
              <br />
              <span className="text-[#3155FF]">BUT NOT THE</span>
              <br />
              <span className="font-editorial italic font-normal text-[#7856FF]">RIGHT</span> CUSTOMERS?
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              Most digital marketing agencies boast about getting you hundreds of ₹20 leads. But when your sales team calls them, they say: <em>"I clicked by mistake"</em> or <em>"Your price is too high."</em>
              <br /><br />
              At <strong>Supreme Ads</strong>, we engineer Meta Ads to pre-qualify intent, filter out tire-kickers, and feed your pipeline with people who have budget and urgency.
            </p>

            <div className="mt-6 pt-4 border-t border-[#E9E3D8] flex items-center gap-4">
              <button
                onClick={onStartProject}
                className="px-5 py-2.5 bg-[#3155FF] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] hover:bg-[#2040E0] transition-colors"
              >
                Fix My Meta Ads
              </button>
              <button
                onClick={onViewVybeCase}
                className="text-xs font-display font-bold uppercase text-[#191919] hover:text-[#3155FF] flex items-center gap-1"
              >
                View Vybe Setters Proof <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ELEGANT EDITORIAL FLOW (Replaces the ugly mechanical box from screenshot) */}
        <div className="mb-20 border-t border-b border-[#E9E3D8] py-12 bg-[#FFF9F0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#E9E3D8]/60">
            <div>
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#3155FF]">
                The Continuous Conversion Sequence
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#191919] uppercase mt-1">
                Every Step From Ad View To Signed Contract
              </h3>
            </div>
            <div className="text-xs font-editorial italic text-[#191919]/60 text-base mt-2 sm:mt-0">
              No broken links in the chain
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E9E3D8]">
            {[
              { num: 'I', label: 'BUSINESS', desc: 'Margin & Offer Structure' },
              { num: 'II', label: 'AUDIENCE', desc: 'High-Net-Worth Targeting' },
              { num: 'III', label: 'CREATIVE', desc: 'Scroll-Stopping Hooks' },
              { num: 'IV', label: 'CAMPAIGN', desc: 'Dynamic Angle Testing' },
              { num: 'V', label: 'LEAD', desc: 'Strict Pre-Qualification' },
              { num: 'VI', label: 'FOLLOW-UP', desc: '<15 Min CRM Dispatch' },
              { num: 'VII', label: 'SALE', desc: 'Deposited Revenue' }
            ].map((node, i) => (
              <div
                key={node.label}
                className={`pt-4 lg:pt-0 ${i > 0 ? 'lg:pl-5' : ''} flex flex-col justify-between`}
              >
                <div>
                  <span className="text-lg font-editorial italic font-normal text-[#3155FF]">
                    {node.num}
                  </span>
                  <div className="text-base font-display font-bold text-[#191919] uppercase mt-1 tracking-tight">
                    {node.label}
                  </div>
                </div>
                <div className="text-xs text-[#191919]/70 font-sans-ui mt-3 leading-relaxed">
                  {node.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Step Explorer: UNDERSTAND → CONVERT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-[#191919]/50 mb-2">
              Our 8-Phase Execution Architecture:
            </div>

            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.name}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-3.5 rounded-[2px] border transition-all flex items-center justify-between ${
                  activeStepIndex === idx
                    ? 'bg-[#3155FF] text-white border-[#3155FF] shadow-sm translate-x-1.5'
                    : 'bg-white hover:bg-[#FFF9F0] border-[#E9E3D8] text-[#191919]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-display font-bold ${activeStepIndex === idx ? 'text-[#FFC4A8]' : 'text-[#3155FF]'}`}>
                    {step.step}
                  </span>
                  <span className="font-display font-bold text-sm tracking-wide">
                    {step.name}
                  </span>
                </div>
                <span className={`text-[11px] font-sans-ui ${activeStepIndex === idx ? 'text-white/80' : 'text-[#191919]/50'}`}>
                  Phase {idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#E9E3D8] rounded-[3px] shadow-sm flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E9E3D8]">
                <div className="text-xs font-display font-bold tracking-widest text-[#3155FF] uppercase">
                  Phase {PROCESS_STEPS[activeStepIndex].step} of 08
                </div>
                <span className="text-xs font-sans-ui text-[#191919]/50">
                  Supreme Ads Proprietary System
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#191919] uppercase tracking-tight">
                  {PROCESS_STEPS[activeStepIndex].name}
                </h3>
                <p className="text-base md:text-lg text-[#3155FF] font-medium font-sans-ui mt-2">
                  {PROCESS_STEPS[activeStepIndex].tagline}
                </p>
                <p className="text-sm md:text-base text-[#191919]/75 font-sans-ui mt-6 leading-relaxed">
                  {PROCESS_STEPS[activeStepIndex].description}
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E9E3D8] bg-[#FFF9F0] p-4 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-display font-bold text-[#191919]/50 uppercase tracking-widest">
                  Key Deliverable:
                </div>
                <div className="text-sm font-display font-bold text-[#191919]">
                  {PROCESS_STEPS[activeStepIndex].deliverable}
                </div>
              </div>
              <button
                onClick={onStartProject}
                className="px-4 py-2 bg-[#191919] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[2px] hover:bg-[#3155FF] transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                Apply to My Business
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
