import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Layers, 
  Laptop, 
  ShoppingCart, 
  Video, 
  TrendingUp, 
  MessageSquare, 
  PhoneCall, 
  ChevronRight, 
  ChevronLeft,
  Sliders,
  Play,
  RotateCcw,
  ShieldCheck,
  Target,
  Eye,
  Film
} from 'lucide-react';
import { useNavigation, PageRoute } from '../context/NavigationContext';

// Continuous Moving Video/Reel Background Component for Every Requirement Card
interface MovingBackgroundProps {
  images: string[];
  accent: string;
  badge: string;
}

const ContinuousMovingBackground: React.FC<MovingBackgroundProps> = ({ images, accent, badge }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
      {/* Continuous Motion Sliding Reel Track (Visibly moving in real-time) */}
      <motion.div
        className="absolute inset-0 flex w-[250%] h-full"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 22,
        }}
      >
        {images.concat(images).concat(images).map((imgSrc, i) => (
          <div key={i} className="relative w-1/3 h-full shrink-0 overflow-hidden">
            <img
              src={imgSrc}
              alt="Live moving service visual"
              className="w-full h-full object-cover object-center filter saturate-125 brightness-95 scale-105"
            />
          </div>
        ))}
      </motion.div>

      {/* Cinematic Scrim Gradient (Ensures bold text readability while keeping moving visual vibrant) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/82 to-[#0e0e0e]/45" />

      {/* Top Accent Radial Glow */}
      <div
        className="absolute top-0 right-0 w-72 h-72 blur-3xl opacity-35 pointer-events-none"
        style={{ backgroundColor: accent }}
      />

      {/* Visible Active Moving Reel Badge */}
      <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-black/80 border border-white/20 text-[10px] font-mono font-bold text-white shadow-md">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="tracking-widest uppercase">{badge}</span>
      </div>

      {/* Moving Reel Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-10 overflow-hidden">
        <motion.div
          className="h-full"
          style={{ backgroundColor: accent }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 4 }}
        />
      </div>
    </div>
  );
};

export const ServiceRequirementGrid: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [carouselView, setCarouselView] = useState<'grid' | 'carousel'>('grid');

  // Simulated live events for Meta Ads Card
  const [adStage, setAdStage] = useState<'creative' | 'lead' | 'whatsapp' | 'sale'>('creative');
  useEffect(() => {
    const timer = setInterval(() => {
      setAdStage((prev) => {
        if (prev === 'creative') return 'lead';
        if (prev === 'lead') return 'whatsapp';
        if (prev === 'whatsapp') return 'sale';
        return 'creative';
      });
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Website Development interactive theme & cart state
  const [webTheme, setWebTheme] = useState<'luxury' | 'ecommerce' | 'editorial'>('luxury');
  const [cartAdded, setCartAdded] = useState(false);
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  };

  // Brand Building Journey interactive step
  const [brandStep, setBrandStep] = useState<number>(2);

  // Custom Tools ROI Calculator state
  const [monthlySpend, setMonthlySpend] = useState<number>(80000);

  // The 6 Requirements with dedicated moving visual reel assets
  const REQUIREMENTS = [
    {
      id: 'meta_ads',
      tag: '01. PERFORMANCE MARKETING',
      title: 'META ADS',
      subtitle: 'Turn Digital Attention Into Pre-Qualified Customers',
      tagline: 'Not just running ads. Building an intentional customer acquisition system.',
      route: 'meta-ads' as PageRoute,
      accent: '#3155FF',
      accentBg: 'bg-[#3155FF]/25 text-[#60A5FA]',
      backgroundImages: [
        '/src/assets/images/meta_ads_performance_dashboard_1791173397668.jpg',
        '/src/assets/images/vybe_setters_event_1791025890283.jpg'
      ],
      mediaBadge: 'LIVE AD REEL',
      description: 'We plan the complete advertising system: Audience Strategy, Campaign Strategy, Creative Strategy, Testing, and Optimisation. We filter out tire-kickers so your team only talks to funded buyers.',
      liveBadge: 'LIVE CONVERSION SIMULATOR',
      highlights: [
        'Audience Strategy (Intent, Demographics, LTV)',
        'Dynamic Hook & Angle Creative Testing',
        'Lead Pre-Qualification Forms (No Junk Leads)',
        'Zero-Lag WhatsApp & Phone Alert'
      ],
      verifiedProof: 'The Vybe Setters: ₹48K ad spend → 10+ bookings at ₹40K+ minimum ticket (~₹100 CPL)'
    },
    {
      id: 'website_dev',
      tag: '02. CONVERSION WEB SYSTEMS',
      title: 'WEBSITE DEVELOPMENT',
      subtitle: 'Fast, Modern & Conversion-Focused Web Platforms',
      tagline: '“What should the visitor do after landing on this website?”',
      route: 'website-dev' as PageRoute,
      accent: '#7856FF',
      accentBg: 'bg-[#7856FF]/25 text-[#A78BFA]',
      backgroundImages: [
        '/src/assets/images/dream_weddings_luxury_1791025903181.jpg',
        '/src/assets/images/custom_software_tools_dashboard_1791173441569.jpg'
      ],
      mediaBadge: 'SPEED & UI REEL',
      description: 'Websites planned around the customer journey: First Impression → Interest → Information → Trust → Action. Bespoke React & Next.js architectures built specifically to convert Meta Ad traffic.',
      liveBadge: 'THEME & 1-CLICK CHECKOUT',
      highlights: [
        'Under 0.8s Sub-Second Core Web Vitals',
        'Bespoke Visual Design (Zero Bloated Templates)',
        'Built for Advertising (Seamless Landing Page to Ad Match)',
        'SEO + AEO Structured Data Foundation'
      ],
      verifiedProof: 'High-speed custom e-commerce and lead funnels with built-in CAPI and GA4'
    },
    {
      id: 'brand_building',
      tag: '03. BRAND POSITIONING',
      title: 'BRAND BUILDING',
      subtitle: 'Turn A Great Product Into A Trusted, High-Ticket Brand',
      tagline: 'For founders who have a great product, but are confused how to build an iconic brand.',
      route: 'brand-building' as PageRoute,
      accent: '#F47A38',
      accentBg: 'bg-[#F47A38]/25 text-[#FB923C]',
      backgroundImages: [
        '/src/assets/images/sugar_mellow_confectionery_1791025915081.jpg',
        '/src/assets/images/editorial_creative_direction_1791025926464.jpg'
      ],
      mediaBadge: 'LUXURY ART REEL',
      description: 'Moving a customer from Unknown → Seen → Recognises → Understands Offer → Trusts → Customer. We engineer sensory product styling, luxury packaging presentation, and brand recall so you escape price wars.',
      liveBadge: 'THE BRAND ASCENSION JOURNEY',
      highlights: [
        'Luxury Product Styling & Art Direction',
        'High-AOV Gifting & Repeat Purchase Architecture',
        'Consistent Editorial Narrative Across Every Touchpoint',
        'Escape Discounting: Command Premium Price Authority'
      ],
      verifiedProof: 'Sugar Mellow: Artisanal gourmet confectionery scaling festive gifting orders'
    },
    {
      id: 'crm',
      tag: '04. SALES OPERATING SYSTEM',
      title: 'SALES CRM & LEAD FUNNEL',
      subtitle: 'Zero Missed Leads. 1-Click WhatsApp & Call Handoff',
      tagline: 'Contacting incoming leads within 15 minutes multiplies close rates by 391%.',
      route: 'crm' as PageRoute,
      accent: '#25B889',
      accentBg: 'bg-[#25B889]/25 text-[#34D399]',
      backgroundImages: [
        '/src/assets/images/crm_sales_pipeline_board_1791173411832.jpg',
        '/src/assets/images/meta_ads_performance_dashboard_1791173397668.jpg'
      ],
      mediaBadge: 'LIVE CRM REEL',
      description: 'A custom sales lead board that captures leads from Meta instantly via webhook, scores them as Hot/Warm/Cold, and provides daily follow-up queues so zero inquiries go cold.',
      liveBadge: 'LIVE LEAD BOARD SIMULATION',
      highlights: [
        'Instant Meta Form Webhook (< 15 Second Phone Alert)',
        'Quality Scoring (Hot / Warm / Cold Badges)',
        'Daily Task Queue for Sales Rep Accountability',
        'Direct 1-Touch WhatsApp & Call Dispatch'
      ],
      verifiedProof: 'Live system reference: lead-funnel-sa.vercel.app with multi-rep lead boards'
    },
    {
      id: 'social_media',
      tag: '05. CREATIVE STUDIO RETAINER',
      title: 'SOCIAL MEDIA MANAGEMENT',
      subtitle: '18–20 Posts / Mo + 2 Video Shoots Included',
      tagline: 'Cinema cameras, director styling, and high-retention viral reel edits in Delhi NCR.',
      route: 'social-media' as PageRoute,
      accent: '#C8FF38',
      accentBg: 'bg-[#C8FF38]/25 text-[#C8FF38]',
      backgroundImages: [
        '/src/assets/images/cinema_video_shoot_studio_1791173426121.jpg',
        '/src/assets/images/editorial_creative_direction_1791025926464.jpg'
      ],
      mediaBadge: '4K CINEMA REEL',
      description: 'We replace boring Canva templates with on-location cinema shoots, authentic founder POV reels, and high-fashion editorial lookbook carousels that turn casual scrollers into cult customers.',
      liveBadge: 'PRODUCT SHOOT TO INSTAGRAM REEL',
      highlights: [
        '18–20 Curated Posts & Viral Reels per Month',
        '2 On-Location Video Shoots in Delhi NCR Included',
        'Cinema 4K Quality, Lighting & Trend Audio Curation',
        'Transparent Add-on: Extra Shoot for ₹3,500'
      ],
      verifiedProof: 'The Vibgyor & Spiritual Melodies: Cult organic engagement and high-status brand positioning'
    },
    {
      id: 'custom_tools',
      tag: '06. BESPOKE BRAND SOFTWARE',
      title: 'CUSTOM SUPPORTING TOOLS',
      subtitle: 'Bespoke Portals, Calculators & Automated Workflows',
      tagline: 'Software engineered for your exact operational bottlenecks, not one-size-fits-all SaaS.',
      route: 'custom-tools' as PageRoute,
      accent: '#FF5C5C',
      accentBg: 'bg-[#FF5C5C]/25 text-[#F87171]',
      backgroundImages: [
        '/src/assets/images/custom_software_tools_dashboard_1791173441569.jpg',
        '/src/assets/images/crm_sales_pipeline_board_1791173411832.jpg'
      ],
      mediaBadge: 'CODE ENGINE REEL',
      description: 'We develop custom internal client portals, automated ROI calculators, appointment booking engines, and webhook pipelines that eliminate chaotic spreadsheets and manual errors.',
      liveBadge: 'INTERACTIVE ROI & ENGINE CALCULATOR',
      highlights: [
        'Bespoke Client Portals & Dashboards',
        'Custom ROI & Profit Attribution Calculators',
        'Automated Invoicing & WhatsApp Reminders',
        'Full-Stack TypeScript, Next.js, and Secure APIs'
      ],
      verifiedProof: 'Engineered for scaling enterprises, logistics, and luxury service businesses'
    }
  ];

  const currentReq = REQUIREMENTS[activeTab];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % REQUIREMENTS.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + REQUIREMENTS.length) % REQUIREMENTS.length);
  };

  return (
    <div className="relative mt-8">
      {/* Editorial Header Over the Grid */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <div className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#C8FF38] mb-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF38] animate-ping" />
            WHAT IS YOUR BUSINESS LOOKING FOR?
          </div>
          <h2 className="text-2xl md:text-5xl font-display font-extrabold text-[#FFF9F0] uppercase tracking-tight">
            SELECT YOUR CORE REQUIREMENT
          </h2>
          <p className="text-sm font-sans-ui font-semibold text-[#FFF9F0]/80 mt-1 max-w-xl">
            Choose what you need to scale today. Inspect live moving visual reels in each card and click to open its dedicated strategy page.
          </p>
        </div>

        {/* View Toggle & Carousel Navigation */}
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <div className="flex items-center bg-white/5 border border-white/15 rounded-[3px] p-0.5 text-xs font-display font-bold uppercase tracking-wider">
            <button
              onClick={() => setCarouselView('grid')}
              className={`px-3.5 py-1.5 rounded-[2px] transition-colors ${
                carouselView === 'grid' ? 'bg-[#3155FF] text-white font-extrabold' : 'text-white/60 hover:text-white'
              }`}
            >
              Full 6-Grid View
            </button>
            <button
              onClick={() => setCarouselView('carousel')}
              className={`px-3.5 py-1.5 rounded-[2px] transition-colors ${
                carouselView === 'carousel' ? 'bg-[#3155FF] text-white font-extrabold' : 'text-white/60 hover:text-white'
              }`}
            >
              Interactive Focus
            </button>
          </div>

          {carouselView === 'carousel' && (
            <div className="flex items-center gap-1">
              <button
                onClick={prevTab}
                className="p-2 rounded-[2px] bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={nextTab}
                className="p-2 rounded-[2px] bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-colors"
                aria-label="Next service"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* TOP TABS SELECTOR STRIP (Matches the top row in user screenshot) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {REQUIREMENTS.map((req, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={req.id}
              onClick={() => {
                setActiveTab(idx);
                if (carouselView === 'grid') {
                  const el = document.getElementById(`grid-card-${req.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className={`p-3.5 rounded-[3px] border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-white text-[#191919] border-white shadow-xl translate-y-[-2px]'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-[#FFF9F0]'
              }`}
            >
              <div className="text-[11px] font-mono font-extrabold uppercase tracking-wider opacity-60">
                0{idx + 1}
              </div>
              <div className="font-display font-extrabold text-xs md:text-sm uppercase tracking-tight mt-1 leading-snug">
                {req.title}
              </div>
              {isSelected && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1" 
                  style={{ backgroundColor: req.accent }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* VIEW MODE 1: FULL 6-GRID WITH VISIBLY MOVING VIDEO/CAROUSEL REEL IN EVERY CARD */}
      {carouselView === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REQUIREMENTS.map((req, i) => (
            <div
              id={`grid-card-${req.id}`}
              key={req.id}
              onClick={() => navigateTo(req.route)}
              className="relative p-7 text-[#FFF9F0] rounded-[4px] border border-white/20 hover:border-white transition-all shadow-2xl flex flex-col justify-between min-h-[470px] group cursor-pointer overflow-hidden bg-[#101010]"
            >
              {/* Continuous Moving Visual Background Reel Track */}
              <ContinuousMovingBackground 
                images={req.backgroundImages} 
                accent={req.accent}
                badge={req.mediaBadge}
              />

              {/* Foreground Card Content Layer */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between text-xs font-display font-extrabold uppercase tracking-wider pt-2">
                  <span className={`${req.accentBg} px-2.5 py-1 rounded-[2px] backdrop-blur-xs font-bold`}>
                    {req.tag}
                  </span>
                  <span className="font-mono font-bold text-white/70 text-xs">0{i + 1}</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold uppercase text-white tracking-tight group-hover:text-[#C8FF38] transition-colors leading-tight">
                    {req.title}
                  </h3>
                  <p className="text-sm md:text-base font-editorial italic text-[#FFC4A8] mt-1">
                    "{req.subtitle}"
                  </p>
                </div>

                <p className="text-xs md:text-sm font-sans-ui font-medium text-white/90 leading-relaxed">
                  {req.description}
                </p>

                {/* Specific Live HUD Badges per card */}
                {req.id === 'meta_ads' && (
                  <div className="p-2.5 bg-black/60 border border-white/15 rounded-[2px] flex items-center justify-between text-xs font-sans-ui">
                    <span className="text-[#34D399] flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#34D399] animate-ping" />
                      Live Meta Lead Sync
                    </span>
                    <span className="text-white/80 font-mono font-bold">10+ Bookings @ ₹100 CPL</span>
                  </div>
                )}

                {req.id === 'website_dev' && (
                  <div className="p-2.5 bg-black/60 border border-white/15 rounded-[2px] flex items-center justify-between text-xs font-sans-ui">
                    <span className="text-[#A78BFA] font-bold">Mobile Speed: &lt; 0.8s</span>
                    <span className="text-white/80 font-mono font-bold">React 19 / CAPI Sync</span>
                  </div>
                )}

                {req.id === 'brand_building' && (
                  <div className="p-2.5 bg-black/60 border border-white/15 rounded-[2px] flex items-center justify-between text-xs font-sans-ui">
                    <span className="text-[#FB923C] font-bold">Raw Product → Iconic Brand</span>
                    <span className="text-white/80 font-mono font-bold">Escape Price Wars</span>
                  </div>
                )}

                {req.id === 'crm' && (
                  <div className="p-2.5 bg-black/60 border border-white/15 rounded-[2px] flex items-center justify-between text-xs font-sans-ui">
                    <span className="text-[#34D399] font-bold">&lt; 15 Min WhatsApp Handoff</span>
                    <span className="text-white/80 font-mono font-bold">Zero Lost Leads</span>
                  </div>
                )}

                {req.id === 'social_media' && (
                  <div className="p-2.5 bg-black/60 border border-white/15 rounded-[2px] flex items-center justify-between text-xs font-sans-ui">
                    <span className="text-red-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      ● REC 4K Cinema Video
                    </span>
                    <span className="text-white/80 font-mono font-bold">2 Shoots Included</span>
                  </div>
                )}

                {req.id === 'custom_tools' && (
                  <div className="p-2.5 bg-black/60 border border-white/15 rounded-[2px] flex items-center justify-between text-xs font-sans-ui">
                    <span className="text-[#F87171] font-bold">Bespoke Internal Tools</span>
                    <span className="text-white/80 font-mono font-bold">ROI & Client Portals</span>
                  </div>
                )}

                {/* Bullet Highlights */}
                <div className="pt-2 space-y-1.5">
                  {req.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="text-xs font-sans-ui font-semibold text-white/85 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: req.accent }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo(req.route);
                  }}
                  className="text-xs font-display font-extrabold uppercase text-[#C8FF38] hover:underline flex items-center gap-1.5"
                >
                  <span>Open Dedicated Page</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo('contact', `Inquiry regarding ${req.title}`);
                  }}
                  className="px-4 py-1.5 bg-white text-[#191919] hover:bg-[#C8FF38] text-xs font-display font-extrabold uppercase tracking-wider rounded-[2px] transition-colors shadow-xs"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW MODE 2: INTERACTIVE FOCUS CAROUSEL WITH DYNAMIC EXPANDED CONTROLS */}
      {carouselView === 'carousel' && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReq.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#101010] text-[#FFF9F0] rounded-[4px] border border-white/20 p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Continuous Moving Visual Background Reel Track */}
            <ContinuousMovingBackground 
              images={currentReq.backgroundImages} 
              accent={currentReq.accent}
              badge={currentReq.mediaBadge}
            />

            {/* Top Bar of the Interactive Display */}
            <div className="relative z-10 flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/15 gap-4">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 text-xs font-display font-extrabold uppercase tracking-widest rounded-[2px] ${currentReq.accentBg}`}>
                  {currentReq.tag}
                </span>
                <span className="text-xs font-mono font-bold text-white/70 uppercase hidden sm:inline">
                  {currentReq.liveBadge}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigateTo(currentReq.route)}
                  className="px-4 py-2 bg-white text-[#191919] text-xs font-display font-extrabold uppercase tracking-wider rounded-[3px] hover:bg-[#C8FF38] transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Open Dedicated {currentReq.title} Page</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>

            {/* Split Grid: Left Details & Right Functional Simulation */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Strategic Explanation & Value */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight leading-[0.94]">
                    {currentReq.title}
                  </h3>
                  <p className="text-base md:text-xl font-editorial italic text-[#FFC4A8] mt-2">
                    "{currentReq.subtitle}"
                  </p>
                </div>

                <p className="text-sm md:text-base font-sans-ui font-medium text-white/90 leading-relaxed">
                  {currentReq.description}
                </p>

                {/* Concrete Deliverable Pillars */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-display font-extrabold uppercase tracking-wider text-white/70">
                    Supreme Ads Architecture:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentReq.highlights.map((h, i) => (
                      <div key={i} className="p-3 bg-white/10 border border-white/20 rounded-[2px] text-xs font-sans-ui font-bold text-white flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#34D399] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Proof Quote */}
                <div className="p-3.5 bg-white/10 border border-[#25B889]/40 rounded-[2px] text-xs font-sans-ui font-semibold text-white flex items-center gap-2">
                  <ShieldCheck size={17} className="text-[#34D399] shrink-0" />
                  <span><strong>Verified Impact:</strong> {currentReq.verifiedProof}</span>
                </div>

                {/* Action Row */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => navigateTo(currentReq.route)}
                    className="px-6 py-3 bg-[#3155FF] text-white text-xs font-display font-extrabold tracking-wider uppercase rounded-[3px] hover:bg-[#2040E0] transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <span>Read How Supreme Ads Works</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    onClick={() => navigateTo('contact', `Inquiry for ${currentReq.title}`)}
                    className="px-5 py-3 bg-white/10 border border-white/25 text-white hover:bg-white hover:text-[#191919] text-xs font-display font-extrabold tracking-wider uppercase rounded-[3px] transition-colors"
                  >
                    Enquire For {currentReq.title}
                  </button>
                </div>
              </div>

              {/* Right Column: DYNAMIC LIVE SIMULATION OVER MOVING BACKGROUND */}
              <div className="lg:col-span-6 bg-black/75 backdrop-blur-md text-[#FFF9F0] rounded-[4px] p-6 md:p-8 border border-white/20 shadow-inner relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                
                {/* 1. META ADS LIVE SIMULATION */}
                {currentReq.id === 'meta_ads' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <Target size={16} className="text-[#3155FF]" />
                        <span className="font-display font-extrabold uppercase tracking-wider text-white">
                          Live Inbound Lead → Sale Converter
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#C8FF38]">SYNCING META ADS API</span>
                    </div>

                    <div className="space-y-3">
                      <div className={`p-3 rounded-[2px] border transition-all ${
                        adStage === 'creative' ? 'bg-white/20 border-[#3155FF] shadow-sm' : 'bg-white/5 border-white/10 opacity-70'
                      }`}>
                        <div className="flex items-center justify-between text-xs font-display font-bold uppercase">
                          <span>01. High-Hook Video Ad View</span>
                          <span className="text-[#60A5FA]">1.8s Stop Rate: 42%</span>
                        </div>
                        <div className="text-xs text-white/90 font-sans-ui mt-1">
                          The Vybe Setters Live Concert Reel · Targeting Delhi NCR Luxury Event Planners
                        </div>
                      </div>

                      <div className={`p-3 rounded-[2px] border transition-all ${
                        adStage === 'lead' ? 'bg-[#3155FF]/40 border-[#3155FF] scale-102 shadow-md' : 'bg-white/5 border-white/10 opacity-70'
                      }`}>
                        <div className="flex items-center justify-between text-xs font-display font-bold uppercase">
                          <span className="flex items-center gap-1.5 text-[#C8FF38]">
                            <span className="w-2 h-2 rounded-full bg-[#C8FF38] animate-ping" />
                            New Qualified Inbound Lead
                          </span>
                          <span className="font-mono text-white/60">12:34 PM</span>
                        </div>
                        <div className="text-xs font-sans-ui font-semibold text-white mt-1">
                          <strong>Kabir Malhotra</strong> (Heritage Weddings) · Budget: ₹1,50,000+
                        </div>
                      </div>

                      <div className={`p-3 rounded-[2px] border transition-all ${
                        adStage === 'whatsapp' ? 'bg-[#25B889]/40 border-[#25B889] scale-102 shadow-md' : 'bg-white/5 border-white/10 opacity-70'
                      }`}>
                        <div className="flex items-center justify-between text-xs font-display font-bold uppercase">
                          <span className="flex items-center gap-1.5 text-[#34D399]">
                            <MessageSquare size={14} />
                            Zero-Lag WhatsApp Dispatch
                          </span>
                          <span className="font-mono text-[#34D399] font-bold">Sent in 14s</span>
                        </div>
                        <div className="text-xs font-sans-ui text-white/90 mt-1">
                          Auto-intro sent to lead + Notification on sales rep's phone.
                        </div>
                      </div>

                      <div className={`p-3 rounded-[2px] border transition-all ${
                        adStage === 'sale' ? 'bg-[#FFC4A8]/30 border-[#FFC4A8] scale-102' : 'bg-white/5 border-white/10 opacity-70'
                      }`}>
                        <div className="flex items-center justify-between text-xs font-display font-bold uppercase">
                          <span className="text-[#FFC4A8]">04. Verified Contract Signed</span>
                          <span className="font-mono font-extrabold text-[#FFC4A8]">₹48,000 Booked</span>
                        </div>
                        <div className="text-xs font-sans-ui text-white/90 mt-1">
                          Live Event Confirmed. Unit Economics: ₹100 CPL → ₹48K Invoice.
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                      <span>Looping Live Conversion Chain</span>
                      <span className="text-[#C8FF38] font-bold">Supreme Ads Performance System</span>
                    </div>
                  </div>
                )}

                {/* 2. WEBSITE DEVELOPMENT LIVE SIMULATION */}
                {currentReq.id === 'website_dev' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-display font-extrabold uppercase text-white">
                        Conversion Experience & Multiple Themes
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#C8FF38]">0.8s MOBILE SPEED</span>
                    </div>

                    <div>
                      <div className="text-xs font-display font-bold uppercase tracking-wider text-white/70 mb-2">
                        Preview Bespoke Theme Architectures:
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {(['luxury', 'ecommerce', 'editorial'] as const).map(t => (
                          <button
                            key={t}
                            onClick={() => setWebTheme(t)}
                            className={`p-2.5 text-center rounded-[2px] text-xs font-display font-extrabold uppercase transition-all ${
                              webTheme === t ? 'bg-[#7856FF] text-white shadow-sm' : 'bg-white/10 text-white/70 hover:bg-white/20'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-[3px] border border-white/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-display font-extrabold text-white uppercase">
                            {webTheme === 'luxury' && 'Luxury Destination Showcase (Tripn)'}
                            {webTheme === 'ecommerce' && 'Artisanal Confectionery Drop (Sugar Mellow)'}
                            {webTheme === 'editorial' && 'Fashion Lookbook & Private Collection'}
                          </div>
                          <div className="text-xs text-white/70 font-sans-ui mt-0.5">
                            Built-in Meta Pixel + CAPI Server-side Conversion Tracking
                          </div>
                        </div>
                        <span className="text-base font-mono font-extrabold text-[#C8FF38]">₹3,499</span>
                      </div>

                      <button
                        onClick={handleAddToCart}
                        className={`w-full py-2.5 rounded-[2px] text-xs font-display font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                          cartAdded
                            ? 'bg-[#25B889] text-white scale-102'
                            : 'bg-white text-[#191919] hover:bg-[#C8FF38]'
                        }`}
                      >
                        <ShoppingCart size={15} />
                        <span>{cartAdded ? '✓ 1-Click UPI Payment Initiated' : 'Test 1-Click Fast Checkout'}</span>
                      </button>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans-ui text-white/70 font-semibold">
                      <span>Customer Journey: First Impression → Action</span>
                      <span className="text-[#CFC4FF]">React 19 / Next.js</span>
                    </div>
                  </div>
                )}

                {/* 3. BRAND BUILDING LIVE SIMULATION */}
                {currentReq.id === 'brand_building' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-display font-extrabold uppercase text-white">
                        From Raw Product To Iconic Brand
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#FB923C]">ESCAPE PRICE WARS</span>
                    </div>

                    <div className="p-3 bg-white/10 rounded-[2px] text-xs font-sans-ui text-white/95 leading-relaxed font-medium">
                      "I have a great physical product, but I'm confused how to make it an elite brand."
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-display font-bold uppercase text-white/70">
                        Interactive Brand Evolution Journey:
                      </div>

                      {[
                        { step: '01', state: 'UNKNOWN BRAND', desc: 'No one has heard of you' },
                        { step: '02', state: 'SEEN & RECOGNISED', desc: 'Consistent creative aesthetic on Meta' },
                        { step: '03', state: 'UNDERSTANDS OFFER', desc: 'Clear high-value proposition & unboxing' },
                        { step: '04', state: 'TRUSTS & BUYS', desc: 'High-ticket customer paying full price' }
                      ].map((st, i) => (
                        <div
                          key={st.step}
                          onClick={() => setBrandStep(i)}
                          className={`p-2.5 rounded-[2px] border cursor-pointer transition-all flex items-center justify-between ${
                            brandStep === i
                              ? 'bg-[#F47A38] text-white border-[#F47A38] font-bold shadow-sm'
                              : 'bg-white/5 border-white/10 text-white/75 hover:bg-white/15'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold">{st.step}</span>
                            <span className="text-xs font-display font-bold uppercase">{st.state}</span>
                          </div>
                          <span className="text-xs opacity-90 font-sans-ui">{st.desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans-ui text-white/70 font-semibold">
                      <span>Brand Equity + Short-Term Performance</span>
                      <span className="text-[#FFC4A8]">Long-Term Pricing Power</span>
                    </div>
                  </div>
                )}

                {/* 4. CRM LIVE SIMULATION */}
                {currentReq.id === 'crm' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-display font-extrabold uppercase text-white">
                        Supreme Ads Sales Operating System
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#34D399]">&lt; 15 MIN HANDOFF</span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-display font-bold uppercase text-white/70">
                        Live Funnel Stages:
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-display font-extrabold uppercase">
                        <div className="p-1.5 bg-blue-500/30 text-blue-300 rounded-[2px] border border-blue-500/40">New (12)</div>
                        <div className="p-1.5 bg-amber-500/30 text-amber-300 rounded-[2px] border border-amber-500/40">Contact (8)</div>
                        <div className="p-1.5 bg-purple-500/30 text-purple-300 rounded-[2px] border border-purple-500/40">Discuss (5)</div>
                        <div className="p-1.5 bg-emerald-500/30 text-emerald-300 rounded-[2px] border border-emerald-500/40">Won (₹2.4L)</div>
                      </div>

                      <div className="p-3 bg-white/10 rounded-[2px] border border-white/15 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-display font-extrabold text-sm text-white">Devika Jindal</span>
                          <span className="px-1.5 py-0.5 rounded bg-red-500/40 text-red-300 text-[10px] font-display font-extrabold">HOT LEAD</span>
                        </div>
                        <div className="text-xs text-white/90 font-sans-ui font-medium">
                          The Heritage Haveli · Inquired via Meta Form for Winter Destination Wedding
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <button 
                            onClick={() => navigateTo('crm')}
                            className="px-3 py-1 bg-[#25B889] text-white text-xs font-display font-extrabold uppercase rounded-[2px] flex items-center gap-1.5"
                          >
                            <MessageSquare size={13} /> WhatsApp 1-Touch
                          </button>
                          <button 
                            onClick={() => navigateTo('crm')}
                            className="px-3 py-1 bg-white/10 text-white text-xs font-display font-extrabold uppercase rounded-[2px] flex items-center gap-1.5"
                          >
                            <PhoneCall size={13} /> Call Lead
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans-ui text-white/70 font-semibold">
                      <span>Daily Sales Rep Follow-Up Queue</span>
                      <span className="text-[#34D399]">Multi-User Role Permissions</span>
                    </div>
                  </div>
                )}

                {/* 5. SOCIAL MEDIA LIVE SIMULATION */}
                {currentReq.id === 'social_media' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-display font-extrabold uppercase text-white">
                        Production Studio: Shoot To Instagram Reel
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#C8FF38]">2 SHOOTS INCLUDED</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 items-center">
                      <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden bg-black border border-white/20 p-2.5 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[10px] font-mono text-white/70 font-bold">
                          <span className="text-red-500 animate-pulse">● REC 4K</span>
                          <span>24 FPS</span>
                        </div>
                        <div className="text-center text-xs font-display font-bold uppercase tracking-widest text-[#FFC4A8]">
                          Cinema Studio Shoot · Delhi NCR
                        </div>
                        <div className="text-[10px] font-mono text-center text-white/60">
                          Director + Cinema Lighting + Audio
                        </div>
                      </div>

                      <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden bg-white text-[#191919] p-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs font-display font-extrabold uppercase">
                          <span>Instagram Reel</span>
                          <span className="text-[#3155FF]">18.4K Views</span>
                        </div>
                        <div className="my-auto text-center space-y-1">
                          <div className="text-sm font-display font-extrabold uppercase">The Vibgyor Drop</div>
                          <div className="text-xs text-[#191919]/70 font-sans-ui font-medium">Trending Sound · Editorial Cut</div>
                        </div>
                        <div className="text-[10px] font-sans-ui text-[#191919]/70 font-bold flex items-center justify-between">
                          <span>18–20 Posts / Mo</span>
                          <span className="font-bold text-[#25B889]">High Saves</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans-ui text-white/70 font-semibold">
                      <span>Cultural Relevance + Professional Video Craft</span>
                      <span className="text-[#C8FF38]">No Cheap Canva Posts</span>
                    </div>
                  </div>
                )}

                {/* 6. CUSTOM TOOLS LIVE SIMULATION */}
                {currentReq.id === 'custom_tools' && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-display font-extrabold uppercase text-white">
                        Interactive Ad Spend ROI Engine
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#F87171]">CUSTOM CODE</span>
                    </div>

                    <div className="p-4 bg-white/10 rounded-[3px] border border-white/20 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-display font-extrabold text-white uppercase">Monthly Ad Spend:</span>
                        <span className="font-mono text-base font-extrabold text-[#C8FF38]">₹{monthlySpend.toLocaleString('en-IN')}</span>
                      </div>
                      <input
                        type="range"
                        min="30000"
                        max="300000"
                        step="10000"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                        className="w-full accent-[#3155FF] cursor-pointer"
                      />

                      <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                        <div className="p-2.5 bg-black/60 rounded-[2px]">
                          <div className="text-[10px] text-white/70 uppercase font-bold">Estimated Inquiries</div>
                          <div className="font-display font-extrabold text-base text-white">{Math.round(monthlySpend / 105)} Leads</div>
                        </div>
                        <div className="p-2.5 bg-black/60 rounded-[2px]">
                          <div className="text-[10px] text-white/70 uppercase font-bold">Projected Pipeline</div>
                          <div className="font-display font-extrabold text-base text-[#34D399]">₹{Math.round((monthlySpend / 105) * 0.12 * 45000).toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans-ui text-white/70 font-semibold">
                      <span>Bespoke Portals · Python / React · Webhook API</span>
                      <span className="text-[#FFC4A8]">Built for Your Brand</span>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </motion.div>
        </AnimatePresence>
      )}

    </div>
  );
};
