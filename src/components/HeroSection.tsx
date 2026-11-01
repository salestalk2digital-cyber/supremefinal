import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, RotateCcw, AlertCircle } from 'lucide-react';
import { ServiceCategory } from '../types';

interface HeroSectionProps {
  onSelectService: (service: ServiceCategory) => void;
  onOpenDiagnostic: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectService,
  onOpenDiagnostic,
  onStartProject,
}) => {
  const [activeHover, setActiveHover] = useState<ServiceCategory | 'growing' | null>(null);

  // Typewriter Letter-by-Letter State
  const line1Full = "LET'S";
  const line2Full = "BUILD";
  const line3Full = "SOMETHING";
  const line4Full = "THAT GROWS.";
  const totalChars = line1Full.length + line2Full.length + line3Full.length + line4Full.length; // 30 chars

  const [charCount, setCharCount] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  // Normal human typing speed: 60ms per letter
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (charCount < totalChars) {
      timer = setTimeout(() => {
        setCharCount((prev) => prev + 1);
      }, 62);
    } else {
      setIsTypingComplete(true);
    }
    return () => clearTimeout(timer);
  }, [charCount, totalChars]);

  const replayTyping = () => {
    setCharCount(0);
    setIsTypingComplete(false);
  };

  const skipToEnd = () => {
    setCharCount(totalChars);
    setIsTypingComplete(true);
  };

  // Slices for each line based on character progression
  const line1Visible = line1Full.slice(0, Math.min(5, Math.max(0, charCount)));
  const line2Visible = line2Full.slice(0, Math.min(5, Math.max(0, charCount - 5)));
  const line3Visible = line3Full.slice(0, Math.min(9, Math.max(0, charCount - 10)));
  const line4Visible = line4Full.slice(0, Math.min(11, Math.max(0, charCount - 19)));

  const isCurrentLine1 = charCount <= 5;
  const isCurrentLine2 = charCount > 5 && charCount <= 10;
  const isCurrentLine3 = charCount > 10 && charCount <= 19;
  const isCurrentLine4 = charCount > 19;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-6 md:px-12 pt-8 pb-16 bg-[#191919] text-[#FFF9F0] border-b border-[#252525] overflow-hidden select-none">
      
      {/* Background Subtle Paper/Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFF9F0 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Editorial Label Strip */}
      <div className="max-w-[1440px] w-full mx-auto flex flex-wrap items-center justify-between text-xs md:text-sm font-sans-ui text-[#FFF9F0]/70 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold tracking-widest text-[#FFF9F0] uppercase">
            SUPREME ADS / 2026
          </span>
          <span className="text-white/20">·</span>
          <span>Delhi, India</span>
          <span className="text-white/20">·</span>
          <span className="hidden sm:inline text-[#FFC4A8] font-editorial italic text-base">
            Turn Clicks Into Customers
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <button
            onClick={replayTyping}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10"
            title="Replay Letter-by-Letter Typing"
          >
            <RotateCcw size={12} />
            <span className="text-[11px] font-display uppercase tracking-wider">Replay Typing</span>
          </button>
          <button
            onClick={() => onSelectService('meta_ads')}
            className="hidden md:inline text-[#C8FF38] hover:underline font-display font-semibold uppercase tracking-wider text-[11px]"
          >
            Explore Systems ↓
          </button>
        </div>
      </div>

      {/* Main Hero Viewport Composition Matching User's Exact Screenshot */}
      <div className="max-w-[1440px] w-full mx-auto my-auto py-8 md:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Left Column: Massive Editorial Display Typography with Letter-by-Letter Typing */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Kicker in Acid Lime matching screenshot */}
            <div className="text-[12px] md:text-[14px] font-display font-bold tracking-[0.2em] text-[#C8FF38] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8FF38] inline-block animate-pulse" />
              BEGIN COLLABORATION / 2026
            </div>

            {/* Clickable area to skip or view */}
            <h1
              onClick={!isTypingComplete ? skipToEnd : replayTyping}
              className="font-display font-bold tracking-[-0.055em] leading-[0.88] text-[clamp(58px,9.2vw,160px)] uppercase text-[#FFF9F0] cursor-pointer"
              title={isTypingComplete ? "Click to replay typing animation" : "Click to complete typing immediately"}
            >
              {/* Line 1: LET'S */}
              <span className="block min-h-[0.9em]">
                {line1Visible}
                {isCurrentLine1 && (
                  <span className="inline-block w-[0.06em] h-[0.82em] bg-[#C8FF38] ml-1 animate-pulse align-baseline" />
                )}
              </span>

              {/* Line 2: BUILD */}
              <span className="block min-h-[0.9em]">
                {line2Visible}
                {isCurrentLine2 && (
                  <span className="inline-block w-[0.06em] h-[0.82em] bg-[#C8FF38] ml-1 animate-pulse align-baseline" />
                )}
              </span>

              {/* Line 3: SOMETHING in Instrument Serif Italic & Peach Color */}
              <span className="block min-h-[0.9em] font-editorial italic font-normal text-[#FFC4A8] tracking-[-0.02em]">
                {line3Visible}
                {isCurrentLine3 && (
                  <span className="inline-block w-[0.06em] h-[0.82em] bg-[#FFC4A8] ml-1 animate-pulse align-baseline" />
                )}
              </span>

              {/* Line 4: THAT GROWS. */}
              <span className="block min-h-[0.9em]">
                {line4Visible}
                {isCurrentLine4 && !isTypingComplete && (
                  <span className="inline-block w-[0.06em] h-[0.82em] bg-[#C8FF38] ml-1 animate-pulse align-baseline" />
                )}
                {isTypingComplete && (
                  <span className="inline-block w-[0.06em] h-[0.82em] bg-white/20 ml-1 animate-ping align-baseline" />
                )}
              </span>
            </h1>

          </div>

          {/* Right Column: Statement, Primary CTA, and Interactive Services */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6 lg:pb-3">
            
            <p className="text-sm md:text-base font-sans-ui text-[#FFF9F0]/80 leading-relaxed max-w-md">
              Whether you need to scale Meta ads profitably, build a high-performance web platform, or deploy our custom CRM lead board — we are ready to engineer your growth.
            </p>

            {/* Primary Action Button Matching Screenshot */}
            <div>
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-8 py-4 bg-[#3155FF] hover:bg-[#2040E0] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] transition-all flex items-center justify-between gap-6 shadow-md"
                data-cursor="START"
              >
                <span>START A PROJECT BRIEF</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Asymmetric Service Gateway Pills */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="text-[11px] font-display font-bold uppercase tracking-wider text-white/50 mb-2">
                Explore Growth Disciplines:
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-display uppercase tracking-wider font-semibold">
                <button
                  onClick={() => onSelectService('meta_ads')}
                  className="p-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-[2px] text-left transition-colors flex items-center justify-between text-[#CFC4FF]"
                >
                  <span>01. META ADS</span>
                  <ArrowRight size={13} />
                </button>
                <button
                  onClick={() => onSelectService('d2c')}
                  className="p-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-[2px] text-left transition-colors flex items-center justify-between text-[#FFC4A8]"
                >
                  <span>02. D2C BRANDS</span>
                  <ArrowRight size={13} />
                </button>
                <button
                  onClick={() => onSelectService('website')}
                  className="p-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-[2px] text-left transition-colors flex items-center justify-between text-[#CFC4FF]"
                >
                  <span>03. WEB / SOFT</span>
                  <ArrowRight size={13} />
                </button>
                <button
                  onClick={() => onSelectService('crm')}
                  className="p-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-[2px] text-left transition-colors flex items-center justify-between text-[#BFEBD9]"
                >
                  <span>04. SALES CRM</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* Special Diagnostic Trigger */}
              <button
                onClick={onOpenDiagnostic}
                className="w-full mt-1 p-2.5 bg-[#F05A5A]/20 hover:bg-[#F05A5A]/30 border border-[#F05A5A]/40 rounded-[2px] text-left transition-colors flex items-center justify-between text-xs font-display uppercase font-bold text-[#FFF9F0]"
              >
                <div className="flex items-center gap-2">
                  <AlertCircle size={14} className="text-[#F05A5A]" />
                  <span>MY BUSINESS ISN'T GROWING?</span>
                </div>
                <span className="text-[10px] text-[#F05A5A] uppercase tracking-widest bg-black/30 px-1.5 py-0.5 rounded">
                  Diagnose
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Editorial Strip */}
      <div className="max-w-[1440px] w-full mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans-ui text-[#FFF9F0]/60 relative z-10">
        <div className="flex items-center gap-6">
          <div>
            <span className="font-semibold text-white">Supreme Ads</span> · Delhi NCR / Pan-India
          </div>
          <div className="hidden md:inline">
            <span className="text-[#C8FF38]">Performance Advertising & Systems</span> · Turn Clicks Into Customers
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-white/40">
            {charCount < totalChars ? `TYPING... ${charCount}/${totalChars}` : 'READY · 2026'}
          </span>
        </div>
      </div>

    </section>
  );
};
