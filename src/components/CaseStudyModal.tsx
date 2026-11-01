import React from 'react';
import { X, CheckCircle2, ArrowRight, MapPin, Tag } from 'lucide-react';
import { ProjectItem } from '../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProject: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFF9F0] border border-[#E9E3D8] rounded-[4px] shadow-2xl overflow-y-auto paper-grain">
        
        {/* Top Header */}
        <div className="sticky top-0 z-10 bg-[#FFF9F0]/95 backdrop-blur-md px-6 py-4 border-b border-[#E9E3D8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/60">
              CASE ARCHIVE · 2026
            </span>
            <span className="text-[#191919]/30">/</span>
            <span className="text-xs font-sans-ui text-[#3155FF] font-medium">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#191919] hover:bg-[#E9E3D8] rounded-[3px] transition-colors"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-8">
          
          {/* Hero Banner with Project Title */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans-ui text-[#191919]/60 mb-2">
              <span className="flex items-center gap-1"><MapPin size={13} /> {project.location}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Tag size={13} /> {project.category}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#191919] tracking-tight uppercase">
              {project.title}
            </h2>
            <p className="mt-2 text-base md:text-lg font-editorial italic text-[#3155FF]">
              {project.tagline}
            </p>
          </div>

          {/* Project Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-[2px] overflow-hidden border border-[#E9E3D8] bg-[#E9E3D8]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Verified Metrics (especially for Vybe Setters & Verified campaigns) */}
          <div>
            <div className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/50 mb-3">
              Performance & Campaign Milestones
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.metrics.map((m, i) => (
                <div key={i} className="p-4 bg-white border border-[#E9E3D8] rounded-[2px]">
                  <div className="text-xl md:text-2xl font-display font-bold text-[#191919] tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-[#191919]/60 font-sans-ui uppercase mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative Story */}
          <div className="space-y-4">
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-[#191919]">
              Strategy & Implementation
            </h4>
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables Scope */}
          <div>
            <h4 className="text-sm font-display font-bold uppercase tracking-wider text-[#191919] mb-3">
              Executed Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-sans-ui text-[#191919] p-2.5 bg-white border border-[#E9E3D8] rounded-[2px]">
                  <CheckCircle2 size={14} className="text-[#3155FF] shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-6 border-t border-[#E9E3D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-display font-bold uppercase text-[#191919]">
                Want similar execution for your brand?
              </div>
              <div className="text-xs text-[#191919]/60 font-sans-ui">
                We build tailored campaigns with verified metrics.
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onStartProject(project.title);
              }}
              className="px-5 py-2.5 bg-[#191919] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[2px] hover:bg-[#3155FF] transition-colors flex items-center gap-2"
            >
              Start Project Like This <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
