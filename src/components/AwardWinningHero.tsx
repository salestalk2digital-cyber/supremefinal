import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, MessageSquare, PhoneCall, AlertTriangle, X, ShieldCheck, Zap } from 'lucide-react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { ServiceRequirementGrid } from './ServiceRequirementGrid';

interface HeroSlide {
  lines: {
    text: string;
    isSerif?: boolean;
    color?: string;
  }[];
}

interface RelatableProblem {
  id: string;
  tabLabel: string;
  problemTitle: string;
  relatablePain: string;
  whyOthersFail: string;
  supremeSolution: string;
  verifiedMetric: string;
  statPills: { label: string; val: string }[];
  route: PageRoute;
  context: string;
  accent: string;
  image: string;
  whatsappMessage: string;
}

export const AwardWinningHero: React.FC = () => {
  const { navigateTo } = useNavigation();

  // The two looping headline sets
  const SLIDES: HeroSlide[] = [
    {
      lines: [
        { text: "LET'S", isSerif: false, color: "text-[#FFF9F0]" },
        { text: "BUILD", isSerif: false, color: "text-[#FFF9F0]" },
        { text: "SOMETHING", isSerif: true, color: "text-[#FFC4A8]" },
        { text: "THAT GROWS.", isSerif: false, color: "text-[#FFF9F0]" },
      ]
    },
    {
      lines: [
        { text: "SUPREME", isSerif: false, color: "text-[#FFF9F0]" },
        { text: "ADS", isSerif: false, color: "text-[#3155FF]" },
        { text: "WHAT ARE", isSerif: false, color: "text-[#FFF9F0]" },
        { text: "YOU TRYING", isSerif: false, color: "text-[#FFF9F0]" },
        { text: "TO GROW?", isSerif: true, color: "text-[#FFC4A8]" },
      ]
    }
  ];

  // Continuous letter-by-letter typing loop state (no speed controller required)
  const [slideIndex, setSlideIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentSlide = SLIDES[slideIndex];
  const totalCharsInSlide = currentSlide.lines.reduce((acc, line) => acc + line.text.length, 0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charCount < totalCharsInSlide) {
      // Normal human typing cadence: ~65ms per stroke
      timeout = setTimeout(() => {
        setCharCount(prev => prev + 1);
      }, 65);
    } else if (!isDeleting && charCount >= totalCharsInSlide) {
      // Dwell pause: 3.6 seconds to comfortably read the complete headline
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3600);
    } else if (isDeleting && charCount > 0) {
      // Smooth natural backspace: 28ms per character
      timeout = setTimeout(() => {
        setCharCount(prev => prev - 1);
      }, 28);
    } else if (isDeleting && charCount === 0) {
      // Loop to next slide
      setIsDeleting(false);
      setSlideIndex(prev => (prev + 1) % SLIDES.length);
    }

    return () => clearTimeout(timeout);
  }, [charCount, isDeleting, totalCharsInSlide, slideIndex]);

  // Map active character progression to each line with caret positioning
  let accumulatedChars = 0;
  const renderedLines = currentSlide.lines.map((line, idx) => {
    const lineStart = accumulatedChars;
    const lineEnd = lineStart + line.text.length;
    accumulatedChars = lineEnd;

    let visibleText = '';
    let hasCaret = false;

    if (charCount >= lineEnd) {
      visibleText = line.text;
    } else if (charCount >= lineStart && charCount < lineEnd) {
      visibleText = line.text.slice(0, charCount - lineStart);
      hasCaret = true;
    }

    if (idx === currentSlide.lines.length - 1 && charCount >= totalCharsInSlide) {
      hasCaret = true;
    }

    return {
      ...line,
      visibleText,
      hasCaret
    };
  });

  // Visceral, Relatable Business Problems
  const PROBLEMS: RelatableProblem[] = [
    {
      id: 'junk_leads',
      tabLabel: '🚨 JUNK LEADS / HIGH CPL',
      problemTitle: 'Burning Ad Budget On Cheap Leads Who Never Buy',
      relatablePain: "You spend ₹50,000+ to ₹2,00,000+ on Meta ads every month, but your sales reps waste half their day calling people who say 'I clicked by accident' or 'You are way too expensive'.",
      whyOthersFail: "Cheap agencies boast about ₹25 CPL. They run broad forms with zero friction, flooding your pipeline with students and window-shoppers.",
      supremeSolution: "We architect multi-angle creative hooks, budget-filtering form friction, and instant CRM WhatsApp handoffs so your team only speaks with funded, qualified decision-makers.",
      verifiedMetric: "The Vybe Setters: ₹48K ad spend → 10+ confirmed bookings at ₹40K+ minimum ticket (~₹100 CPL).",
      statPills: [
        { label: 'CPL Target', val: '~₹100' },
        { label: 'Qualified Bookings', val: '10+' },
        { label: 'Minimum Ticket', val: '₹40K+' }
      ],
      route: 'services',
      context: 'Meta Ads Management',
      accent: '#3155FF',
      image: '/src/assets/images/vybe_setters_event_1791025890283.jpg',
      whatsappMessage: 'Hi Supreme Ads, our business is getting low-quality leads from ads. I want to fix this and speak with a senior strategist.'
    },
    {
      id: 'd2c_stuck',
      tabLabel: '📦 D2C CONVERSION TOO LOW',
      problemTitle: 'Great Product, But Visitors Leave Without Buying',
      relatablePain: "You have a remarkable product and people view your Instagram or store, but your conversion rate is below 1.2% and your Cost-Per-Acquisition is eating all your gross margins.",
      whyOthersFail: "Most agencies treat e-commerce like a generic catalog. They don't understand high-fashion sensory food/fashion art direction or frictionless checkout.",
      supremeSolution: "We rebuild your product presentation with high-fashion lighting, editorial unboxing reels, high-AOV festive gifting bundles, and 1-click UPI checkout.",
      verifiedMetric: "Sugar Mellow: Artisanal confectionery scaling seasonal corporate gifting and national orders.",
      statPills: [
        { label: 'Checkout', val: '1-Step UPI' },
        { label: 'AOV Lift', val: '+45%' },
        { label: 'Retention', val: 'Repeat Bundles' }
      ],
      route: 'services',
      context: 'D2C Brand Marketing',
      accent: '#F47A38',
      image: '/src/assets/images/sugar_mellow_confectionery_1791025915081.jpg',
      whatsappMessage: 'Hi Supreme Ads, our D2C brand conversion rate is struggling. We want your team to overhaul our creative and funnel.'
    },
    {
      id: 'basic_website',
      tabLabel: '💻 BASIC / SLOW WEBSITE',
      problemTitle: 'Your Website Looks Amateur And Loses High-Ticket Clients',
      relatablePain: "Your existing site was built on a sluggish template that takes 6+ seconds to load on mobile. When enterprise or luxury clients visit, your website fails to communicate your real status.",
      whyOthersFail: "Freelancers install 40 bloated WordPress plugins that break on mobile and don't integrate conversion tracking (Pixel + CAPI).",
      supremeSolution: "We design bespoke editorial layouts in Figma and engineer clean code in React / Next.js with <0.8s load times, built-in CAPI tracking, and direct WhatsApp booking.",
      verifiedMetric: "Sub-second mobile loading, zero template code, and automated lead capture.",
      statPills: [
        { label: 'Mobile Speed', val: '< 0.8s' },
        { label: 'Framework', val: 'React 19' },
        { label: 'Tracking', val: 'CAPI + GA4' }
      ],
      route: 'services',
      context: 'Website & Software',
      accent: '#7856FF',
      image: '/src/assets/images/dream_weddings_luxury_1791025903181.jpg',
      whatsappMessage: 'Hi Supreme Ads, we need an elite, modern website that positions us as the leader in our industry.'
    },
    {
      id: 'social_ghost',
      tabLabel: '🎬 POSTING WITHOUT CLIENTS',
      problemTitle: 'Active On Instagram, But Zero Inquiries In Your DM',
      relatablePain: "You or your team post 5 days a week, but your feed looks like generic Canva graphic design. Followers don't turn into customers, and you have no video production capability.",
      whyOthersFail: "Social media interns post quote templates that nobody cares about. They lack cinema cameras, art direction, and psychological buyer hooks.",
      supremeSolution: "We provide an elite production retainer: 18–20 curated posts per month, including 2 on-location cinema video shoots in Delhi NCR with a director, stylist, and professional audio.",
      verifiedMetric: "The Vibgyor & Spiritual Melodies: Cult organic engagement and high-status brand positioning.",
      statPills: [
        { label: 'Posts / Mo', val: '18–20' },
        { label: 'Video Shoots', val: '2 Included' },
        { label: 'Extra Shoot', val: '₹3,500' }
      ],
      route: 'services',
      context: 'Social Media',
      accent: '#C8FF38',
      image: '/src/assets/images/editorial_creative_direction_1791025926464.jpg',
      whatsappMessage: 'Hi Supreme Ads, we want to upgrade our brand to your 18-20 posts + 2 video shoots retainer.'
    },
    {
      id: 'lost_leads',
      tabLabel: '📱 MISSED WHATSAPP LEADS',
      problemTitle: 'Leads Come In, But Follow-Ups Are Chaotic And Missed',
      relatablePain: "Inquiries land across multiple personal WhatsApp chats and unmonitored spreadsheets. Leads sit untouched for 8 to 24 hours, by which time they have already bought from your competitor.",
      whyOthersFail: "Generic CRMs like Salesforce or Zoho are too complex for Indian sales teams who live on WhatsApp and phone calls.",
      supremeSolution: "We deploy the Supreme Ads Sales Board: instant Meta webhook, automated Hot/Warm/Cold tags, daily follow-up queues, and 1-click WhatsApp & call dispatch.",
      verifiedMetric: "Live system: lead-funnel-sa.vercel.app with instant lead routing under 15 minutes.",
      statPills: [
        { label: 'Response Target', val: '< 15 Mins' },
        { label: 'Lead Scoring', val: 'Hot / Warm' },
        { label: 'WhatsApp', val: '1-Touch' }
      ],
      route: 'crm',
      context: 'Sales CRM',
      accent: '#25B889',
      image: '/src/assets/images/vybe_setters_event_1791025890283.jpg',
      whatsappMessage: 'Hi Supreme Ads, our sales team needs your custom Sales CRM Lead Board to stop losing follow-ups.'
    },
    {
      id: 'growth_stuck',
      tabLabel: '🔍 REVENUE IS STUCK',
      problemTitle: 'Hit A Revenue Ceiling And Not Sure What Is Broken',
      relatablePain: "You are doing okay, but you cannot break through to the next scale tier. You don't know whether you need more ad spend, a better offer, a new landing page, or better closing scripts.",
      whyOthersFail: "Agencies guess blindly. They tell you to 'spend more on ads' without fixing your leaky bucket.",
      supremeSolution: "We conduct our structured 7-stage diagnostic (Reach → Interest → Enquiry → Qualified Lead → Follow-up → Sale → Repeat) to identify the exact constraint holding back revenue.",
      verifiedMetric: "Framework resolving 6 common operational bottlenecks with tailored corrective plans.",
      statPills: [
        { label: 'Lifecycle', val: '7 Stages' },
        { label: 'Diagnostics', val: '6 Solved' },
        { label: 'Strategy', val: 'Bespoke' }
      ],
      route: 'diagnostic',
      context: 'Growth Diagnostic',
      accent: '#F05A5A',
      image: '/src/assets/images/dream_weddings_luxury_1791025903181.jpg',
      whatsappMessage: 'Hi Supreme Ads, our revenue is stuck at a plateau. We need your Growth Diagnostic audit.'
    }
  ];

  const [activeProblemIndex, setActiveProblemIndex] = useState(0);
  const activeProblem = PROBLEMS[activeProblemIndex];

  // Quick Instant Inquiry Drawer State
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryBudget, setInquiryBudget] = useState('₹50,000 – ₹1,50,000 / mo');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleOpenDrawerForProblem = (idx: number) => {
    setActiveProblemIndex(idx);
    setDrawerOpen(true);
    setInquirySubmitted(false);
  };

  const handleDrawerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between px-6 md:px-12 pt-8 pb-20 bg-[#191919] text-[#FFF9F0] border-b border-[#252525] overflow-hidden select-none paper-grain">
      
      {/* Top Editorial Status Bar */}
      <div className="max-w-[1440px] w-full mx-auto flex flex-wrap items-center justify-between text-xs md:text-sm font-sans-ui text-[#FFF9F0]/70 pb-6 border-b border-white/10 relative z-20">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold tracking-widest text-[#FFF9F0] uppercase">
            SUPREME ADS / 2026
          </span>
          <span className="text-white/20">·</span>
          <span>Delhi NCR, India</span>
          <span className="text-white/20">·</span>
          <span className="font-editorial italic text-base text-[#FFC4A8]">
            Turn Clicks Into Customers
          </span>
          <span className="text-white/20 hidden lg:inline">·</span>
          <span className="text-[#C8FF38] font-mono text-xs hidden lg:inline">supremeadvertisment.in</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href="https://wa.me/919667173693"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-white/90 hover:text-[#25D366] font-mono text-xs font-bold transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            +91 9667173693
          </a>
          <button
            onClick={() => handleOpenDrawerForProblem(activeProblemIndex)}
            className="px-3.5 py-1.5 bg-[#3155FF] text-white hover:bg-white hover:text-[#191919] font-display font-bold uppercase tracking-wider text-[11px] rounded-[2px] transition-colors flex items-center gap-1 shadow-xs"
          >
            Enquire With Us <ArrowUpRight size={13} />
          </button>
        </div>
      </div>

      {/* Main Viewport Grid */}
      <div className="max-w-[1440px] w-full mx-auto my-auto py-8 md:py-12 relative z-10">
        
        {/* Top Header Row with Looping Letter-by-Letter Typewriter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          
          <div className="lg:col-span-8">
            <div className="text-[12px] md:text-[14px] font-display font-bold tracking-[0.2em] text-[#C8FF38] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8FF38] inline-block animate-pulse" />
              THE ELITE ADVERTISING & SYSTEMS AGENCY FOR HIGH-GROWTH BUSINESSES
            </div>

            {/* Letter-by-Letter Looping Typewriter Display */}
            <div className="font-display font-bold tracking-[-0.055em] leading-[0.86] text-[clamp(52px,8.2vw,140px)] uppercase text-[#FFF9F0] min-h-[3.6em] sm:min-h-[3.8em]">
              {renderedLines.map((line, idx) => (
                <div
                  key={idx}
                  className={`min-h-[0.9em] flex items-baseline ${
                    line.isSerif
                      ? 'font-editorial italic font-normal text-[#FFC4A8] tracking-[-0.02em]'
                      : line.color || 'text-[#FFF9F0]'
                  }`}
                >
                  <span>{line.visibleText}</span>
                  {line.hasCaret && (
                    <span
                      className={`inline-block w-[0.06em] h-[0.82em] ml-1.5 animate-pulse align-baseline ${
                        line.isSerif ? 'bg-[#FFC4A8]' : 'bg-[#C8FF38]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:pb-3">
            <div className="p-4 bg-white/5 border border-white/10 rounded-[3px]">
              <div className="text-[11px] font-display font-bold uppercase tracking-wider text-[#FFC4A8] mb-1">
                The Elite Agency Standard:
              </div>
              <p className="text-xs md:text-sm font-sans-ui text-[#FFF9F0]/85 leading-relaxed">
                We don't sell random marketing hours. We diagnose your exact operational bottleneck, deploy high-converting creative & software, and plug directly into your sales pipeline.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleOpenDrawerForProblem(activeProblemIndex)}
                className="flex-1 px-6 py-3.5 bg-[#3155FF] hover:bg-[#2040E0] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] transition-all flex items-center justify-between shadow-md"
                data-cursor="START"
              >
                <span>ENQUIRE WITH US</span>
                <ArrowUpRight size={17} />
              </button>

              <a
                href={`https://wa.me/919667173693?text=${encodeURIComponent(activeProblem.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare size={16} /> WhatsApp: 9667173693
              </a>
            </div>
          </div>

        </div>

        {/* THE SERVICE REQUIREMENT GRID & CAROUSEL (Replaces old laptop as requested) */}
        <ServiceRequirementGrid />

      </div>

      {/* Bottom Editorial Ticker */}
      <div className="max-w-[1440px] w-full mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans-ui text-[#FFF9F0]/60 relative z-10">
        <div className="flex items-center gap-6">
          <div>
            <span className="font-semibold text-white">Supreme Ads</span> · High-Ticket Creative & Performance
          </div>
          <div className="hidden md:inline">
            <span className="text-[#C8FF38]">Direct Founder Engagement</span> · We Don't Hand Off To Interns
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleOpenDrawerForProblem(activeProblemIndex)}
            className="text-white hover:text-[#C8FF38] uppercase font-display font-bold tracking-wider text-[11px] flex items-center gap-1"
          >
            Submit Fast Inquiry Drawer <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* QUICK INSTANT STRATEGY INQUIRY DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#FFF9F0] h-full shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto text-[#191919] paper-grain border-l border-[#E9E3D8]">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E9E3D8]">
                <div>
                  <span className="text-[11px] font-display font-bold uppercase tracking-widest text-[#3155FF]">
                    Priority Consultation
                  </span>
                  <h3 className="text-xl font-display font-bold uppercase text-[#191919] mt-0.5">
                    Resolve Your Business Bottleneck
                  </h3>
                </div>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 text-[#191919]/70 hover:text-[#191919] rounded-[2px] hover:bg-[#E9E3D8] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Selected Bottleneck Badge */}
              <div className="mt-4 p-3 bg-white border border-[#E9E3D8] rounded-[2px]">
                <div className="text-[10px] font-display uppercase tracking-wider text-[#191919]/50">
                  Target Bottleneck:
                </div>
                <div className="text-xs font-display font-bold text-[#F05A5A] uppercase mt-0.5">
                  {activeProblem.tabLabel}
                </div>
                <div className="text-xs text-[#191919]/80 font-sans-ui mt-1">
                  "{activeProblem.problemTitle}"
                </div>
              </div>

              {/* Form or Confirmation */}
              {inquirySubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#25B889]/15 text-[#25B889] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-display font-bold uppercase text-[#191919]">
                    Inquiry Priority Dispatched
                  </h4>
                  <p className="text-xs font-sans-ui text-[#191919]/80 leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong>{inquiryName || 'Partner'}</strong>. Your challenge has been assigned to a senior performance strategist in Delhi NCR. We will reach you via WhatsApp within 2 hours.
                  </p>

                  <div className="pt-4">
                    <a
                      href={`https://wa.me/919667173693?text=${encodeURIComponent(`Hi Supreme Ads, I just submitted an inquiry for ${activeProblem.problemTitle}. My name is ${inquiryName}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-display font-bold uppercase tracking-wider rounded-[2px]"
                    >
                      <MessageSquare size={14} /> Open WhatsApp Directly (9667173693)
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDrawerSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-[#191919] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={e => setInquiryName(e.target.value)}
                      placeholder="e.g. Vikramaditya Singhania"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E9E3D8] rounded-[2px] text-xs font-sans-ui focus:outline-none focus:border-[#3155FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-[#191919] mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={inquiryCompany}
                      onChange={e => setInquiryCompany(e.target.value)}
                      placeholder="e.g. Aura Gems or Vybe Entertainment"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E9E3D8] rounded-[2px] text-xs font-sans-ui focus:outline-none focus:border-[#3155FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-[#191919] mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={e => setInquiryPhone(e.target.value)}
                      placeholder="+91 98100 00000"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E9E3D8] rounded-[2px] text-xs font-sans-ui focus:outline-none focus:border-[#3155FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-[#191919] mb-1">
                      Monthly Ad Spend / Marketing Budget
                    </label>
                    <select
                      value={inquiryBudget}
                      onChange={e => setInquiryBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E9E3D8] rounded-[2px] text-xs font-sans-ui focus:outline-none focus:border-[#3155FF]"
                    >
                      <option value="Under ₹50,000 / mo">Under ₹50,000 / mo</option>
                      <option value="₹50,000 – ₹1,50,000 / mo">₹50,000 – ₹1,50,000 / mo</option>
                      <option value="₹1,50,000 – ₹5,00,000 / mo">₹1,50,000 – ₹5,00,000 / mo</option>
                      <option value="₹5,00,000+ / mo">₹5,00,000+ / mo (High Velocity)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#191919] text-white hover:bg-[#3155FF] text-xs font-display font-bold tracking-widest uppercase rounded-[2px] transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Request Elite Strategy Call</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-[#E9E3D8] text-[11px] font-sans-ui text-[#191919]/60 flex items-center justify-between">
              <span>Strict NDA. Zero agency spam.</span>
              <span className="font-semibold text-[#191919]">Delhi NCR Studio</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
