import React, { useState } from 'react';
import { Code2, Layout, Database, Shield, Zap, Sparkles, Terminal, ArrowRight, Layers } from 'lucide-react';

interface WebsiteDevSectionProps {
  onStartProject: () => void;
}

export const WebsiteDevSection: React.FC<WebsiteDevSectionProps> = ({ onStartProject }) => {
  const [activeCategory, setActiveCategory] = useState<'business' | 'landing' | 'ecommerce' | 'software' | 'crm' | 'dashboard'>('business');

  const ARCHITECTURES = {
    business: {
      title: 'High-Converting Business Website',
      tech: 'React / Next.js · Tailwind · Cloud Hosting',
      headline: 'Brand Authority & Inbound Lead Generation',
      description: 'Engineered for service businesses, luxury studios, and consulting firms. Lightning-fast load times, bespoke typography, and high-trust storytelling that turns visitors into high-ticket clients.',
      specs: ['< 0.8s Time-to-Interactive', 'Mobile Responsive Math', 'Built-in SEO & Schema.org', 'Instant WhatsApp Integration']
    },
    landing: {
      title: 'High-Velocity Landing Page',
      tech: 'Vite / React · Edge CDN · Conversion Tracking',
      headline: 'Dedicated Ad Campaign Conversion Funnels',
      description: 'Tightly aligned with your Meta and Google ad campaigns. Zero distractions, persuasive visual storytelling, and instant qualifying lead forms.',
      specs: ['A/B Testing Ready', 'Pre-loaded Pixel & CAPI', 'Sub-second mobile loading', 'Dynamic URL Parameter Capture']
    },
    ecommerce: {
      title: 'Custom E-Commerce Engine',
      tech: 'Next.js · Headless Shopify / Custom APIs · Razorpay / UPI',
      headline: 'Seamless Product Drops & High AOV',
      description: 'Custom product showcases, frictionless one-step checkouts, abandoned cart webhooks, and automated inventory sync built for growing D2C brands.',
      specs: ['Instant UPI Checkout', 'Catalog Filtering', 'Custom Bundling Rules', 'Automated Post-Purchase WhatsApp']
    },
    software: {
      title: 'Bespoke Web Software & Portals',
      tech: 'TypeScript · Node.js / Python · PostgreSQL / Firebase',
      headline: 'Operational Workflows Built for Your Exact Process',
      description: 'Custom client portals, booking engines, vendor management, and internal operational tools that replace chaotic spreadsheets with secure software.',
      specs: ['Role-Based Access Control', 'Automated PDF/Contract Gen', 'Custom Database Schemas', 'Webhook Automations']
    },
    crm: {
      title: 'Custom Sales CRM & Lead Funnel',
      tech: 'React · Firebase / Supabase · WhatsApp Business API',
      headline: 'Full-Cycle Sales Board & Lead Tracking',
      description: 'Modeled after our proprietary Supreme Ads lead board. Real-time stage tracking, lead quality scoring, and automated follow-up reminders.',
      specs: ['Direct Meta Lead Webhooks', 'Team Call Reminders', 'Follow-up Calendar', 'Conversion Analytics']
    },
    dashboard: {
      title: 'Internal Analytics & Operations Dashboard',
      tech: 'React · Python Data Pipeline · Chart.js / Recharts',
      headline: 'Executive Clarity Over Ads & Sales Metrics',
      description: 'Live visibility into ad spend, CPL, sales rep follow-up velocity, and revenue attribution across all your marketing channels.',
      specs: ['Live Meta Ads API Sync', 'Sales Rep Accountability', 'Real-time CAC & ROAS', 'Multi-tenant Permissions']
    }
  };

  const current = ARCHITECTURES[activeCategory];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#F7F3EA] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7856FF]/10 text-[#7856FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Discipline / 03 · Engineering & Web Systems
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
              YOUR BUSINESS
              <br />
              <span className="text-[#7856FF]">DESERVES MORE</span>
              <br />
              THAN A BASIC <span className="font-editorial italic font-normal text-[#3155FF]">WEBSITE.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              Most agency websites are built on bloated drag-and-drop templates that take 8 seconds to load on mobile and break the moment you scale.
              <br /><br />
              At <strong>Supreme Ads</strong>, we design in Figma and code clean, bespoke code in modern TypeScript. <strong>We can design it AND build it.</strong>
            </p>

            <div className="mt-6 pt-4 border-t border-[#E9E3D8]">
              <button
                onClick={onStartProject}
                className="px-5 py-2.5 bg-[#7856FF] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] hover:bg-[#6340E6] transition-colors"
              >
                Discuss Web Architecture
              </button>
            </div>
          </div>
        </div>

        {/* "WHAT ARE YOU BUILDING?" Interactive Selector */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/60">
            What Are You Building?
          </span>
          <span className="text-xs font-sans-ui text-[#191919]/50">
            Select application profile to view architecture
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {[
            { id: 'business', label: 'BUSINESS WEBSITE' },
            { id: 'landing', label: 'LANDING PAGE' },
            { id: 'ecommerce', label: 'ECOMMERCE' },
            { id: 'software', label: 'CUSTOM SOFTWARE' },
            { id: 'crm', label: 'CRM SYSTEM' },
            { id: 'dashboard', label: 'INTERNAL DASHBOARD' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`p-3 text-left text-xs font-display font-bold uppercase rounded-[2px] border transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#191919] text-[#FFF9F0] border-[#191919] shadow-xs'
                  : 'bg-white hover:bg-[#FFF9F0] border-[#E9E3D8] text-[#191919]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Architecture & Interface Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-[#E9E3D8] rounded-[3px] p-6 md:p-10 shadow-xs">
          
          {/* Left Column: Solution Detail */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-display font-bold tracking-wider text-[#7856FF] uppercase">
                {current.tech}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#191919] uppercase mt-2">
                {current.title}
              </h3>
              <div className="text-sm font-editorial italic text-[#3155FF] mt-1 text-base">
                {current.headline}
              </div>
              <p className="text-sm text-[#191919]/75 font-sans-ui mt-4 leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#E9E3D8]">
              {current.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-sans-ui font-medium text-[#191919]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7856FF]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onStartProject}
                className="px-4 py-2 bg-[#7856FF] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[2px] hover:bg-[#6340E6] transition-colors"
              >
                Build This For My Business
              </button>
            </div>
          </div>

          {/* Right Column: Code & Interface Craft Visualization */}
          <div className="lg:col-span-6 bg-[#191919] text-[#FFF9F0] rounded-[2px] p-6 font-sans-ui border border-[#191919] flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2 text-white/70">
                <Terminal size={14} className="text-[#C8FF38]" />
                <span className="font-mono text-[11px]">SupremeAds.Engine.tsx</span>
              </div>
              <span className="text-[11px] font-mono text-[#C8FF38]">PRODUCTION GRADE</span>
            </div>

            {/* Code Snippet representation showing real modern frontend stack */}
            <div className="py-6 font-mono text-xs leading-relaxed text-[#FFF9F0]/90 overflow-x-auto">
              <div className="text-white/40">// Supreme Ads Web Architecture</div>
              <div className="text-[#CFC4FF]">export async function <span className="text-[#C8FF38]">deployClientEngine</span>(config) &#123;</div>
              <div className="pl-4 text-[#FFF9F0]/80">const pipeline = await createSupremeFunnel(&#123;</div>
              <div className="pl-8 text-white/70">framework: <span className="text-[#FFC4A8]">'React 19 / Next.js'</span>,</div>
              <div className="pl-8 text-white/70">styling: <span className="text-[#FFC4A8]">'Tailwind CSS · Editorial Grid'</span>,</div>
              <div className="pl-8 text-white/70">analytics: <span className="text-[#FFC4A8]">'Meta Pixel + CAPI + GA4'</span>,</div>
              <div className="pl-8 text-white/70">crmSync: <span className="text-[#FFC4A8]">'Supreme Ads Real-Time Lead Board'</span>,</div>
              <div className="pl-8 text-white/70">speedIndex: <span className="text-[#C8FF38]">'0.8s Core Web Vitals'</span></div>
              <div className="pl-4 text-[#FFF9F0]/80">&#125;);</div>
              <div className="pl-4 text-[#CFC4FF]">return pipeline.verifyConversionFlow();</div>
              <div className="text-[#CFC4FF]">&#125;</div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[10px] font-display uppercase tracking-wider text-white/70">
              <span className="px-2 py-0.5 rounded bg-white/10">React</span>
              <span className="px-2 py-0.5 rounded bg-white/10">Next.js</span>
              <span className="px-2 py-0.5 rounded bg-white/10">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-white/10">Python</span>
              <span className="px-2 py-0.5 rounded bg-white/10">PHP / APIs</span>
              <span className="px-2 py-0.5 rounded bg-white/10">Firebase</span>
              <span className="px-2 py-0.5 rounded bg-white/10">Databases</span>
              <span className="px-2 py-0.5 rounded bg-white/10">Automation</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
