import React, { useState } from 'react';
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, RefreshCw, Zap } from 'lucide-react';
import { GROWTH_ISSUES, GROWTH_STAGES } from '../data/diagnosticData';
import { GrowthIssue } from '../types';

interface GrowthDiagnosticSectionProps {
  onStartProject: (issueContext?: string) => void;
}

export const GrowthDiagnosticSection: React.FC<GrowthDiagnosticSectionProps> = ({ onStartProject }) => {
  const [selectedIssue, setSelectedIssue] = useState<GrowthIssue>(GROWTH_ISSUES[0]);

  return (
    <section id="diagnostic" className="py-20 md:py-32 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F05A5A]/15 text-[#191919] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Diagnostic Framework / 06 · Business Growth Audit
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
              WHERE IS
              <br />
              <span className="text-[#F05A5A]">GROWTH</span>
              <br />
              <span className="font-editorial italic font-normal text-[#191919]">BREAKING?</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              Business owners often blame "the algorithm" or "bad leads." But customer acquisition is a sequential chain. If a single link snaps, the entire investment collapses.
              <br /><br />
              Select your current symptom below to identify the broken link in your customer acquisition lifecycle.
            </p>
          </div>
        </div>

        {/* The 7-Stage Customer Lifecycle Bar */}
        <div className="p-6 bg-white border border-[#E9E3D8] rounded-[3px] shadow-xs mb-10">
          <div className="text-xs font-display font-bold uppercase tracking-widest text-[#191919]/50 mb-3 flex items-center justify-between">
            <span>Customer Acquisition Lifecycle</span>
            <span className="text-[#F05A5A] font-semibold">
              Highlighted: Broken Link ({selectedIssue.brokenStage.toUpperCase()})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {GROWTH_STAGES.map((stg, i) => {
              const isBroken = selectedIssue.brokenStage === stg.key;
              return (
                <div
                  key={stg.key}
                  className={`p-3 rounded-[2px] border text-center transition-all ${
                    isBroken
                      ? 'bg-[#F05A5A] text-white border-[#F05A5A] shadow-sm scale-102 font-bold ring-2 ring-[#F05A5A]/30'
                      : 'bg-[#FFF9F0] text-[#191919] border-[#E9E3D8]'
                  }`}
                >
                  <div className={`text-[10px] font-display uppercase tracking-wider ${isBroken ? 'text-white/80' : 'text-[#191919]/40'}`}>
                    0{i + 1}
                  </div>
                  <div className="text-xs font-display uppercase mt-0.5">
                    {stg.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Diagnosis Selector & Result Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Symptoms Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-[#191919]/50 mb-1">
              Select Your Observed Symptom:
            </div>

            {GROWTH_ISSUES.map((issue) => (
              <button
                key={issue.id}
                onClick={() => setSelectedIssue(issue)}
                className={`w-full text-left p-4 rounded-[2px] border transition-all flex items-center justify-between ${
                  selectedIssue.id === issue.id
                    ? 'bg-[#191919] text-white border-[#191919] shadow-sm translate-x-2'
                    : 'bg-white hover:bg-[#FFF9F0] border-[#E9E3D8] text-[#191919]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${selectedIssue.id === issue.id ? 'bg-[#F05A5A]' : 'bg-[#191919]/30'}`} />
                  <span className="font-display font-bold text-xs md:text-sm tracking-wide">
                    {issue.label}
                  </span>
                </div>
                <ChevronRight size={16} className={selectedIssue.id === issue.id ? 'text-[#F05A5A]' : 'text-stone-400'} />
              </button>
            ))}
          </div>

          {/* Right Column: Diagnostic Analysis & Supreme Action Plan */}
          <div className="lg:col-span-7 bg-white border border-[#E9E3D8] rounded-[3px] p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E9E3D8]">
                <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#F05A5A]">
                  <AlertTriangle size={15} />
                  <span>Funnel Bottleneck Identified</span>
                </div>
                <span className="text-xs font-sans-ui text-[#191919]/50 uppercase">
                  Stage: {selectedIssue.brokenStage.toUpperCase()}
                </span>
              </div>

              <div className="mt-6">
                <div className="text-xs font-display font-bold uppercase text-[#191919]/50 tracking-wider">
                  Observed Impact:
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#191919] mt-1">
                  {selectedIssue.impact}
                </h3>

                <div className="mt-6 p-4 bg-[#FFF9F0] border-l-3 border-[#F05A5A] rounded-r-[2px]">
                  <div className="text-xs font-display font-bold uppercase text-[#F05A5A] tracking-wider mb-1">
                    Root Cause:
                  </div>
                  <p className="text-xs md:text-sm font-sans-ui text-[#191919]/85 leading-relaxed">
                    {selectedIssue.rootCause}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-display font-bold uppercase text-[#191919]/50 tracking-wider mb-2">
                    Supreme Ads Engineering Solution:
                  </div>
                  <p className="text-xs md:text-sm font-sans-ui text-[#191919]/85 leading-relaxed">
                    {selectedIssue.solution}
                  </p>

                  <div className="mt-4 space-y-2">
                    {selectedIssue.supremeSystem.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-sans-ui text-[#191919]">
                        <CheckCircle2 size={14} className="text-[#25B889] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E9E3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#191919]/60 font-sans-ui">
                Ready to fix this specific leak in your pipeline?
              </span>
              <button
                onClick={() => onStartProject(selectedIssue.label)}
                className="px-5 py-2.5 bg-[#F05A5A] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[2px] hover:bg-[#D94040] transition-colors flex items-center justify-center gap-2"
              >
                Resolve This BottleNeck <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
