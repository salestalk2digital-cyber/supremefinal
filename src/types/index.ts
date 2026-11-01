export type ServiceCategory = 'meta_ads' | 'd2c' | 'website' | 'social' | 'crm' | 'diagnostic';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  serviceType: ServiceCategory;
  location: string;
  tagline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  accentColor: string;
  deliverables: string[];
  clientQuote?: string;
  verifiedOnly?: boolean;
}

export interface LeadItem {
  id: string;
  name: string;
  company: string;
  service: string;
  budget: string;
  stage: 'new' | 'contacted' | 'follow_up' | 'interested' | 'discussion' | 'sale' | 'closed';
  quality: 'Hot' | 'Warm' | 'Cold';
  phone: string;
  email: string;
  lastFollowUp: string;
  notes: string;
}

export interface GrowthIssue {
  id: string;
  label: string;
  brokenStage: string;
  impact: string;
  rootCause: string;
  solution: string;
  supremeSystem: string[];
}
