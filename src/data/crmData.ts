import { LeadItem } from '../types';

export const INITIAL_LEADS: LeadItem[] = [
  {
    id: 'ld-101',
    name: 'Kabir Malhotra',
    company: 'The Heritage Haveli',
    service: 'Meta Ads & Booking Funnel',
    budget: '₹60,000 / mo',
    stage: 'new',
    quality: 'Hot',
    phone: '+91 98101 22340',
    email: 'events@heritagehaveli.in',
    lastFollowUp: 'Today, 10:15 AM',
    notes: 'Inquired from Meta Lead Form for Winter Wedding bookings. Seeking ~25 bookings.'
  },
  {
    id: 'ld-102',
    name: 'Ananya Sharma',
    company: 'Aura Fine Jewels',
    service: 'D2C E-commerce & Ads',
    budget: '₹1,20,000 / mo',
    stage: 'contacted',
    quality: 'Hot',
    phone: '+91 98711 44521',
    email: 'ananya@aurajewels.com',
    lastFollowUp: 'Yesterday, 4:30 PM',
    notes: 'Spoke on call. Sent catalog deck. Requested ROAS expectations for festive launch.'
  },
  {
    id: 'ld-103',
    name: 'Vikramaditya Rao',
    company: 'Nexus Logistics Tech',
    service: 'Custom Software & CRM',
    budget: '₹2,50,000',
    stage: 'follow_up',
    quality: 'Warm',
    phone: '+91 99990 12876',
    email: 'v.rao@nexuslog.io',
    lastFollowUp: '2 days ago',
    notes: 'Follow-up scheduled today at 3:00 PM for custom dispatch dashboard architecture.'
  },
  {
    id: 'ld-104',
    name: 'Meera Singhania',
    company: 'Singhania Couture',
    service: 'Social Media Management',
    budget: '₹45,000 / mo',
    stage: 'interested',
    quality: 'Warm',
    phone: '+91 98112 88401',
    email: 'meera@singhaniacouture.in',
    lastFollowUp: '3 days ago',
    notes: 'Needs 2 video shoots per month in South Delhi studio. Reviewed sample reels.'
  },
  {
    id: 'ld-105',
    name: 'Rohan Sethi',
    company: 'Pulse Fitness Studios',
    service: 'Meta Ads & Lead Gen',
    budget: '₹50,000 / mo',
    stage: 'discussion',
    quality: 'Hot',
    phone: '+91 97110 56219',
    email: 'rohan@pulsefit.club',
    lastFollowUp: 'Yesterday',
    notes: 'Proposal sent. Reviewing CPL targets (~₹120) and walk-in offer creative.'
  },
  {
    id: 'ld-106',
    name: 'Devika Jindal',
    company: 'The Vybe Setters Live',
    service: 'Performance Marketing',
    budget: '₹48,000 / mo',
    stage: 'sale',
    quality: 'Hot',
    phone: '+91 98188 90312',
    email: 'management@thevybesetters.com',
    lastFollowUp: 'Active Client',
    notes: 'Generated 10+ bookings with ₹40K+ ticket size at ~₹100 CPL. Retainer extended.'
  },
  {
    id: 'ld-107',
    name: 'Alok Tandon',
    company: 'Tandon Medical Group',
    service: 'Website & CRM Funnel',
    budget: '₹1,80,000',
    stage: 'closed',
    quality: 'Warm',
    phone: '+91 98991 76543',
    email: 'director@tandonmedical.org',
    lastFollowUp: 'Completed Onboarding',
    notes: 'Portal delivered with patient appointment WhatsApp reminders and lead board.'
  }
];

export const PIPELINE_STAGES = [
  { key: 'new', label: 'NEW LEAD', color: 'border-blue-400 bg-blue-50/60 text-blue-900' },
  { key: 'contacted', label: 'CONTACTED', color: 'border-amber-400 bg-amber-50/60 text-amber-900' },
  { key: 'follow_up', label: 'FOLLOW-UP', color: 'border-orange-400 bg-orange-50/60 text-orange-900' },
  { key: 'interested', label: 'INTERESTED', color: 'border-purple-400 bg-purple-50/60 text-purple-900' },
  { key: 'discussion', label: 'DISCUSSION', color: 'border-indigo-400 bg-indigo-50/60 text-indigo-900' },
  { key: 'sale', label: 'SALE / CONVERTED', color: 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-semibold' },
  { key: 'closed', label: 'CLOSED', color: 'border-stone-400 bg-stone-100 text-stone-700' }
] as const;
