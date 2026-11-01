import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PhilosophySectionProps {
  onStartProject: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onStartProject }) => {
  const PILLARS = [
    { num: '01', title: 'BUSINESS', desc: 'Margin structure, capacity, and real lifetime customer value.' },
    { num: '02', title: 'CUSTOMER', desc: 'Understanding their genuine pain, status desire, and fear.' },
    { num: '03', title: 'OFFER', desc: 'A proposition so compelling it feels foolish to say no.' },
    { num: '04', title: 'CREATIVE', desc: 'Visual hooks and storytelling that make people stop scrolling.' },
    { num: '05', title: 'FUNNEL', desc: 'Zero friction from the first click to the calendar or cart.' },
    { num: '06', title: 'FOLLOW-UP', desc: 'The discipline to contact every inquiry within 15 minutes.' },
    { num: '07', title: 'SALE', desc: 'A commercial closing process that turns interest into cash.' }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-36 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Massive Editorial Typographic Declaration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <div className="text-[12px] font-display font-bold tracking-widest text-[#F05A5A] uppercase mb-4">
              The Supreme Creed / 08
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#191919] tracking-[-0.05em] leading-[0.88] uppercase">
              ADS AREN'T
              <br />
              <span className="font-editorial italic font-normal text-[#3155FF]">THE</span>
              <br />
              BUSINESS.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-14">
            <p className="text-base md:text-lg font-sans-ui text-[#191919]/80 leading-relaxed">
              If your product has no market fit, ads will only help you go broke faster.
              <br /><br />
              Advertising is not magic dust. It is an <strong>amplifier</strong>. When your unit economics, creative hook, landing experience, and CRM follow-up are aligned, advertising becomes an undeniable money printer.
            </p>
            <div className="pt-6">
              <button
                onClick={onStartProject}
                className="px-6 py-3 bg-[#191919] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] hover:bg-[#3155FF] transition-colors"
              >
                Build A Complete Growth Engine
              </button>
            </div>
          </div>
        </div>

        {/* The 7 Fundamental Pillars: Visual Typographic Flow (No generic cards) */}
        <div className="border-t border-[#E9E3D8] pt-12">
          <div className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/50 mb-8">
            The Alignment Chain: Every Link Must Hold
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="flex flex-col justify-between pb-6 border-b lg:border-b-0 lg:border-r border-[#E9E3D8] last:border-none pr-4">
                <div>
                  <span className="text-xs font-display font-bold text-[#3155FF]">
                    {p.num}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-[#191919] uppercase mt-2 tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs font-sans-ui text-[#191919]/70 mt-4 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
