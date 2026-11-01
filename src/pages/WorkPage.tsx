import React from 'react';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { ClientMarquee } from '../components/ClientMarquee';
import { ProjectItem } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface WorkPageProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject }) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3155FF]/10 text-[#3155FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Verified Client Work · Delhi NCR & Pan-India
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
              MINI EDITORIAL STORIES.
              <br />
              <span className="font-editorial italic font-normal text-[#F47A38]">VERIFIED</span> COMMERCIAL IMPACT.
            </h1>
            <p className="mt-6 text-base md:text-lg font-sans-ui text-[#191919]/80 leading-relaxed">
              We do not invent fake metrics, fake reviews, or fake award logos. Every figure presented here is drawn from actual ad spend and client booking results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <CaseStudiesSection
        onSelectProject={onSelectProject}
        onStartProject={() => navigateTo('contact')}
      />

      {/* Client Marquee */}
      <ClientMarquee />
    </div>
  );
};
