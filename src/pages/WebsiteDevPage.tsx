import React from 'react';
import { Laptop, ArrowRight, CheckCircle2, ShieldCheck, Zap, Code2, Smartphone, Search, Target, MessageSquare } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const WebsiteDevPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const EIGHT_STEPS = [
    {
      step: '01',
      title: 'Understand the Business',
      desc: 'Before designing a single screen, we audit your business model, products/services, unit economics, customer pain points, competitors, and growth goals.'
    },
    {
      step: '02',
      title: 'Customer Journey Architecture',
      desc: 'We map how visitors transition from First Impression → Interest → Information → Trust → Action, answering objections before asking for the conversion.'
    },
    {
      step: '03',
      title: 'Custom Website Structure',
      desc: 'Bespoke hierarchy planned around your commercial offering: dedicated landing pages, conversion funnels, case study dossiers, and micro-interactions.'
    },
    {
      step: '04',
      title: 'Visual Design & Brand Authority',
      desc: 'Custom-built in Figma and modern React. Zero generic WordPress templates. Elevated typography, custom grids, and cinema visual assets.'
    },
    {
      step: '05',
      title: 'Conversion-Focused Action Points',
      desc: 'Every section has a reason for existing: direct WhatsApp booking, 1-click UPI checkout, lead qualification forms, or consultation calendar triggers.'
    },
    {
      step: '06',
      title: 'Mobile-First Performance',
      desc: 'Over 85% of ad traffic arrives on smartphones from Instagram and Meta feeds. We guarantee sub-second (<0.8s) loading speeds on mobile networks.'
    },
    {
      step: '07',
      title: 'SEO + AEO Foundation',
      desc: 'Clean semantic structure and Schema.org JSON-LD built so Google search engines and modern AI Answer Engines (AEO) index your brand with high authority.'
    },
    {
      step: '08',
      title: 'Built for Advertising (Ad-to-Site Sync)',
      desc: 'Ad Creative → Landing Page → Clear Offer → Trust → CTA. Message consistency eliminates drop-off and skyrockets ad relevance scores.'
    }
  ];

  return (
    <div className="space-y-0 paper-grain">
      {/* Editorial Header */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7856FF]/10 text-[#7856FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
            Web Engineering & Conversion Systems
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
            WEBSITES BUILT
            <br />
            FOR CONVERSIONS,
            <br />
            NOT <span className="font-editorial italic font-normal text-[#7856FF]">DECORATION.</span>
          </h1>

          <p className="mt-6 text-base md:text-xl font-sans-ui text-[#191919]/80 max-w-3xl leading-relaxed">
            Supreme Ads does not build websites simply to give businesses an online presence. The key question we answer is: <em>“What should the visitor do after landing on this website?”</em>
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('contact', 'Website Development Project')}
              className="px-6 py-3.5 bg-[#7856FF] text-white text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#6340E6] transition-colors"
            >
              Build A Conversion-Focused Website
            </button>
            <button
              onClick={() => navigateTo('work')}
              className="px-6 py-3.5 bg-white border border-[#E9E3D8] text-[#191919] text-xs font-display font-bold uppercase tracking-wider rounded-[3px] hover:bg-[#F7F3EA] transition-colors"
            >
              View Web Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* The 8-Step Supreme Ads Approach */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#7856FF]">
              Our Engineering Standard
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#191919] uppercase mt-2">
              THE 8-STEP SUPREME ADS APPROACH
            </h2>
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/70 mt-2 max-w-xl">
              Every website we build follows a rigorous, conversion-obsessed sequence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EIGHT_STEPS.map((s) => (
              <div key={s.step} className="p-6 bg-white border border-[#E9E3D8] rounded-[3px] flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-xs font-mono font-bold text-[#7856FF]">Step {s.step}</span>
                  <h3 className="font-display font-bold text-base uppercase text-[#191919] mt-2">
                    {s.title}
                  </h3>
                  <p className="text-xs font-sans-ui text-[#191919]/75 mt-3 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E9E3D8] flex items-center gap-1.5 text-[11px] font-sans-ui text-[#25B889]">
                  <CheckCircle2 size={13} />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ad-to-Website Conversion Machine */}
      <section className="py-20 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#3155FF]">
              Built For Advertising
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#191919] uppercase leading-tight">
              Why Advertising Performance Depends on Your Website
            </h2>
            <p className="text-sm font-sans-ui text-[#191919]/80 leading-relaxed">
              If your Meta Ad promises a luxury service, but the landing page is slow, clunky, or confusing, 90% of your paid traffic will bounce within 3 seconds.
            </p>
            <p className="text-sm font-sans-ui text-[#191919]/80 leading-relaxed">
              We design websites that act as the natural continuation of your ads: matching headlines, pre-answering pricing doubts, and making the next step effortless.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-display font-bold uppercase text-[#7856FF]">
              <span>React 19</span> · <span>Next.js</span> · <span>TypeScript</span> · <span>Tailwind</span> · <span>Meta CAPI</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#191919] text-[#FFF9F0] p-8 rounded-[4px] space-y-4">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-[#C8FF38]">
              Core Web Vital Performance
            </div>
            <div className="text-4xl font-display font-bold text-white">&lt; 0.8s Mobile Speed</div>
            <p className="text-xs font-sans-ui text-white/70 leading-relaxed">
              Zero slow external plugin bloat. Hand-coded responsive components that score 95+ on Google Lighthouse and ensure zero wasted ad clicks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#191919] text-[#FFF9F0]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#C8FF38]">
              Ready to Upgrade Your Digital Flagship?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mt-1">
              Let's Build Your Website.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I%20want%20to%20consult%20on%20website%20development."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-display font-extrabold uppercase tracking-widest rounded-[3px] transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageSquare size={16} />
              <span>WhatsApp: 9667173693</span>
            </a>

            <button
              onClick={() => navigateTo('contact', 'Conversion Website Development')}
              className="px-8 py-4 bg-[#7856FF] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-[#6340E6] transition-colors"
            >
              Start Website Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
