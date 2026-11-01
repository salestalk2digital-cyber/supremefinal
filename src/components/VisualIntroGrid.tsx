import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface VisualIntroGridProps {
  onSelectProject: (projectId: string) => void;
}

export const VisualIntroGrid: React.FC<VisualIntroGridProps> = ({ onSelectProject }) => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E9E3D8]">
          <div>
            <div className="text-[12px] font-display font-bold tracking-widest text-[#3155FF] uppercase mb-2">
              Visual Architecture / 02
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#191919] tracking-tight leading-tight">
              COMMERCIAL ART <br />
              <span className="font-editorial italic font-normal text-[#F47A38]">ENGINEERED</span> FOR CONVERSION.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md text-sm md:text-base font-sans-ui text-[#191919]/75 leading-relaxed">
            We don't make generic ads that people scroll past. We construct campaign creatives, brand identities, and high-velocity digital systems that stop attention and convert intent into revenue.
          </div>
        </div>

        {/* Composition 1: "WE MAKE PEOPLE STOP." Crossing Imagery */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Large Image with Label */}
            <div
              onClick={() => onSelectProject('the-vybe-setters')}
              className="lg:col-span-7 group relative cursor-pointer overflow-hidden rounded-[2px] bg-[#E9E3D8] border border-[#191919]/10 shadow-sm"
              data-cursor="VIEW"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/src/assets/images/vybe_setters_event_1791025890283.jpg"
                  alt="The Vybe Setters Live Performance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-supreme"
                />
              </div>

              {/* Editorial Labels Overlay */}
              <div className="absolute top-4 left-4 bg-[#191919]/90 text-white text-[11px] font-display font-bold tracking-widest px-3 py-1 uppercase rounded-[2px]">
                CASE 01 · THE VYBE SETTERS
              </div>
              <div className="absolute bottom-4 right-4 bg-[#FFF9F0] text-[#191919] text-[11px] font-sans-ui font-medium px-3 py-1 rounded-[2px] border border-[#E9E3D8] flex items-center gap-1">
                <span>₹48K Spend · 10+ Bookings</span>
                <ArrowUpRight size={13} />
              </div>
            </div>

            {/* Overlapping Oversized Headline Crossing Over Into the Grid */}
            <div className="lg:col-span-5 lg:-ml-12 z-20 flex flex-col justify-center pointer-events-none">
              <div className="bg-[#FFF9F0]/95 backdrop-blur-sm p-6 lg:p-10 border border-[#E9E3D8] shadow-lg rounded-[2px]">
                <div className="text-[11px] font-display font-bold tracking-widest text-[#3155FF] uppercase mb-2">
                  System 01 · Creative Tension
                </div>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.88] uppercase">
                  WE MAKE
                  <br />
                  <span className="text-[#3155FF]">PEOPLE</span>
                  <br />
                  <span className="font-editorial italic font-normal text-[#F47A38]">STOP.</span>
                </h3>
                <p className="mt-4 text-xs md:text-sm text-[#191919]/80 font-sans-ui leading-relaxed">
                  Attention on Instagram and Meta feeds is measured in milliseconds. If your opening hook doesn’t provoke genuine curiosity within 1.8 seconds, you are donating your ad spend to Meta.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Composition 2: "FROM CLICK TO CUSTOMER" Asymmetric Multi-Grid */}
        <div className="pt-8">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/60">
              Selected Disciplines · Editorial Curation
            </span>
            <span className="text-xs font-sans-ui text-[#191919]/50">Delhi / NCR & National</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: Luxury Destination Weddings (Portrait Aspect) */}
            <div
              onClick={() => onSelectProject('dream-weddings-by-tripn')}
              className="md:col-span-4 group relative cursor-pointer rounded-[2px] bg-[#E9E3D8] border border-[#191919]/10 overflow-hidden flex flex-col justify-between"
              data-cursor="VIEW"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/src/assets/images/dream_weddings_luxury_1791025903181.jpg"
                  alt="Dream Weddings by Tripn"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-supreme"
                />
              </div>
              <div className="p-5 bg-white border-t border-[#E9E3D8]">
                <div className="text-[11px] font-display font-bold text-[#F47A38] uppercase tracking-wider">
                  Luxury Weddings & Films
                </div>
                <h4 className="text-lg font-display font-bold text-[#191919] mt-1 group-hover:text-[#F47A38] transition-colors flex items-center justify-between">
                  DREAM WEDDINGS BY TRIPN
                  <ArrowUpRight size={16} />
                </h4>
                <p className="text-xs text-[#191919]/70 mt-2 font-sans-ui">
                  HNW bride acquisition funnel and royal destination inquiries.
                </p>
              </div>
            </div>

            {/* Card 2: Center Typographic Statement Card */}
            <div className="md:col-span-4 flex flex-col justify-between p-8 bg-[#3155FF] text-white rounded-[2px] shadow-sm relative overflow-hidden">
              <div className="text-[11px] font-display font-bold uppercase tracking-widest opacity-80">
                Core Methodology / 03
              </div>

              <div className="my-auto py-8">
                <h3 className="text-4xl md:text-5xl font-display font-bold leading-[0.9] tracking-tight uppercase">
                  FROM
                  <br />
                  <span className="font-editorial italic font-normal text-[#FFC4A8]">CLICK</span>
                  <br />
                  TO
                  <br />
                  CUSTOMER.
                </h3>
                <p className="mt-4 text-xs md:text-sm text-white/85 font-sans-ui leading-relaxed">
                  Ads alone do not close sales. The magic happens when targeted copy, frictionless landing experience, and rapid CRM follow-up work as one seamless machine.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-display tracking-wider uppercase">
                <span>Supreme Funnel Architecture</span>
                <span>Delhi / India</span>
              </div>
            </div>

            {/* Card 3: Artisanal D2C Packaging (Sugar Mellow) */}
            <div
              onClick={() => onSelectProject('sugar-mellow')}
              className="md:col-span-4 group relative cursor-pointer rounded-[2px] bg-[#E9E3D8] border border-[#191919]/10 overflow-hidden flex flex-col justify-between"
              data-cursor="VIEW"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/src/assets/images/sugar_mellow_confectionery_1791025915081.jpg"
                  alt="Sugar Mellow Confectionery"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-supreme"
                />
              </div>
              <div className="p-5 bg-white border-t border-[#E9E3D8]">
                <div className="text-[11px] font-display font-bold text-[#3155FF] uppercase tracking-wider">
                  D2C Gourmet Brand
                </div>
                <h4 className="text-lg font-display font-bold text-[#191919] mt-1 group-hover:text-[#3155FF] transition-colors flex items-center justify-between">
                  SUGAR MELLOW
                  <ArrowUpRight size={16} />
                </h4>
                <p className="text-xs text-[#191919]/70 mt-2 font-sans-ui">
                  Artisanal boutique confectionery scaling festive gifting orders.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
