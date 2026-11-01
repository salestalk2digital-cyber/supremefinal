import React from 'react';
import { AwardWinningHero } from '../components/AwardWinningHero';
import { VisualIntroGrid } from '../components/VisualIntroGrid';
import { ClientMarquee } from '../components/ClientMarquee';
import { PhilosophySection } from '../components/PhilosophySection';
import { EcosystemSection } from '../components/EcosystemSection';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onSelectProject: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProject }) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0">
      {/* 01: Award-Winning Staggered Hero with Interactive Studio Laptop */}
      <AwardWinningHero />

      {/* 02: Visual Multi-Grid Showcase ("WE MAKE PEOPLE STOP" & "FROM CLICK TO CUSTOMER") */}
      <VisualIntroGrid onSelectProject={onSelectProject} />

      {/* 03: The 5 Core Disciplines Overview (Editorial Cards) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8] paper-grain">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E9E3D8]">
            <div>
              <div className="text-xs font-display font-bold uppercase tracking-widest text-[#3155FF] mb-2">
                Supreme Ads Roster / 03
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#191919] uppercase tracking-tight">
                OUR FIVE CORE DISCIPLINES
              </h2>
            </div>
            <button
              onClick={() => navigateTo('services')}
              className="mt-4 md:mt-0 text-xs font-display font-bold uppercase tracking-wider text-[#3155FF] hover:underline flex items-center gap-1"
            >
              View Full Services Page <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'META ADS MANAGEMENT',
                desc: 'Targeted audience segmentation, creative testing, and high-intent lead qualification.',
                proof: 'The Vybe Setters: 10+ bookings at ~₹100 CPL',
                page: 'services' as const,
                ctx: 'Meta Ads Management'
              },
              {
                num: '02',
                title: 'D2C BRAND MARKETING',
                desc: 'Sensory product photography, brand positioning, and repeat e-commerce buying funnels.',
                proof: 'Sugar Mellow: Artisanal gifting e-commerce scaling',
                page: 'services' as const,
                ctx: 'D2C Brand Marketing'
              },
              {
                num: '03',
                title: 'WEBSITE & CUSTOM SOFTWARE',
                desc: 'React, Next.js, bespoke web systems, internal portals and custom automation.',
                proof: 'Sub-second loading, built-in CAPI and zero templates',
                page: 'services' as const,
                ctx: 'Website & Software Dev'
              },
              {
                num: '04',
                title: 'SOCIAL MEDIA PRODUCTION',
                desc: '18–20 curated posts per month with 2 on-location cinema shoots included.',
                proof: 'Full creative studio: director, videographer, copywriter',
                page: 'services' as const,
                ctx: 'Social Media Management'
              },
              {
                num: '05',
                title: 'SALES CRM OPERATING SYSTEM',
                desc: 'Custom lead board with instant Meta sync, quality tags, and 1-click WhatsApp dispatch.',
                proof: 'Live system: lead-funnel-sa.vercel.app',
                page: 'crm' as const,
                ctx: 'Sales CRM'
              },
              {
                num: '06',
                title: 'BUSINESS GROWTH DIAGNOSTIC',
                desc: 'Pinpointing the exact broken link between reach, interest, enquiry, and closing.',
                proof: 'Framework addressing 6 common business bottlenecks',
                page: 'diagnostic' as const,
                ctx: 'Growth Diagnostic'
              }
            ].map(item => (
              <div
                key={item.num}
                onClick={() => navigateTo(item.page, item.ctx)}
                className="group p-8 bg-white border border-[#E9E3D8] rounded-[3px] flex flex-col justify-between hover:border-[#191919] transition-all cursor-pointer shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-display font-bold text-[#3155FF] uppercase">
                    <span>Discipline {item.num}</span>
                    <ArrowUpRight size={16} className="text-[#191919] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#191919] uppercase mt-3 group-hover:text-[#3155FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#191919]/75 font-sans-ui mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E9E3D8] text-[11px] font-sans-ui text-[#191919]/70 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#25B889] shrink-0" />
                  <span>{item.proof}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Continuous Client Wall */}
      <ClientMarquee />

      {/* 05: Philosophy Section */}
      <PhilosophySection onStartProject={() => navigateTo('contact')} />

      {/* 06: Ecosystem */}
      <EcosystemSection />
    </div>
  );
};
