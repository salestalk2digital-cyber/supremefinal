import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Layers, ShoppingBag, Eye, HeartHandshake, MessageSquare } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const BrandBuildingPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const JOURNEY = [
    { step: '01', state: 'UNKNOWN BRAND', desc: 'No one in the market has heard your name yet. Zero organic search or trust.' },
    { step: '02', state: 'SEEN THE BRAND', desc: 'First touchpoint via high-impact cinema creative hooks & targeted Meta feeds.' },
    { step: '03', state: 'RECOGNISES THE BRAND', desc: 'Repeated visual aesthetic, editorial colors, luxury unboxing & typography.' },
    { step: '04', state: 'UNDERSTANDS THE OFFER', desc: 'Crystal-clear proposition: why your product is different and worth the premium.' },
    { step: '05', state: 'TRUSTS THE BRAND', desc: 'Sensory packaging, founder story, social proof, and verified client unboxings.' },
    { step: '06', state: 'SHOWS ACTIVE INTEREST', desc: 'Enters the website, adds to cart, shares with friends, or asks questions.' },
    { step: '07', state: 'BECOMES A CUSTOMER', desc: 'Pays full price happily without asking for cheap discounts or coupons.' }
  ];

  const PILLARS = [
    { title: 'Brand Visibility', desc: 'Dominating your core customer category so you are top-of-mind when buying intent strikes.' },
    { title: 'Consistent Messaging', desc: 'One powerful, recognizable voice across ads, landing pages, packaging and customer support.' },
    { title: 'Creative Identity', desc: 'Distinct typography, cinema lighting, and editorial photography that looks like high fashion.' },
    { title: 'Audience Building', desc: 'Cult followers who wait for your product drops, seasonal editions and festive gifting lines.' },
    { title: 'Engagement & Community', desc: 'Real conversations and cultural relevance that spark genuine organic word-of-mouth.' },
    { title: 'Social Proof', desc: 'High-status client testimonials, video unboxings, and verified buyer reviews prominently displayed.' },
    { title: 'Remarketing Layers', desc: 'Subtle multi-touch nurture sequences that build desire and authority over 30 to 60 days.' },
    { title: 'Content Strategy', desc: 'Editorial reels and founder POV videos that communicate the authentic craft behind each piece.' },
    { title: 'Website Experience', desc: 'A custom digital flagship that commands luxury status, loading in sub-second speed.' },
    { title: 'Brand Recall', desc: 'Customers remember your name when gifting or recommending to family and business partners.' }
  ];

  return (
    <div className="space-y-0 paper-grain">
      {/* Editorial Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F47A38]/15 text-[#D96323] rounded-[2px] text-xs font-display font-extrabold uppercase tracking-widest mb-4">
            Brand Positioning & Creative Identity
          </div>

          <h1 className="text-4xl md:text-7xl font-display font-extrabold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
            HAVE A PRODUCT.
            <br />
            CONFUSED HOW TO
            <br />
            <span className="font-editorial italic font-normal text-[#F47A38]">BUILD A BRAND?</span>
          </h1>

          <p className="mt-6 text-base md:text-2xl font-sans-ui font-semibold text-[#191919] max-w-3xl leading-relaxed">
            Many businesses have exceptional products, but get trapped in brutal discount wars because customers view them as commodities. Supreme Ads transforms products into desirable, iconic brands that command premium pricing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('contact', 'Brand Building Strategy')}
              className="px-7 py-4 bg-[#F47A38] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-[3px] hover:bg-[#D96323] transition-colors shadow-sm"
            >
              Start Brand Building Project
            </button>
            <button
              onClick={() => navigateTo('work')}
              className="px-7 py-4 bg-white border border-[#E9E3D8] text-[#191919] text-xs font-display font-extrabold uppercase tracking-wider rounded-[3px] hover:bg-[#F7F3EA] transition-colors"
            >
              Explore Sugar Mellow Case Study
            </button>
          </div>
        </div>
      </section>

      {/* The 7-Stage Customer Ascension Journey (Matches User Screenshot - Upgraded Bold & Distinctive) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <span className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#F47A38]">
              The Core Customer Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#191919] uppercase mt-2 tracking-tight">
              HOW AN UNKNOWN PRODUCT BECOMES A DESIRED BRAND
            </h2>
            <p className="text-sm md:text-base font-sans-ui font-bold text-[#191919]/90 mt-2 max-w-2xl">
              We guide your prospective customers through this sequential psychological evolution:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {JOURNEY.map((j) => (
              <div 
                key={j.step} 
                className="p-5 bg-[#FFF9F0] border-2 border-[#E9E3D8] hover:border-[#F47A38] rounded-[4px] flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px] group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-mono font-extrabold text-[#F47A38]">{j.step}</span>
                    <span className="w-2 h-2 rounded-full bg-[#F47A38] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="font-display font-extrabold text-sm uppercase text-[#191919] mt-3 leading-snug tracking-tight group-hover:text-[#F47A38] transition-colors">
                    {j.state}
                  </div>
                </div>
                <div className="text-xs text-[#191919] font-sans-ui font-bold mt-4 leading-relaxed border-t border-[#E9E3D8] pt-3">
                  {j.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 10 Brand Building Pillars (Upgraded Bold & Distinctive) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14">
            <span className="text-xs font-display font-extrabold uppercase tracking-widest text-[#191919]/70">
              Comprehensive Strategic Scope
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#191919] uppercase mt-2 tracking-tight">
              THE 10 PILLARS OF SUPREME BRAND BUILDING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PILLARS.map((p, idx) => (
              <div key={p.title} className="p-6 bg-white border border-[#E9E3D8] hover:border-[#191919] rounded-[4px] flex flex-col justify-between shadow-xs transition-all">
                <div>
                  <div className="text-xs font-mono font-extrabold text-[#F47A38]">0{idx + 1}</div>
                  <h3 className="font-display font-extrabold text-base uppercase text-[#191919] mt-2 tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs font-sans-ui font-semibold text-[#191919] mt-3 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short-Term Performance vs Long-Term Brand Equity */}
      <section className="py-20 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-display font-extrabold uppercase tracking-widest text-[#F47A38]">
              The Supreme Ads Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#191919] uppercase tracking-tight leading-tight">
              Short-Term Performance + Long-Term Equity
            </h2>
            <p className="text-base font-sans-ui font-semibold text-[#191919] leading-relaxed">
              Most direct-response agencies only run cheap discount ads that destroy your brand reputation over time. Most branding agencies only make pretty moodboards that generate zero sales.
            </p>
            <p className="text-base font-sans-ui font-semibold text-[#191919] leading-relaxed">
              At Supreme Ads, our ads generate immediate paying customers today, while every single creative asset builds long-term brand equity, loyalty, and organic word-of-mouth for tomorrow.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#191919] text-[#FFF9F0] p-8 md:p-10 rounded-[4px] space-y-4 shadow-xl border border-white/10">
            <div className="text-xs font-display font-extrabold uppercase tracking-widest text-[#C8FF38]">
              Client Case Highlight
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold uppercase text-white">
              Sugar Mellow Confectionery
            </h3>
            <p className="text-sm font-sans-ui font-medium text-white/90 leading-relaxed">
              How artisanal gourmet sweets moved from local kitchen batches to national pan-India festive gifting orders through sensory product photography, minimalist luxury packaging, and repeat buyer funnels.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('work')}
                className="text-xs font-display font-extrabold uppercase text-[#FFC4A8] hover:underline flex items-center gap-1.5"
              >
                Read Case Study Details →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#191919] text-[#FFF9F0]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-display font-extrabold uppercase tracking-widest text-[#C8FF38]">
              Ready to Escape Commodity Price Wars?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase mt-1 tracking-tight">
              Let's Build An Iconic Brand.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I%20want%20to%20consult%20on%20brand%20building%20and%20positioning."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-display font-extrabold uppercase tracking-widest rounded-[3px] transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageSquare size={16} />
              <span>WhatsApp: 9667173693</span>
            </a>

            <button
              onClick={() => navigateTo('contact', 'Brand Building & Positioning Consultation')}
              className="px-8 py-4 bg-[#F47A38] text-white text-xs font-display font-extrabold tracking-widest uppercase rounded-[3px] hover:bg-[#D96323] transition-colors"
            >
              Book Brand Strategy Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
