import type { Industry } from '@/types';

/**
 * Industries describe what we can build for a sector. They are not claims of
 * past sector experience — keep the wording that way when editing.
 */
export const industries: Industry[] = [
  {
    slug: 'saas-technology',
    title: 'SaaS & Technology',
    summary: 'Product engineering for software companies that need to ship and scale.',
    challenges: ['Shipping features without slowing the core product', 'Multi-tenant data and billing', 'Keeping performance steady as accounts grow'],
    solutions: ['SaaS platforms and admin consoles', 'Subscription and usage billing', 'Public APIs and integrations', 'Performance and reliability work'],
  },
  {
    slug: 'startups',
    title: 'Startups',
    summary: 'A focused first version, built so the second version is not a rewrite.',
    challenges: ['Limited time and budget', 'Uncertain requirements', 'No in-house engineering team yet'],
    solutions: ['MVPs and prototypes', 'Customer portals', 'Technical architecture for the next stage', 'Handover to a future team'],
  },
  {
    slug: 'digital-agencies',
    title: 'Digital Agencies',
    summary: 'White-label engineering behind the agency’s design and client relationships.',
    challenges: ['Projects that outgrow in-house capacity', 'Complex backends behind marketing sites', 'Tight client deadlines'],
    solutions: ['White-label web applications', 'CMS and API integrations', 'Backend and cloud setup', 'Scoped development support'],
  },
  {
    slug: 'retail-ecommerce',
    title: 'Retail & E-commerce',
    summary: 'Commerce experiences and the operational tools behind them.',
    challenges: ['Inventory and orders across channels', 'Slow storefronts that lose sales', 'Manual reporting'],
    solutions: ['E-commerce applications', 'Order and inventory tools', 'Sales dashboards', 'Checkout and catalogue performance'],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality & Restaurants',
    summary: 'Booking, ordering and operations software for busy front-of-house teams.',
    challenges: ['Bookings and orders spread across tools', 'Peak-hour reliability', 'Limited staff time for admin'],
    solutions: ['Booking and table management', 'Online ordering platforms', 'Kitchen and staff dashboards', 'Customer messaging automation'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    summary: 'Client portals and internal tools that remove repetitive admin.',
    challenges: ['Document-heavy workflows', 'Client updates by email and spreadsheet', 'Knowledge locked in files'],
    solutions: ['Client portals', 'Workflow and approval systems', 'Internal management tools', 'AI-assisted document search'],
  },
];
