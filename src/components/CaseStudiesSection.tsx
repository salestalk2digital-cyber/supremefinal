import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import { ProjectItem } from '../types';

interface CaseStudiesSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onStartProject: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectProject,
  onStartProject,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filtered = filterCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.serviceType === filterCategory);

  const vybeProject = PROJECTS.find(p => p.id === 'the-vybe-setters');

  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E9E3D8]">
          <div>
            <div className="text-[12px] font-display font-bold tracking-widest text-[#3155FF] uppercase mb-2">
              Selected Work / 07 · Verified Impact
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-tight leading-[0.92] uppercase">
              NOT CASE STUDIES. <br />
              <span className="font-editorial italic font-normal text-[#F47A38]">MINI</span> EDITORIAL STORIES.
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F3EA] rounded-[4px] border border-[#E9E3D8]">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'meta_ads', label: 'Meta Ads' },
              { id: 'd2c', label: 'D2C' },
              { id: 'social', label: 'Social' },
              { id: 'crm', label: 'CRM' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-display font-semibold uppercase tracking-wider rounded-[2px] transition-colors ${
                  filterCategory === tab.id
                    ? 'bg-[#191919] text-white shadow-xs'
                    : 'text-[#191919]/70 hover:text-[#191919]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase: The Vybe Setters (Detailed Verified Numbers as Specified) */}
        {vybeProject && (filterCategory === 'all' || filterCategory === 'meta_ads') && (
          <div className="mb-20 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[4px] p-6 md:p-12 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#3155FF] mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#3155FF]" />
                    Featured Verified Campaign · Live Music Funnel
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-[#191919] uppercase tracking-tight">
                    THE VYBE SETTERS
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-[#191919]/80 font-sans-ui leading-relaxed">
                    A live band and high-ticket event production collective in Delhi NCR. We replaced unpredictable word-of-mouth with a high-intent Meta ad system and qualification funnel.
                  </p>
                </div>

                {/* EXACT FIGURES FROM BRIEF - NO INVENTIONS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#E9E3D8]">
                  <div className="p-3 bg-white border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-2xl font-display font-bold text-[#191919] tabular-nums">₹48K</div>
                    <div className="text-[10px] font-display uppercase tracking-wider text-[#191919]/60">Monthly Ad Spend</div>
                  </div>
                  <div className="p-3 bg-white border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-2xl font-display font-bold text-[#3155FF] tabular-nums">10+</div>
                    <div className="text-[10px] font-display uppercase tracking-wider text-[#191919]/60">Confirmed Bookings</div>
                  </div>
                  <div className="p-3 bg-white border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-2xl font-display font-bold text-[#191919] tabular-nums">₹40K+</div>
                    <div className="text-[10px] font-display uppercase tracking-wider text-[#191919]/60">Minimum Ticket</div>
                  </div>
                  <div className="p-3 bg-white border border-[#E9E3D8] rounded-[2px]">
                    <div className="text-2xl font-display font-bold text-[#25B889] tabular-nums">~₹100</div>
                    <div className="text-[10px] font-display uppercase tracking-wider text-[#191919]/60">Cost Per Lead (CPL)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => onSelectProject(vybeProject)}
                    className="px-5 py-2.5 bg-[#191919] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[2px] hover:bg-[#3155FF] transition-colors flex items-center gap-2"
                  >
                    Read Full Story <ArrowUpRight size={14} />
                  </button>
                  <span className="text-xs text-[#191919]/60 font-sans-ui">
                    ~15 qualified event leads per day
                  </span>
                </div>
              </div>

              <div
                onClick={() => onSelectProject(vybeProject)}
                className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-[2px] cursor-pointer group bg-[#E9E3D8]"
                data-cursor="VIEW"
              >
                <img
                  src={vybeProject.image}
                  alt="The Vybe Setters Live Performance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-supreme"
                />
                <div className="absolute bottom-3 left-3 bg-[#191919]/80 backdrop-blur-xs text-white text-[11px] font-display font-semibold uppercase px-2.5 py-1 rounded-[2px]">
                  Delhi NCR Event Production
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filtered
            .filter(p => p.id !== 'the-vybe-setters' || filterCategory !== 'all')
            .map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white border border-[#E9E3D8] rounded-[3px] overflow-hidden cursor-pointer flex flex-col justify-between hover:border-[#191919] transition-all shadow-xs"
                data-cursor="VIEW"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#E9E3D8] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-supreme"
                    />
                    <div className="absolute top-3 left-3 bg-[#FFF9F0]/90 backdrop-blur-xs text-[#191919] text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-[2px] border border-[#E9E3D8]">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] font-sans-ui text-[#191919]/50 uppercase tracking-wider">
                      {project.location}
                    </div>
                    <h4 className="text-xl font-display font-bold text-[#191919] uppercase mt-1 group-hover:text-[#3155FF] transition-colors flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-xs md:text-sm text-[#191919]/75 font-sans-ui mt-2 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#FFF9F0] border-t border-[#E9E3D8] flex items-center justify-between text-xs font-display font-bold text-[#191919]">
                  <span>{project.metrics[0]?.value}</span>
                  <span className="text-[#191919]/50 font-normal">{project.metrics[0]?.label}</span>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
