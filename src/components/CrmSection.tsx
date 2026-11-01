import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, UserCheck, ShieldCheck, ArrowRight, CheckCircle2, Sliders, ExternalLink } from 'lucide-react';
import { INITIAL_LEADS, PIPELINE_STAGES } from '../data/crmData';
import { LeadItem } from '../types';

interface CrmSectionProps {
  onStartProject: () => void;
}

export const CrmSection: React.FC<CrmSectionProps> = ({ onStartProject }) => {
  const [leads, setLeads] = useState<LeadItem[]>(INITIAL_LEADS);
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(leads[0]);
  const [activeStageFilter, setActiveStageFilter] = useState<string>('all');
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const triggerAction = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 3500);
  };

  const updateLeadQuality = (id: string, quality: 'Hot' | 'Warm' | 'Cold') => {
    setLeads(prev => prev.map(lead => lead.id === id ? { ...lead, quality } : lead));
    if (selectedLead?.id === id) {
      setSelectedLead(prev => prev ? { ...prev, quality } : null);
    }
    triggerAction(`Lead marked as ${quality}`);
  };

  const moveLeadStage = (id: string, newStage: LeadItem['stage']) => {
    setLeads(prev => prev.map(lead => lead.id === id ? { ...lead, stage: newStage } : lead));
    if (selectedLead?.id === id) {
      setSelectedLead(prev => prev ? { ...prev, stage: newStage } : null);
    }
    triggerAction(`Lead stage updated to ${newStage.toUpperCase()}`);
  };

  const filteredLeads = activeStageFilter === 'all' 
    ? leads 
    : leads.filter(l => l.stage === activeStageFilter);

  return (
    <section id="crm" className="py-20 md:py-32 px-6 md:px-12 bg-[#F7F3EA] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25B889]/15 text-[#191919] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Discipline / 05 · Sales Operating System & CRM
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
              LEADS ARE COMING IN.
              <br />
              <span className="text-[#25B889]">FOLLOW-UPS ARE</span>
              <br />
              GETTING <span className="font-editorial italic font-normal text-[#F05A5A]">MISSED?</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              When advertising works, the bottleneck immediately moves to the sales desk. If inquiries sit unanswered in an unmonitored WhatsApp chat, ad spend is incinerated.
              <br /><br />
              We build custom CRM sales boards tailored to your exact business process. Inspired by our live system at <strong>lead-funnel-sa.vercel.app</strong>.
            </p>

            <div className="mt-6 pt-4 border-t border-[#E9E3D8] flex items-center gap-3">
              <button
                onClick={onStartProject}
                className="px-5 py-2.5 bg-[#25B889] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[3px] hover:bg-[#1C966E] transition-colors"
              >
                Get Custom CRM Board
              </button>
              <a
                href="https://lead-funnel-sa.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-display font-bold uppercase text-[#191919] hover:text-[#25B889] transition-colors"
              >
                Live Board Reference <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Live Interactive Lead Board Container */}
        <div className="bg-white border border-[#E9E3D8] rounded-[4px] shadow-sm overflow-hidden mb-12">
          
          {/* Top Bar of the CRM Interface */}
          <div className="p-4 md:p-6 bg-[#FFF9F0] border-b border-[#E9E3D8] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25B889] inline-block animate-ping" />
              <span className="font-display font-bold text-sm md:text-base text-[#191919] uppercase tracking-wide">
                SUPREME ADS SALES BOARD
              </span>
              <span className="text-xs font-sans-ui text-[#191919]/50 hidden sm:inline">
                · Live Lead Routing Engine
              </span>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-sans-ui">
              <button
                onClick={() => setActiveStageFilter('all')}
                className={`px-3 py-1 rounded-[2px] transition-colors ${
                  activeStageFilter === 'all'
                    ? 'bg-[#191919] text-white font-medium'
                    : 'bg-white text-[#191919]/70 hover:bg-[#E9E3D8]'
                }`}
              >
                All Leads ({leads.length})
              </button>
              {PIPELINE_STAGES.slice(0, 4).map(stg => (
                <button
                  key={stg.key}
                  onClick={() => setActiveStageFilter(stg.key)}
                  className={`px-3 py-1 rounded-[2px] transition-colors ${
                    activeStageFilter === stg.key
                      ? 'bg-[#191919] text-white font-medium'
                      : 'bg-white text-[#191919]/70 hover:bg-[#E9E3D8]'
                  }`}
                >
                  {stg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Notification Toast inside CRM */}
          {actionNotice && (
            <div className="bg-[#BFEBD9] text-[#191919] text-xs font-sans-ui font-medium px-4 py-2 border-b border-[#25B889]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#25B889]" />
                <span>{actionNotice}</span>
              </div>
              <span className="text-[10px] text-[#191919]/50 uppercase font-mono">Simulated CRM Event</span>
            </div>
          )}

          {/* Board Grid: Leads List + Selected Lead Detail Drawer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E9E3D8]">
            
            {/* Left 7 Columns: Lead Stream / Kanban List */}
            <div className="lg:col-span-7 p-4 md:p-6 space-y-3 max-h-[520px] overflow-y-auto">
              <div className="flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#191919]/50 pb-2">
                <span>Active Prospects in Funnel</span>
                <span>Click Card to Inspect</span>
              </div>

              {filteredLeads.map(lead => {
                const isSelected = selectedLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 rounded-[2px] border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF9F0] border-[#25B889] shadow-xs ring-1 ring-[#25B889]/30'
                        : 'bg-white hover:bg-[#FFFCF7] border-[#E9E3D8]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-display font-bold text-sm md:text-base text-[#191919]">
                          {lead.name}
                        </div>
                        <div className="text-xs text-[#191919]/70 font-sans-ui font-medium">
                          {lead.company} · <span className="text-[#3155FF]">{lead.service}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-display font-bold uppercase px-2 py-0.5 rounded-[2px] ${
                          lead.quality === 'Hot' ? 'bg-red-100 text-red-700' :
                          lead.quality === 'Warm' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {lead.quality}
                        </span>
                        <span className="text-xs font-mono font-medium text-[#191919] tabular-nums">
                          {lead.budget}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#E9E3D8]/60 flex items-center justify-between text-[11px] font-sans-ui text-[#191919]/60">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25B889]" />
                        <span className="uppercase font-display font-semibold text-[#191919]/80">
                          Stage: {lead.stage.replace('_', ' ')}
                        </span>
                      </div>
                      <span>Follow-up: {lead.lastFollowUp}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right 5 Columns: Lead Action Drawer & WhatsApp Dispatch */}
            <div className="lg:col-span-5 p-6 bg-[#FFFCF7] flex flex-col justify-between">
              {selectedLead ? (
                <div className="space-y-6">
                  <div className="border-b border-[#E9E3D8] pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display font-bold tracking-widest text-[#25B889] uppercase">
                        Lead Dossier · {selectedLead.id}
                      </span>
                      <div className="flex items-center gap-1">
                        {(['Hot', 'Warm', 'Cold'] as const).map(q => (
                          <button
                            key={q}
                            onClick={() => updateLeadQuality(selectedLead.id, q)}
                            className={`px-2 py-0.5 text-[10px] font-display uppercase font-semibold rounded-[2px] transition-colors ${
                              selectedLead.quality === q
                                ? 'bg-[#191919] text-white'
                                : 'bg-white border border-[#E9E3D8] text-[#191919]/60'
                            }`}
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>

                    <h4 className="text-xl font-display font-bold text-[#191919] mt-2">
                      {selectedLead.name}
                    </h4>
                    <div className="text-xs text-[#191919]/70 font-sans-ui">
                      {selectedLead.company} · {selectedLead.phone}
                    </div>
                  </div>

                  {/* Stage Progress Selector */}
                  <div>
                    <label className="text-[11px] font-display font-bold uppercase tracking-wider text-[#191919]/60 block mb-2">
                      Pipeline Stage:
                    </label>
                    <select
                      value={selectedLead.stage}
                      onChange={(e) => moveLeadStage(selectedLead.id, e.target.value as any)}
                      className="w-full text-xs font-sans-ui p-2.5 bg-white border border-[#E9E3D8] rounded-[2px] font-medium text-[#191919] focus:outline-none focus:border-[#25B889]"
                    >
                      {PIPELINE_STAGES.map(s => (
                        <option key={s.key} value={s.key}>{s.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Notes & Context */}
                  <div>
                    <label className="text-[11px] font-display font-bold uppercase tracking-wider text-[#191919]/60 block mb-1">
                      Inquiry Notes & Requirements:
                    </label>
                    <div className="p-3 bg-white border border-[#E9E3D8] rounded-[2px] text-xs font-sans-ui text-[#191919]/80 leading-relaxed">
                      {selectedLead.notes}
                    </div>
                  </div>

                  {/* 1-Click Call & WhatsApp Triggers */}
                  <div className="pt-2 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => triggerAction(`Initiating direct voice call to ${selectedLead.name} (${selectedLead.phone})`)}
                      className="py-2.5 px-3 bg-[#191919] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[2px] hover:bg-[#3155FF] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone size={14} /> Call Lead
                    </button>
                    <button
                      onClick={() => triggerAction(`Launching WhatsApp conversation template with ${selectedLead.name}`)}
                      className="py-2.5 px-3 bg-[#25B889] text-white text-xs font-display font-bold tracking-wider uppercase rounded-[2px] hover:bg-[#1C966E] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-xs text-[#191919]/50">
                  Select a lead from the stream to view action tools.
                </div>
              )}

              <div className="pt-6 border-t border-[#E9E3D8] mt-6 text-[11px] font-sans-ui text-[#191919]/60 flex items-center justify-between">
                <span>Multi-User Team Access</span>
                <span>WhatsApp Business API Ready</span>
              </div>
            </div>

          </div>
        </div>

        {/* CRM Feature Pillar Grid from Prompt */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { label: 'Instant Lead Capture', desc: 'Webhook from Meta form straight to team phones' },
            { label: 'Quality Scoring', desc: 'Pre-screened Hot / Warm / Cold criteria' },
            { label: 'Follow-Up Schedule', desc: 'Daily task queues so zero deals go cold' },
            { label: 'WhatsApp One-Touch', desc: 'Direct message without manual number saving' },
            { label: 'Sales Tracking', desc: 'Clear ROI visibility from ad click to signed invoice' }
          ].map((f, i) => (
            <div key={i} className="p-4 bg-white border border-[#E9E3D8] rounded-[2px]">
              <div className="text-[11px] font-display font-bold text-[#25B889] uppercase">
                0{i + 1} · Feature
              </div>
              <div className="font-display font-bold text-xs md:text-sm text-[#191919] mt-1">
                {f.label}
              </div>
              <div className="text-[11px] text-[#191919]/65 font-sans-ui mt-1 leading-snug">
                {f.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
