import React, { useState } from 'react';
import { Sliders, Code2, Database, ShieldCheck, ArrowRight, Zap, Terminal, MessageSquare } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const CustomToolsPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [adSpend, setAdSpend] = useState<number>(100000);
  const [avgTicket, setAvgTicket] = useState<number>(45000);

  const estimatedLeads = Math.round(adSpend / 110);
  const estimatedConversions = Math.round(estimatedLeads * 0.10);
  const estimatedRevenue = estimatedConversions * avgTicket;
  const estimatedRoas = (estimatedRevenue / adSpend).toFixed(1);

  return (
    <div className="space-y-0 paper-grain">
      {/* Editorial Header */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5C5C]/10 text-[#FF5C5C] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
            Bespoke Software & Internal Tools
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
            SOFTWARE ENGINEERED
            <br />
            FOR YOUR BRAND'S
            <br />
            <span className="font-editorial italic font-normal text-[#FF5C5C]">EXACT BOTTLENECKS.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl font-sans-ui text-[#191919]/80 max-w-3xl leading-relaxed">
            Off-the-shelf software forces your business into someone else's rigid workflow. We design and build custom client portals, internal ROI calculators, dispatch tools, and webhook automations coded in modern TypeScript, Python and React.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('contact', 'Custom Software & Internal Tools')}
              className="px-6 py-3.5 bg-[#191919] text-white text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#3155FF] transition-colors"
            >
              Request Custom Software Proposal
            </button>
            <button
              onClick={() => navigateTo('crm')}
              className="px-6 py-3.5 bg-white border border-[#E9E3D8] text-[#191919] text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#F7F3EA] transition-colors"
            >
              Inspect Live CRM Tool
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Tool Simulation */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#FF5C5C]">
              Interactive Simulation
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#191919] uppercase mt-2">
              SAMPLE TOOL: AD PIPELINE & REVENUE ENGINE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E9E3D8] rounded-[4px] p-6 md:p-10 shadow-sm">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="flex items-center justify-between text-xs font-display font-bold uppercase text-[#191919] mb-2">
                  <span>Target Monthly Meta Ad Spend:</span>
                  <span className="text-sm font-mono text-[#3155FF]">₹{adSpend.toLocaleString('en-IN')}</span>
                </label>
                <input
                  type="range"
                  min="40000"
                  max="400000"
                  step="10000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-[#3155FF] cursor-pointer"
                />
              </div>

              <div>
                <label className="flex items-center justify-between text-xs font-display font-bold uppercase text-[#191919] mb-2">
                  <span>Average Minimum Customer Ticket Size:</span>
                  <span className="text-sm font-mono text-[#25B889]">₹{avgTicket.toLocaleString('en-IN')}</span>
                </label>
                <input
                  type="range"
                  min="15000"
                  max="200000"
                  step="5000"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-[#25B889] cursor-pointer"
                />
              </div>

              <div className="p-4 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-xs font-sans-ui text-[#191919]/75 leading-relaxed">
                Calculated using Supreme Ads benchmark averages (~₹110 CPL pre-qualified friction and 10% closing conversion rate).
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#191919] text-[#FFF9F0] p-6 md:p-8 rounded-[3px] space-y-4">
              <div className="text-xs font-display font-bold uppercase text-[#C8FF38] tracking-widest">
                Projected Pipeline Model
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/10 rounded-[2px]">
                  <div className="text-[10px] text-white/60 uppercase">Pre-Qualified Inquiries</div>
                  <div className="text-2xl font-display font-bold text-white mt-1">{estimatedLeads} Leads</div>
                </div>
                <div className="p-3 bg-white/10 rounded-[2px]">
                  <div className="text-[10px] text-white/60 uppercase">Estimated Deals Closed</div>
                  <div className="text-2xl font-display font-bold text-[#C8FF38] mt-1">{estimatedConversions} Deals</div>
                </div>
                <div className="p-3 bg-white/10 rounded-[2px]">
                  <div className="text-[10px] text-white/60 uppercase">Projected Closed Revenue</div>
                  <div className="text-2xl font-display font-bold text-[#FFC4A8] mt-1">₹{estimatedRevenue.toLocaleString('en-IN')}</div>
                </div>
                <div className="p-3 bg-white/10 rounded-[2px]">
                  <div className="text-[10px] text-white/60 uppercase">Projected Pipeline ROAS</div>
                  <div className="text-2xl font-display font-bold text-[#25B889] mt-1">{estimatedRoas}x</div>
                </div>
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
              Need Custom Software Built For Your Process?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mt-1">
              We Can Design It AND Code It.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I'm%20interested%20in%20custom%20software%20and%20supporting%20tools%20for%20my%20brand."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#25B889] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-[#1C966E] transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare size={16} /> WhatsApp: 9667173693
            </a>
            <button
              onClick={() => navigateTo('contact', 'Custom Tools & Software Architecture')}
              className="px-8 py-4 bg-[#FF5C5C] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-[#E04848] transition-colors"
            >
              Discuss Custom Software
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
