import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191919] text-[#FFF9F0] pt-24 pb-14 px-6 md:px-12 border-t border-[#191919] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Massive Editorial Typographic Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-20 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-[#C8FF38] mb-4">
              Begin Collaboration / 2026
            </div>

            <h2 className="font-display font-bold tracking-[-0.055em] leading-[0.88] text-[clamp(48px,8vw,140px)] uppercase text-[#FFF9F0]">
              LET'S
              <br />
              BUILD
              <br />
              <span className="font-editorial italic font-normal text-[#FFC4A8]">SOMETHING</span>
              <br />
              THAT GROWS.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <p className="text-sm md:text-base font-sans-ui text-[#FFF9F0]/75 leading-relaxed">
              Whether you need to scale Meta ads profitably, build a high-performance web platform, or deploy our custom CRM lead board — we are ready to engineer your growth.
            </p>

            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-4 bg-[#3155FF] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-white hover:text-[#191919] transition-all flex items-center justify-between"
              data-cursor="START"
            >
              <span>Start A Project Brief</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* 4-Column Navigation & Regional Hub Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          
          {/* Col 1: Brand Wordmark & Tagline */}
          <div className="space-y-4">
            <div className="text-2xl font-display font-bold tracking-tight text-white">
              SUPREME ADS
            </div>
            <div className="text-xs font-editorial italic text-[#FFC4A8] text-sm">
              Turn Clicks Into Customers
            </div>
            <p className="text-xs font-sans-ui text-white/60 leading-relaxed">
              A premium advertising, marketing, website development, software and sales CRM company based in Delhi, India.
            </p>
          </div>

          {/* Col 2: Services Quick Jump */}
          <div className="space-y-3">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-white/50">
              Disciplines & Pages
            </div>
            <ul className="space-y-2 text-xs font-sans-ui text-white/80">
              <li>
                <button onClick={() => navigateTo('services', 'Meta Ads Management')} className="hover:text-[#3155FF] transition-colors">
                  Meta Ads Performance
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services', 'D2C Brand Marketing')} className="hover:text-[#F47A38] transition-colors">
                  D2C Brand Acceleration
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services', 'Website & Software')} className="hover:text-[#7856FF] transition-colors">
                  Custom Web & Software Dev
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services', 'Social Media')} className="hover:text-[#C8FF38] transition-colors">
                  Social Media Production (18–20 Posts)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('crm')} className="hover:text-[#25B889] transition-colors">
                  Supreme Ads Lead Board (CRM)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('diagnostic')} className="hover:text-[#F05A5A] transition-colors">
                  Business Growth Diagnostic
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Operations */}
          <div className="space-y-3">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-white/50">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs font-sans-ui text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#3155FF]" />
                <span>Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#3155FF]" />
                <span>contact@supremeadvertisment.in</span>
              </div>
              <a href="tel:+919667173693" className="flex items-center gap-2 hover:text-[#C8FF38] transition-colors">
                <Phone size={13} className="text-[#3155FF]" />
                <span>+91 9667173693</span>
              </a>
              <div className="text-[11px] font-mono text-[#FFC4A8]">
                supremeadvertisment.in
              </div>
            </div>
          </div>

          {/* Col 4: Verified Channels & Live Links */}
          <div className="space-y-3">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-white/50">
              Systems & Network
            </div>
            <div className="space-y-2 text-xs font-sans-ui text-white/80">
              <a
                href="https://lead-funnel-sa.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#25B889] transition-colors"
              >
                <span>Live CRM Lead Board</span> <ArrowUpRight size={12} />
              </a>
              <a
                href="https://wa.me/919667173693"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#25B889] text-[#25D366] font-semibold transition-colors"
              >
                <span>WhatsApp: +91 9667173693</span> <ArrowUpRight size={12} />
              </a>
              <div className="text-[11px] text-white/40 pt-2 font-mono">
                Active Client Roster: 2026 · Verified .in Agency
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui text-white/50">
          <div>
            © 2026 Supreme Ads. All rights reserved. Designed for humans.
          </div>

          <div className="flex items-center gap-6">
            <span>Delhi / India</span>
            <button
              onClick={scrollToTop}
              className="text-white hover:text-[#3155FF] transition-colors font-display font-bold uppercase tracking-wider text-[11px]"
            >
              Back To Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
