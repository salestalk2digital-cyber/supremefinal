import React, { useState } from 'react';
import { MetaAdsSection } from '../components/MetaAdsSection';
import { D2CSection } from '../components/D2CSection';
import { WebsiteDevSection } from '../components/WebsiteDevSection';
import { SocialSection } from '../components/SocialSection';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight, CheckCircle2, Target, Sparkles, Laptop, Video, MessageSquare, Sliders } from 'lucide-react';

interface ServicesPageProps {
  onSelectProject: (projectId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectProject }) => {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState<'all' | 'meta_ads' | 'd2c' | 'website' | 'social'>('all');

  return (
    <div className="space-y-0 paper-grain">
      {/* Page Header */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3155FF]/10 text-[#3155FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Supreme Ads · Core Pillars
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
              PERFORMANCE MARKETING,
              <br />
              BRAND BUILDING &
              <br />
              <span className="font-editorial italic font-normal text-[#F47A38]">CONVERSION WEBSITES.</span>
            </h1>
            <p className="mt-6 text-base md:text-xl font-sans-ui text-[#191919]/80 leading-relaxed">
              We help businesses turn digital attention into customers. These are not isolated tactics—they form an interconnected growth apparatus: 
              <strong className="text-[#191919] block mt-1 font-mono text-sm sm:text-base">Meta Ads → Website → Trust → Enquiry/Purchase → Customer</strong>
            </p>
          </div>

          {/* Quick Jump Buttons to Dedicated Deep Dive Pages */}
          <div className="mt-12 pt-8 border-t border-[#E9E3D8]">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/50 mb-4">
              Open Dedicated Strategy Pages:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { title: 'Meta Ads', route: 'meta-ads' as const, icon: Target, accent: '#3155FF' },
                { title: 'Brand Building', route: 'brand-building' as const, icon: Sparkles, accent: '#F47A38' },
                { title: 'Website Dev', route: 'website-dev' as const, icon: Laptop, accent: '#7856FF' },
                { title: 'Sales CRM', route: 'crm' as const, icon: MessageSquare, accent: '#25B889' },
                { title: 'Social Media', route: 'social-media' as const, icon: Video, accent: '#C8FF38' },
                { title: 'Custom Tools', route: 'custom-tools' as const, icon: Sliders, accent: '#FF5C5C' }
              ].map((item) => (
                <button
                  key={item.title}
                  onClick={() => navigateTo(item.route)}
                  className="p-3.5 bg-white border border-[#E9E3D8] hover:border-[#191919] rounded-[3px] text-left transition-all shadow-xs flex flex-col justify-between group"
                >
                  <item.icon size={16} style={{ color: item.accent }} />
                  <div className="font-display font-bold text-xs uppercase tracking-tight text-[#191919] mt-3 group-hover:text-[#3155FF] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Section */}
      <MetaAdsSection
        onStartProject={() => navigateTo('contact', 'Meta Ads Management')}
        onViewVybeCase={() => onSelectProject('the-vybe-setters')}
      />

      {/* D2C Section */}
      <D2CSection
        onStartProject={() => navigateTo('contact', 'D2C Brand Marketing')}
        onExploreSugarMellow={() => onSelectProject('sugar-mellow')}
      />

      {/* Web & Software Section */}
      <WebsiteDevSection
        onStartProject={() => navigateTo('contact', 'Website & Custom Software')}
      />

      {/* Social Media Section */}
      <SocialSection
        onStartProject={() => navigateTo('contact', 'Social Media Management')}
      />
    </div>
  );
};
