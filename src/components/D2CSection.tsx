import React from 'react';
import { ArrowRight, ShoppingBag, Sparkles, Repeat, Layers } from 'lucide-react';

interface D2CSectionProps {
  onStartProject: () => void;
  onExploreSugarMellow: () => void;
}

export const D2CSection: React.FC<D2CSectionProps> = ({ onStartProject, onExploreSugarMellow }) => {
  const JOURNEY = [
    { step: '01', title: 'PRODUCT', desc: 'Formulation, packaging & unit economics' },
    { step: '02', title: 'POSITIONING', desc: 'Finding the unfair distinct advantage' },
    { step: '03', title: 'BRAND', desc: 'Editorial typography & visual identity' },
    { step: '04', title: 'WEBSITE', desc: 'High-speed frictionless checkout' },
    { step: '05', title: 'CONTENT', desc: 'Tactile product unboxing & reels' },
    { step: '06', title: 'META ADS', desc: 'Broad and interest prospecting campaigns' },
    { step: '07', title: 'RETARGETING', desc: 'Dynamic product ads & abandoned cart' },
    { step: '08', title: 'SALE', desc: 'First purchase acquisition' },
    { step: '09', title: 'REPEAT CUSTOMER', desc: 'Post-purchase email & WhatsApp nurture' }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F47A38]/10 text-[#F47A38] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Discipline / 02 · Direct To Consumer (D2C)
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
              HAVE A PRODUCT.
              <br />
              <span className="text-[#F47A38]">NEED PEOPLE</span>
              <br />
              <span className="font-editorial italic font-normal text-[#F05A5A]">TO KNOW</span> IT?
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              Building a physical or direct-to-consumer brand isn't about running one ad and hoping people swipe up. It requires a complete ecosystem from sensory product photography to razor-sharp post-click conversion and repeat buyer mechanics.
            </p>

            <div className="mt-6 pt-4 border-t border-[#E9E3D8]">
              <button
                onClick={onStartProject}
                className="px-5 py-2.5 bg-[#F47A38] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] hover:bg-[#D96323] transition-colors"
              >
                Launch My Product System
              </button>
            </div>
          </div>
        </div>

        {/* Visual Product Showcase & Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-white border border-[#E9E3D8] rounded-[3px] overflow-hidden p-6 md:p-10 shadow-xs">
          
          {/* Editorial Product Image */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-[2px] bg-[#E9E3D8]">
            <img
              src="/src/assets/images/sugar_mellow_confectionery_1791025915081.jpg"
              alt="Sugar Mellow Confectionery Products"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover hover:scale-102 transition-transform duration-700 ease-supreme"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-[2px] text-xs font-display font-bold text-[#191919] uppercase border border-[#E9E3D8]">
              Client Highlight: Sugar Mellow
            </div>
          </div>

          {/* D2C Principles */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[11px] font-display font-bold text-[#F47A38] uppercase tracking-widest mb-1">
                Artisanal Confectionery & Gifting
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#191919] uppercase">
                From Local Kitchen to National Pan-India Orders
              </h3>
              <p className="mt-3 text-xs md:text-sm text-[#191919]/75 font-sans-ui leading-relaxed">
                When scaling boutique products like Sugar Mellow, customers buy first with their eyes. We established high-fashion food styling, minimalist luxury packaging presentation, and tailored festive gifting funnels that convert premium sweet lovers into repeat seasonal buyers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E9E3D8]">
              <div className="p-3 bg-[#FFC4A8]/20 border border-[#FFC4A8]/60 rounded-[2px]">
                <div className="text-xs font-display font-bold text-[#191919] uppercase">High AOV Gifting Bundles</div>
                <div className="text-[11px] text-[#191919]/70 mt-1 font-sans-ui">Custom gift boxes engineered for corporate & Diwali orders</div>
              </div>
              <div className="p-3 bg-[#FFC4A8]/20 border border-[#FFC4A8]/60 rounded-[2px]">
                <div className="text-xs font-display font-bold text-[#191919] uppercase">Frictionless Checkout</div>
                <div className="text-[11px] text-[#191919]/70 mt-1 font-sans-ui">Direct UPI / One-click payment integration</div>
              </div>
            </div>

            <button
              onClick={onExploreSugarMellow}
              className="text-xs font-display font-bold uppercase tracking-wider text-[#F47A38] hover:text-[#191919] flex items-center gap-1.5 transition-colors self-start"
            >
              Explore Sugar Mellow Case Details <ArrowRight size={14} />
            </button>
          </div>

        </div>

        {/* The 9-Stage D2C Journey */}
        <div className="mt-8">
          <div className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/60 mb-6">
            The Complete D2C Brand Journey:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {JOURNEY.map((item, index) => (
              <div
                key={item.title}
                className="p-3.5 bg-white border border-[#E9E3D8] rounded-[2px] flex flex-col justify-between hover:border-[#F47A38] transition-colors"
              >
                <div>
                  <div className="text-[11px] font-display font-bold text-[#F47A38]">
                    {item.step}
                  </div>
                  <div className="text-xs font-display font-bold text-[#191919] mt-1 uppercase">
                    {item.title}
                  </div>
                </div>
                <div className="text-[11px] text-[#191919]/60 font-sans-ui mt-2 leading-tight">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
