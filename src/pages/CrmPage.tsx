import React from 'react';
import { MessageSquare, ArrowRight, Phone } from 'lucide-react';
import { CrmSection } from '../components/CrmSection';
import { useNavigation } from '../context/NavigationContext';

export const CrmPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25B889]/15 text-[#191919] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Sales Operating System · CRM Architecture
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
              YOUR LEADS.
              <br />
              <span className="text-[#25B889]">ZERO MISSED</span>
              <br />
              <span className="font-editorial italic font-normal text-[#191919]">FOLLOW-UPS.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg font-sans-ui text-[#191919]/80 leading-relaxed">
              Managing inquiries in loose WhatsApp threads or manual notebooks kills ad profitability. Explore our live interactive lead board below—custom built for fast-moving sales teams.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive CRM Board */}
      <CrmSection onStartProject={() => navigateTo('contact', 'Supreme Ads Sales CRM System')} />

      {/* Bottom CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#191919] text-[#FFF9F0]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#25B889]">
              Turn Ad Inquiries Into Cashflow
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mt-1">
              Deploy Your Custom CRM Pipeline
            </h2>
            <p className="text-sm font-sans-ui text-white/70 mt-2 max-w-xl">
              Connect Meta Ad webhooks, automate WhatsApp notifications, and close high-ticket clients faster. Call or message us directly at +91 9667173693.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I'm%20interested%20in%20setting%20up%20a%20Lead%20Management%20CRM%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#25B889] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-[#1C966E] transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare size={16} /> WhatsApp: 9667173693
            </a>
            <button
              onClick={() => navigateTo('contact', 'Supreme Ads Sales CRM System')}
              className="px-8 py-4 bg-white text-[#191919] text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-[#C8FF38] transition-colors inline-flex items-center gap-2"
            >
              Get Custom CRM <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
