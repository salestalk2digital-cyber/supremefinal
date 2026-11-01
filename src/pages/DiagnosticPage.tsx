import React from 'react';
import { GrowthDiagnosticSection } from '../components/GrowthDiagnosticSection';
import { useNavigation } from '../context/NavigationContext';

export const DiagnosticPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F05A5A]/15 text-[#191919] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Diagnostic Audit · Funnel Health Check
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] uppercase tracking-[-0.04em] leading-[0.92]">
              WHERE IS
              <br />
              <span className="text-[#F05A5A]">GROWTH BREAKING</span>
              <br />
              IN YOUR BUSINESS?
            </h1>
            <p className="mt-6 text-base md:text-lg font-sans-ui text-[#191919]/80 leading-relaxed">
              Customer acquisition is a sequential chain: Reach → Interest → Enquiry → Qualified Lead → Follow-up → Sale → Repeat. If one link snaps, ad spend burns out. Select your symptom below to pinpoint the leak.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Growth Diagnostic */}
      <GrowthDiagnosticSection
        onStartProject={(context) => navigateTo('contact', context)}
      />
    </div>
  );
};
