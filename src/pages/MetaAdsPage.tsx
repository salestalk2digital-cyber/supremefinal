import React from 'react';
import { Target, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Layers, RefreshCcw, Sparkles, MessageSquare } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const MetaAdsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0 paper-grain">
      {/* Editorial Header */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3155FF]/10 text-[#3155FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
            Performance Marketing Discipline
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
            WHAT IS META ADS?
            <br />
            <span className="text-[#3155FF]">& HOW SUPREME ADS</span>
            <br />
            <span className="font-editorial italic font-normal text-[#F47A38]">WORKS.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl font-sans-ui text-[#191919]/80 max-w-3xl leading-relaxed">
            Supreme Ads does not simply “run Facebook ads”. We plan and execute the complete advertising system designed to turn digital attention into paying customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('contact', 'Meta Ads Consultation')}
              className="px-6 py-3.5 bg-[#3155FF] text-white text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#2040E0] transition-colors"
            >
              Book Meta Ads Consultation
            </button>
            <button
              onClick={() => navigateTo('work')}
              className="px-6 py-3.5 bg-white border border-[#E9E3D8] text-[#191919] text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#F7F3EA] transition-colors"
            >
              View Verified Case Results
            </button>
          </div>
        </div>
      </section>

      {/* The Core Growth System Continuum */}
      <section className="py-16 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-xs font-display font-bold uppercase tracking-widest text-[#3155FF] mb-3">
            The Supreme Ads Growth Continuum
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
            {[
              { label: 'META ADS', desc: 'Brings Intentional Attention' },
              { label: 'WEBSITE', desc: 'Builds Immediate Trust' },
              { label: 'OFFER', desc: 'Clear Value Exchange' },
              { label: 'ENQUIRY', desc: '<15 Min CRM Follow-Up' },
              { label: 'CUSTOMER', desc: 'Deposited Bank Revenue' }
            ].map((step, idx) => (
              <div key={step.label} className="p-4 bg-white border border-[#E9E3D8] rounded-[3px]">
                <span className="text-[11px] font-mono text-[#3155FF]">0{idx + 1}</span>
                <div className="font-display font-bold text-sm text-[#191919] mt-1">{step.label}</div>
                <div className="text-xs text-[#191919]/60 font-sans-ui mt-0.5">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Core Pillars: HOW SUPREME ADS WORKS */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/50">
              Execution Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#191919] uppercase mt-2">
              HOW SUPREME ADS WORKS
            </h2>
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/70 mt-2 max-w-2xl">
              We never take your money and push generic buttons inside Ads Manager. We architect 5 interconnected phases:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Audience Strategy */}
            <div className="p-8 bg-white border border-[#E9E3D8] rounded-[3px] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-display font-bold text-[#3155FF] uppercase">Phase 01</span>
                <h3 className="text-2xl font-display font-bold text-[#191919] uppercase mt-2">
                  Audience Strategy
                </h3>
                <p className="text-xs font-editorial italic text-[#3155FF] mt-1">
                  "Focus on the right audience, not simply a large audience."
                </p>
                <p className="text-xs font-sans-ui text-[#191919]/75 mt-4 leading-relaxed">
                  We identify the people most likely to become paying customers based on real buying intent:
                </p>
                <ul className="mt-4 space-y-1.5 text-xs font-sans-ui text-[#191919]/80">
                  <li>• Demographics & Micro-Locations</li>
                  <li>• High-Ticket Interests & Luxury Affinity</li>
                  <li>• Past Closed Customer LTV Modeling</li>
                  <li>• Remarketing & Website Engagement Clusters</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E9E3D8] text-[11px] font-mono text-[#191919]/60">
                Deliverable: Customer Avatar & Objection Matrix
              </div>
            </div>

            {/* 2. Campaign Strategy */}
            <div className="p-8 bg-white border border-[#E9E3D8] rounded-[3px] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-display font-bold text-[#3155FF] uppercase">Phase 02</span>
                <h3 className="text-2xl font-display font-bold text-[#191919] uppercase mt-2">
                  Campaign Strategy
                </h3>
                <p className="text-xs font-editorial italic text-[#3155FF] mt-1">
                  "Selected strictly by your actual commercial objective."
                </p>
                <p className="text-xs font-sans-ui text-[#191919]/75 mt-4 leading-relaxed">
                  We configure campaign objectives that map directly to revenue:
                </p>
                <ul className="mt-4 space-y-1.5 text-xs font-sans-ui text-[#191919]/80">
                  <li>• Qualified Inbound Lead Generation</li>
                  <li>• Direct WhatsApp Business Enquiries</li>
                  <li>• Conversion-API Website Purchases</li>
                  <li>• High-Ticket Event & Service Bookings</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E9E3D8] text-[11px] font-mono text-[#191919]/60">
                Deliverable: Full-Funnel ABO & CBO Campaign Structure
              </div>
            </div>

            {/* 3. Creative Strategy */}
            <div className="p-8 bg-white border border-[#E9E3D8] rounded-[3px] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-display font-bold text-[#3155FF] uppercase">Phase 03</span>
                <h3 className="text-2xl font-display font-bold text-[#191919] uppercase mt-2">
                  Creative Strategy
                </h3>
                <p className="text-xs font-editorial italic text-[#3155FF] mt-1">
                  "Creative is 70% of performance. Zero generic stock ads."
                </p>
                <p className="text-xs font-sans-ui text-[#191919]/75 mt-4 leading-relaxed">
                  Supreme Ads creates high-impact assets specifically tailored for your audience:
                </p>
                <ul className="mt-4 space-y-1.5 text-xs font-sans-ui text-[#191919]/80">
                  <li>• 1.8-Second Scroll-Stopping Video Hooks</li>
                  <li>• High-Fashion Reels & Founder POV Video Ads</li>
                  <li>• Irresistible Offer Packaging & Value Exchange</li>
                  <li>• Conversion Copywriting Designed for High-Ticket Intent</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E9E3D8] text-[11px] font-mono text-[#191919]/60">
                Deliverable: Multi-Angle Creative Packs Tested Weekly
              </div>
            </div>

            {/* 4. Testing */}
            <div className="p-8 bg-white border border-[#E9E3D8] rounded-[3px] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-display font-bold text-[#3155FF] uppercase">Phase 04</span>
                <h3 className="text-2xl font-display font-bold text-[#191919] uppercase mt-2">
                  Continuous Testing
                </h3>
                <p className="text-xs font-editorial italic text-[#3155FF] mt-1">
                  "Data tells us what to scale and what to kill."
                </p>
                <p className="text-xs font-sans-ui text-[#191919]/75 mt-4 leading-relaxed">
                  We isolate variables before spending major ad budget:
                </p>
                <ul className="mt-4 space-y-1.5 text-xs font-sans-ui text-[#191919]/80">
                  <li>• Testing 3 Hooks × 2 Angles in Sandboxes</li>
                  <li>• Placement Optimisation (Reels vs Feed vs Story)</li>
                  <li>• Landing Page Headline Match Testing</li>
                  <li>• Message Validation Prior to Scale</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E9E3D8] text-[11px] font-mono text-[#191919]/60">
                Deliverable: Validated Statistical Winners
              </div>
            </div>

            {/* 5. Optimisation */}
            <div className="p-8 bg-white border border-[#E9E3D8] rounded-[3px] shadow-xs flex flex-col justify-between lg:col-span-2">
              <div>
                <span className="text-xs font-display font-bold text-[#3155FF] uppercase">Phase 05</span>
                <h3 className="text-2xl font-display font-bold text-[#191919] uppercase mt-2">
                  Performance Optimisation
                </h3>
                <p className="text-sm font-editorial italic text-[#3155FF] mt-1 text-base">
                  "The objective is NOT simply to generate cheap leads. The objective is to generate leads that have a genuine possibility of becoming customers."
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  <div className="p-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-xs font-display font-bold text-[#191919]">Cost Per Lead</div>
                    <div className="text-[11px] text-[#191919]/60 mt-1">Monitored daily against unit economics</div>
                  </div>
                  <div className="p-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-xs font-display font-bold text-[#191919]">Lead Quality</div>
                    <div className="text-[11px] text-[#191919]/60 mt-1">Pre-qualification questions added to forms</div>
                  </div>
                  <div className="p-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-xs font-display font-bold text-[#191919]">Close Rate</div>
                    <div className="text-[11px] text-[#191919]/60 mt-1">Synced with sales rep closing feedback</div>
                  </div>
                  <div className="p-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-xs font-display font-bold text-[#191919]">Net ROAS</div>
                    <div className="text-[11px] text-[#191919]/60 mt-1">Attributed bank cash return</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E9E3D8] flex items-center justify-between">
                <span className="text-xs text-[#191919]/70 font-sans-ui">
                  Case Study: The Vybe Setters (₹48K ad spend → 10+ bookings at ~₹100 CPL)
                </span>
                <button
                  onClick={() => navigateTo('work')}
                  className="text-xs font-display font-bold uppercase text-[#3155FF] hover:underline"
                >
                  View Case Breakdown →
                </button>
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
              Ready to Upgrade Your Advertising?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mt-1">
              Stop Burning Money On Junk Leads.
            </h2>
            <p className="text-xs md:text-sm font-sans-ui text-white/70 mt-2">
              Book a direct consultation with our senior Meta Ads performance team in Delhi NCR.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I%20want%20to%20consult%20on%20Meta%20Ads."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-display font-extrabold uppercase tracking-widest rounded-[3px] transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageSquare size={16} />
              <span>WhatsApp: 9667173693</span>
            </a>

            <button
              onClick={() => navigateTo('contact', 'Meta Ads Campaign Overhaul')}
              className="px-8 py-4 bg-[#3155FF] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-white hover:text-[#191919] transition-all"
            >
              Start Meta Ads Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
