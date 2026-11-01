import React from 'react';

export const ClientMarquee: React.FC = () => {
  const CLIENTS = [
    { name: 'DREAM WEDDINGS BY TRIPN', tag: 'Luxury Weddings', metric: '₹1.2Cr Pipeline' },
    { name: 'THE VYBE SETTERS', tag: 'Live Music', metric: '10+ Bookings @ ₹100 CPL' },
    { name: 'SUGAR MELLOW', tag: 'D2C Confectionery', metric: '+45% AOV Lift' },
    { name: 'THE VIBGYOR', tag: 'Fashion Production', metric: '18.4K Reel Reach' },
    { name: 'ABHI EVENTS & DECORS', tag: 'Stage Decor', metric: 'Pre-Qualified Leads' },
    { name: 'SWASTIK ENTERTAINMENTS', tag: 'Concert Ticketing', metric: '<0.8s Web Checkout' },
    { name: 'SPIRITUAL MELODIES BY ANKIT', tag: 'Devotional Arts', metric: 'Cult Follower Base' }
  ];

  return (
    <div className="py-12 md:py-16 bg-[#191919] text-[#FFF9F0] overflow-hidden border-y border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto px-6 mb-6 flex items-center justify-between text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#C8FF38]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8FF38] animate-ping" />
          PORTFOLIO WALL · REAL BRANDS & RESULTS
        </span>
        <span className="text-white/60 font-mono text-[11px] hidden sm:inline">
          CONTINUOUS VERIFIED CLIENT ROSTER
        </span>
      </div>

      <div className="relative w-full overflow-hidden py-2">
        {/* Seamless Infinite Marquee Track (Moving Smoothly Across Screen) */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {CLIENTS.concat(CLIENTS).concat(CLIENTS).map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <span className="text-2xl md:text-4xl font-display font-extrabold uppercase tracking-tight text-[#FFF9F0] hover:text-[#3155FF] transition-colors cursor-default">
                {item.name}
              </span>
              <span className="text-xs font-sans-ui font-bold text-[#FFC4A8] border border-[#FFC4A8]/40 px-2.5 py-0.5 rounded-[2px] uppercase">
                {item.tag}
              </span>
              <span className="text-xs font-mono font-bold text-[#C8FF38] bg-white/5 px-2 py-0.5 rounded-[2px]">
                {item.metric}
              </span>
              <span className="text-white/20 text-2xl font-light">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
