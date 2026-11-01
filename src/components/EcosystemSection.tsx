import React, { useState } from 'react';
import { ArrowRight, Share2, Layers, Cpu } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('CRM');

  const NODES: Record<string, {
    title: string;
    role: string;
    flow: string;
    syncsWith: string[];
    accent: string;
  }> = {
    'META ADS': {
      title: 'Meta Ads & Paid Acquisition',
      role: 'Injects high-intent buyer traffic into the top of the funnel via systematic hook and angle testing.',
      flow: 'Prospect Views Ad → Clicks → Passes UTM parameters to Landing Page & Pixel.',
      syncsWith: ['WEBSITE', 'ANALYTICS', 'DATA'],
      accent: '#3155FF'
    },
    'WEBSITE': {
      title: 'High-Speed Web Experience',
      role: 'Sub-second loading landing page that eliminates doubt and qualifies lead intent before form submission.',
      flow: 'Pre-screens budget and requirement → Triggers Conversion API webhook.',
      syncsWith: ['META ADS', 'CRM', 'ANALYTICS'],
      accent: '#7856FF'
    },
    'CRM': {
      title: 'Supreme Ads Lead Board',
      role: 'Centralized sales command center where reps claim leads, trigger WhatsApp chats, and track follow-up dates.',
      flow: 'Receives instant webhook → Alerts sales team phone → Initiates 15-minute response loop.',
      syncsWith: ['WEBSITE', 'AUTOMATION', 'SALES'],
      accent: '#25B889'
    },
    'ANALYTICS': {
      title: 'CAPI & Attribution Intelligence',
      role: 'Server-side tracking that bypasses iOS 14.5+ ad signal loss and reports true Cost-Per-Acquisition.',
      flow: 'Conversions mapped back to Meta Ads Manager for algorithmic bid optimization.',
      syncsWith: ['META ADS', 'WEBSITE', 'DATA'],
      accent: '#4169FF'
    },
    'AUTOMATION': {
      title: 'Zero-Lag Webhook Automations',
      role: 'Instant WhatsApp message delivery, SMS notifications, and calendar bookings without manual friction.',
      flow: 'Lead Created → Auto-dispatches intro brochure + WhatsApp chat link within 30 seconds.',
      syncsWith: ['CRM', 'CONTENT', 'SALES'],
      accent: '#F47A38'
    },
    'DATA': {
      title: 'Audience Segments & LTV Profiling',
      role: 'Compiles purchase frequency, average ticket sizes, and customer demographics for future lookalikes.',
      flow: 'Past buyers uploaded to Meta as high-value Value-Based Custom Audiences.',
      syncsWith: ['META ADS', 'CRM', 'ANALYTICS'],
      accent: '#3155FF'
    },
    'CONTENT': {
      title: 'Editorial Creative Production',
      role: 'Continuous reel and video asset supply from Delhi NCR studio shoots to fuel weekly ad refreshes.',
      flow: 'Winning organic reels repackaged into high-performing paid ads.',
      syncsWith: ['META ADS', 'AUTOMATION', 'SALES'],
      accent: '#C8FF38'
    },
    'SALES': {
      title: 'Commercial Closing Pipeline',
      role: 'The revenue endpoint where proposals, contracts, and invoices turn inquiries into deposited cash.',
      flow: 'Closed deal marked in CRM → Triggers celebratory client onboarding workflow.',
      syncsWith: ['CRM', 'DATA', 'AUTOMATION'],
      accent: '#25B889'
    }
  };

  const current = NODES[activeNode];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E9E3D8]">
          <div>
            <div className="text-[12px] font-display font-bold tracking-widest text-[#3155FF] uppercase mb-2">
              Interconnected System / 09 · Technology Ecosystem
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#191919] tracking-tight leading-[0.92] uppercase">
              NOT ISOLATED SERVICES. <br />
              <span className="font-editorial italic font-normal text-[#25B889]">ONE</span> CONTINUOUS ENGINE.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs md:text-sm font-sans-ui text-[#191919]/70 max-w-md">
            Click any node in our technological infrastructure to inspect data flow, webhook triggers, and automated handoffs.
          </div>
        </div>

        {/* The Node Network */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {Object.keys(NODES).map((nodeKey) => {
            const isSelected = activeNode === nodeKey;
            return (
              <button
                key={nodeKey}
                onClick={() => setActiveNode(nodeKey)}
                className={`p-3.5 text-center rounded-[2px] border transition-all flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-[#191919] text-white border-[#191919] shadow-md scale-103'
                    : 'bg-white hover:bg-[#FFF9F0] border-[#E9E3D8] text-[#191919]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full mb-2 ${isSelected ? 'bg-[#C8FF38]' : 'bg-[#191919]/30'}`} />
                <span className="font-display font-bold text-xs uppercase tracking-wider">
                  {nodeKey}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Ecosystem Signal Inspector */}
        <div className="p-8 md:p-12 bg-white border border-[#E9E3D8] rounded-[3px] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#3155FF]">
                <Cpu size={14} />
                Selected Ecosystem Hub: {activeNode}
              </div>

              <h3 className="text-2xl md:text-4xl font-display font-bold text-[#191919] uppercase tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
                {current.role}
              </p>

              <div className="p-4 bg-[#FFF9F0] border-l-2 border-[#191919] text-xs font-sans-ui text-[#191919]/90">
                <span className="font-display font-bold uppercase block mb-1">Live Pipeline Signal:</span>
                {current.flow}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F7F3EA] p-6 rounded-[2px] border border-[#E9E3D8] space-y-4">
              <div className="text-xs font-display font-bold uppercase tracking-wider text-[#191919]/60">
                Direct Synchronizations:
              </div>

              <div className="flex flex-wrap gap-2">
                {current.syncsWith.map(s => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-white border border-[#E9E3D8] rounded-[2px] text-xs font-display font-bold text-[#191919] uppercase flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25B889]" />
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-[11px] text-[#191919]/60 font-sans-ui pt-2">
                Data flows continuously via secure webhooks and private APIs. No human manual copy-pasting between spreadsheets.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
