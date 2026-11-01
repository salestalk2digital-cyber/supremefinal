import React from 'react';
import { PhilosophySection } from '../components/PhilosophySection';
import { EcosystemSection } from '../components/EcosystemSection';
import { useNavigation } from '../context/NavigationContext';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';

export const PhilosophyPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-0">
      {/* Philosophy Main Section */}
      <PhilosophySection onStartProject={() => navigateTo('contact')} />

      {/* Agency Credo & Delhi Studio Context */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FFFCF7] border-b border-[#E9E3D8] paper-grain">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-display font-bold uppercase tracking-widest text-[#3155FF]">
                Behind The Studio · Supreme Ads
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#191919] uppercase tracking-tight">
                HUMAN CREATIVITY.
                <br />
                ENGINEERING DISCIPLINE.
              </h2>
              <p className="text-base font-sans-ui text-[#191919]/80 leading-relaxed">
                We started Supreme Ads because the advertising industry was flooded with two useless extremes: creative agencies that produce pretty graphics with zero sales tracking, and media-buying agencies that run spammy ₹20 lead forms that burn out your sales reps.
              </p>
              <p className="text-sm font-sans-ui text-[#191919]/75 leading-relaxed">
                We unite high-fashion art direction, cinema video production in Delhi NCR, modern web systems coded in React, and our proprietary CRM lead board into one single, cohesive growth apparatus.
              </p>

              <div className="pt-4 flex items-center gap-6 text-xs font-display uppercase tracking-wider text-[#191919]">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#3155FF]" />
                  <span>Delhi NCR, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#25B889]" />
                  <span>Verified Client Outcomes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[4px] p-8 md:p-10 space-y-6">
              <h3 className="text-xl font-display font-bold uppercase text-[#191919]">
                Our Guiding Operating Principles
              </h3>

              <div className="space-y-4">
                {[
                  { title: "No Cheap Vanity Metrics", desc: "We track qualified leads, booking rates, and paid customer invoices—not hollow impressions or accidental clicks." },
                  { title: "We Design It AND Build It", desc: "No outsourced handoffs. Our internal team handles creative direction, videography, copy, and full-stack software code." },
                  { title: "Commercial Adjacency", desc: "Ads are only as good as the speed of your follow-up. We integrate marketing with sales execution." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#E9E3D8] rounded-[2px]">
                    <div className="font-display font-bold text-sm text-[#191919] uppercase">
                      0{idx + 1}. {item.title}
                    </div>
                    <div className="text-xs text-[#191919]/70 font-sans-ui mt-1 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <EcosystemSection />
    </div>
  );
};
