import { GrowthIssue } from '../types';

export const GROWTH_STAGES = [
  { key: 'reach', label: 'REACH' },
  { key: 'interest', label: 'INTEREST' },
  { key: 'enquiry', label: 'ENQUIRY' },
  { key: 'qualified_lead', label: 'QUALIFIED LEAD' },
  { key: 'follow_up', label: 'FOLLOW-UP' },
  { key: 'sale', label: 'SALE' },
  { key: 'repeat', label: 'REPEAT' }
] as const;

export const GROWTH_ISSUES: GrowthIssue[] = [
  {
    id: 'people-see-dont-enquire',
    label: "PEOPLE SEE US BUT DON'T ENQUIRE",
    brokenStage: 'interest',
    impact: 'High Ad Views, Low Click-Through & Zero Intent',
    rootCause: 'Weak creative hook and vague offer. Ads look like generic digital posters rather than speaking directly to a urgent, tangible customer pain.',
    solution: 'Re-engineer ad hooks around human problem angles, clarify the direct offer, and test native user-generated video vs. cinematic social formats.',
    supremeSystem: [
      'Hook testing across 4 emotional angles',
      'Friction-free native lead form with value exchange',
      'Landing page headline match to prevent message mismatch'
    ]
  },
  {
    id: 'enquiries-dont-close',
    label: "ENQUIRIES DON'T CLOSE",
    brokenStage: 'qualified_lead',
    impact: 'Wasted Sales Rep Energy & Disillusionment',
    rootCause: 'Unqualified leads. The ad made too many broad promises or offered freebies, resulting in window-shoppers who have neither the budget nor the urgency to buy.',
    solution: 'Introduce qualifying friction into the ad lead form or landing page (budget dropdown, timeline selector, specific service requirements). Only pass vetted prospects to the sales team.',
    supremeSystem: [
      'Multi-step qualification questions before submission',
      'Dynamic ticket-size filtering',
      'Immediate calendar booking redirect or pre-call video'
    ]
  },
  {
    id: 'ads-are-too-expensive',
    label: 'ADS ARE TOO EXPENSIVE',
    brokenStage: 'reach',
    impact: 'High CPL, Bleeding Budget & Negative ROAS',
    rootCause: 'Audience fatigue, broad algorithmic confusion, or low ad relevance score. Paying Meta to bid against wrong competitors with tired creatives.',
    solution: 'Structured creative testing (CBO + ABO separation), horizontal ad angle diversification, and lookalike modeling based strictly on closed buyers—not casual page likers.',
    supremeSystem: [
      'Strict creative testing sandbox before scaling',
      'Rapid iteration of winning thumbnails & first 3-second cuts',
      'Budget allocation shifted to top-performing 20% angles'
    ]
  },
  {
    id: 'content-active-not-memorable',
    label: 'CONTENT IS ACTIVE BUT NOT MEMORABLE',
    brokenStage: 'interest',
    impact: 'Posting Fatigue with Stagnant Follower Growth & Zero Sales',
    rootCause: 'Treating social media like an announcement board. Posting template graphics that look like corporate slide decks without editorial point of view or genuine entertainment.',
    solution: 'Switch to human-first editorial production: high-definition reels, founder POV videos, behind-the-scenes craft, and lifestyle aesthetic that makes your brand culturally relevant.',
    supremeSystem: [
      '18–20 curated posts per month with editorial cadence',
      '2 dedicated monthly video shoots with director styling',
      'Trending audio curation & crisp editorial captions'
    ]
  },
  {
    id: 'ads-are-inconsistent',
    label: 'ADS ARE INCONSISTENT',
    brokenStage: 'sale',
    impact: 'Rollercoaster Months: Great Week Followed by Two Weeks of Silence',
    rootCause: 'Ad fatigue and lack of creative pipeline. When a winning ad burns out, there is no validated challenger creative ready to take over budget spend.',
    solution: 'Continuous creative production cycle. Fresh hooks, fresh formats, and fresh angles introduced weekly so Meta algorithms always have fresh fuel.',
    supremeSystem: [
      'Continuous weekly creative drop pipeline',
      'Automated rule alerts for rising CPA before budget drains',
      'Evergreen retargeting layers that nurture mid-funnel prospects'
    ]
  },
  {
    id: 'follow-ups-missed',
    label: 'LEADS COME IN BUT FOLLOW-UPS ARE MISSED',
    brokenStage: 'follow_up',
    impact: 'Over 60% of Acquired Leads Go Cold Within 24 Hours',
    rootCause: 'Managing inquiries in WhatsApp chat lists, chaotic spreadsheets, or manual notebooks. No centralized lead board, no automated reminder, no assigned ownership.',
    solution: 'Supreme Ads CRM operating system. Instant WhatsApp notification on new lead, one-click call trigger, follow-up calendar, and lead stage tracking.',
    supremeSystem: [
      'Direct API webhook from Meta Leads into CRM Lead Board',
      'Automated instant WhatsApp confirmation to the prospect',
      'Daily follow-up queue for sales reps with status tags'
    ]
  }
];
