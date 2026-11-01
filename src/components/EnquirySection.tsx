import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

interface EnquirySectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialService, initialMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService || 'Meta Ads Management',
    monthlyBudget: '₹50,000 – ₹1,50,000 / mo',
    website: '',
    crmUsers: '4–10 Users',
    message: initialMessage || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required for WhatsApp routing';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid business email is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const isCrmSelected = formData.service.includes('CRM') || formData.service.includes('Full Growth Engine');

  return (
    <section id="enquiry" className="py-24 md:py-36 px-6 md:px-12 bg-[#FFF9F0] border-b border-[#E9E3D8] paper-grain">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3155FF]/10 text-[#3155FF] rounded-[2px] text-xs font-display font-bold uppercase tracking-widest mb-4">
              Direct Ingestion / 10 · Project Consultation
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-[#191919] tracking-[-0.04em] leading-[0.92] uppercase">
              LET'S TALK
              <br />
              <span className="text-[#3155FF]">REAL NUMBERS</span>
              <br />
              & <span className="font-editorial italic font-normal text-[#F47A38]">CLEAR</span> OUTCOMES.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="text-sm md:text-base font-sans-ui text-[#191919]/80 leading-relaxed">
              No generic sales pitch. You will speak directly with an advertising and systems strategist in Delhi.
              <br /><br />
              Fill out this briefing conversation, or message us immediately on WhatsApp for a same-day review of your ad spend.
            </p>

            <div className="mt-6 pt-4 border-t border-[#E9E3D8] flex flex-wrap items-center gap-4">
              <span className="text-xs font-sans-ui text-[#191919]/70 font-semibold">Immediate Priority Dispatch:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919667173693?text=Hi%20Supreme%20Ads,%20I%20would%20like%20to%20discuss%20my%20advertising%20and%20systems%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-xs font-display font-extrabold uppercase rounded-[3px] shadow-xs hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageSquare size={14} /> WhatsApp: 9667173693
                </a>
                <a
                  href="tel:+919667173693"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase text-[#3155FF] hover:underline"
                >
                  <PhoneCall size={14} /> Call: +91 9667173693
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Conversational Enquiry Container */}
        <div className="bg-white border border-[#E9E3D8] rounded-[4px] p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center max-w-lg mx-auto space-y-4">
              <div className="w-14 h-14 bg-[#25B889]/15 text-[#25B889] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#191919] uppercase">
                INQUIRY RECEIVED.
              </h3>
              <p className="text-sm font-sans-ui text-[#191919]/80 leading-relaxed">
                Thank you, <strong>{formData.name}</strong> from <strong>{formData.company || 'your company'}</strong>. Your brief has been dispatched straight to our Supreme Ads CRM. A senior partner will reach out via WhatsApp and phone within 4 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-display font-bold uppercase tracking-wider text-[#3155FF] hover:underline"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                    01. YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-4 py-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-sm font-sans-ui focus:outline-none focus:border-[#3155FF] transition-colors"
                  />
                  {errors.name && <span className="text-[11px] text-red-600 mt-1 block font-sans-ui">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                    02. COMPANY / BRAND NAME
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Heritage Jewels or The Vybe Collective"
                    className="w-full px-4 py-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-sm font-sans-ui focus:outline-none focus:border-[#3155FF] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                    03. PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98101 00000"
                    className="w-full px-4 py-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-sm font-sans-ui focus:outline-none focus:border-[#3155FF] transition-colors"
                  />
                  {errors.phone && <span className="text-[11px] text-red-600 mt-1 block font-sans-ui">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                    04. BUSINESS EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="founder@yourbrand.com"
                    className="w-full px-4 py-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-sm font-sans-ui focus:outline-none focus:border-[#3155FF] transition-colors"
                  />
                  {errors.email && <span className="text-[11px] text-red-600 mt-1 block font-sans-ui">{errors.email}</span>}
                </div>
              </div>

              {/* Row 3: Primary Service Required */}
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                  05. WHAT SERVICE DO YOU REQUIRE?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {[
                    'Meta Ads Management',
                    'D2C Brand Marketing',
                    'Website / Software Dev',
                    'Social Media Retainer',
                    'Custom Sales CRM',
                    'Full Growth Engine'
                  ].map(srv => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`p-3 text-xs font-display font-bold uppercase rounded-[2px] border text-left transition-all ${
                        formData.service === srv
                          ? 'bg-[#191919] text-white border-[#191919]'
                          : 'bg-[#FFF9F0] text-[#191919]/80 border-[#E9E3D8] hover:bg-white'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Budget & Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                    06. MONTHLY AD SPEND / ESTIMATED BUDGET
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={e => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-sm font-sans-ui focus:outline-none focus:border-[#3155FF]"
                  >
                    <option value="Under ₹50,000 / mo">Under ₹50,000 / mo</option>
                    <option value="₹50,000 – ₹1,50,000 / mo">₹50,000 – ₹1,50,000 / mo</option>
                    <option value="₹1,50,000 – ₹5,00,000 / mo">₹1,50,000 – ₹5,00,000 / mo</option>
                    <option value="₹5,00,000+ / mo">₹5,00,000+ / mo (High Volume)</option>
                    <option value="Undecided / Needs Consultation">Undecided / Needs Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                    07. CURRENT WEBSITE OR INSTAGRAM LINK
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourbrand.com or @yourinstagram"
                    className="w-full px-4 py-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-sm font-sans-ui focus:outline-none focus:border-[#3155FF] transition-colors"
                  />
                </div>
              </div>

              {/* Conditional CRM users selector if CRM is selected */}
              {isCrmSelected && (
                <div className="p-4 bg-[#BFEBD9]/20 border border-[#25B889]/30 rounded-[2px]">
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                    FOR CRM: NUMBER OF SALES USERS
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['1–3', '4–10', '11–25', '25+', 'Custom'].map(opt => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, crmUsers: opt })}
                        className={`px-4 py-2 text-xs font-display font-bold uppercase rounded-[2px] border transition-colors ${
                          formData.crmUsers === opt
                            ? 'bg-[#25B889] text-white border-[#25B889]'
                            : 'bg-white border-[#E9E3D8] text-[#191919]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Row 5: Message */}
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#191919] mb-2">
                  08. TELL US ABOUT YOUR CORE OBJECTIVE OR CURRENT BOTTLENECK
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you are selling, what your historical CPL has been, or what specific challenge you want Supreme Ads to resolve..."
                  className="w-full px-4 py-3 bg-[#FFF9F0] border border-[#E9E3D8] rounded-[2px] text-sm font-sans-ui focus:outline-none focus:border-[#3155FF] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#E9E3D8]">
                <div className="flex items-center gap-2 text-xs text-[#191919]/60 font-sans-ui">
                  <ShieldCheck size={16} className="text-[#25B889]" />
                  <span>Strict NDA. Zero spam. We reply directly with strategic insight.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#191919] text-white text-xs font-display font-bold tracking-widest uppercase rounded-[3px] hover:bg-[#3155FF] transition-colors shadow-sm flex items-center justify-center gap-2"
                  data-cursor="SUBMIT"
                >
                  Submit Project Brief <ArrowRight size={15} />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
