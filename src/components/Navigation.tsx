import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useNavigation, PageRoute } from '../context/NavigationContext';

export const Navigation: React.FC = () => {
  const { currentPage, navigateTo } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    navigateTo(page);
  };

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'crm', label: 'CRM System' },
    { id: 'diagnostic', label: 'Growth Diagnostic' },
    { id: 'philosophy', label: 'Philosophy' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F7F3EA]/95 backdrop-blur-md border-b border-[#E9E3D8] transition-colors">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
          
          {/* Zone 1: Single Text Element Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl md:text-2xl font-display font-bold tracking-tight text-[#191919] hover:opacity-85 transition-opacity text-left"
            data-cursor="HOME"
          >
            SUPREME ADS
          </button>

          {/* Zone 2: Multi-Page Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-display font-semibold uppercase tracking-wider text-[#191919]/75">
            {navItems.map((item) => {
              const isServicesSubroute = item.id === 'services' && [
                'services', 
                'meta-ads', 
                'brand-building', 
                'website-dev', 
                'social-media', 
                'custom-tools'
              ].includes(currentPage);
              const isActive = currentPage === item.id || isServicesSubroute;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-[#3155FF] font-bold' : 'hover:text-[#3155FF]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3155FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#166534] border border-[#25D366]/30 rounded-[3px] text-xs font-display font-bold uppercase transition-colors"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>WhatsApp: 9667173693</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-display font-bold tracking-wider uppercase rounded-[3px] transition-colors whitespace-nowrap shadow-xs ${
                currentPage === 'contact'
                  ? 'bg-[#3155FF] text-white'
                  : 'bg-[#191919] text-white hover:bg-[#3155FF]'
              }`}
              data-cursor="START"
            >
              Start a Project
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#191919] hover:bg-[#E9E3D8]/50 rounded-[4px] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-18 z-40 bg-[#F7F3EA] px-6 py-8 flex flex-col justify-between md:hidden border-t border-[#E9E3D8]">
          <div className="flex flex-col gap-5">
            <div className="text-[12px] font-display font-bold tracking-widest text-[#191919]/50 uppercase">
              Supreme Ads Navigation / 2026
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-2xl font-display font-bold uppercase transition-colors ${
                  currentPage === item.id ? 'text-[#3155FF]' : 'text-[#191919] hover:text-[#3155FF]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left text-2xl font-display font-bold uppercase transition-colors ${
                currentPage === 'contact' ? 'text-[#3155FF]' : 'text-[#191919] hover:text-[#3155FF]'
              }`}
            >
              Contact & Brief
            </button>
          </div>

          <div className="pt-6 border-t border-[#E9E3D8] flex flex-col gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 text-center text-xs font-display font-extrabold uppercase text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-[3px] shadow-sm flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Chat on WhatsApp: 9667173693</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 text-center text-xs font-display font-bold tracking-widest uppercase text-white bg-[#191919] rounded-[3px] shadow-sm flex items-center justify-center gap-2"
            >
              Start a Project <ArrowUpRight size={16} />
            </button>
            <div className="text-xs text-[#191919]/60 font-sans-ui flex justify-between items-center pt-2">
              <span>Delhi / India · +91 9667173693</span>
              <span className="font-editorial italic text-sm text-[#3155FF]">supremeadvertisment.in</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
