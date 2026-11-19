import type { Project, ProjectKind } from '@/types';

export const kindLabel: Record<ProjectKind, string> = {
  concept: 'Concept project',
  independent: 'Independent product',
  client: 'Client project',
};

export const kindNote: Record<ProjectKind, string> = {
  concept:
    'This is a concept project: a product we designed and documented to show how we approach the problem. It was not built for a client, and it has no users or results to report.',
  independent: 'An independent product designed and built by Austenine.',
  client: 'Client work, published with the client’s permission.',
};

/**
 * Replace or extend with genuine work. Never present employer projects as
 * Austenine client projects, and never add metrics you cannot evidence.
 */
export const projects: Project[] = [
  {
    slug: 'ledgerline',
    title: 'Ledgerline',
    kind: 'concept',
    category: 'SaaS platform',
    summary: 'Multi-tenant subscription billing and invoicing for small software companies.',
    overview:
      'Ledgerline is a billing back office for SaaS businesses: plans, subscriptions, invoices and dunning in one place, with an API the product calls whenever a customer upgrades, downgrades or cancels.',
    problem:
      'Early SaaS teams often manage billing with spreadsheets and payment-provider dashboards. Proration, failed payments and plan changes are handled by hand, which is slow and easy to get wrong.',
    solution:
      'A multi-tenant web application with a typed billing API, a scheduled job system for renewals and retries, and an admin console for finance teams. All money is stored as integer minor units, and every change to a subscription is recorded as an event.',
    architecture: [
      { name: 'Web app', detail: 'Next.js admin console with role-based access per tenant.' },
      { name: 'Billing API', detail: 'Node.js and Express REST API, versioned and idempotent.' },
      { name: 'Job runner', detail: 'Redis-backed queue for renewals, retries and reminder emails.' },
      { name: 'Data', detail: 'PostgreSQL with row-level tenant isolation and an append-only event table.' },
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker'],
    features: ['Plans, add-ons and proration', 'Invoice generation', 'Failed-payment retry schedule', 'Tenant-scoped audit log', 'Idempotent billing API'],
    decisions: [
      { title: 'Integer money', body: 'Amounts are stored in minor units, never floats, so totals and proration are exact.' },
      { title: 'Events, not overwrites', body: 'Subscription changes append events, giving a complete history for support and audits.' },
      { title: 'Idempotency keys', body: 'Every write endpoint accepts a key, so a retried request never bills twice.' },
    ],
    visual: 'billing',
  },
  {
    slug: 'tablepoint',
    title: 'Tablepoint',
    kind: 'concept',
    category: 'Business management system',
    summary: 'Table booking and online ordering for independent restaurants.',
    overview:
      'Tablepoint combines reservations, online orders and a live kitchen view in one system that a small restaurant team can run from a tablet.',
    problem:
      'Independent restaurants juggle a booking tool, an ordering platform and paper tickets. Double bookings and missed orders happen during exactly the hours that matter most.',
    solution:
      'A single application with a public booking and ordering site, a staff view of tables and orders that updates in real time, and simple reports for the owner.',
    architecture: [
      { name: 'Guest site', detail: 'Next.js pages for booking and ordering, optimised for mobile.' },
      { name: 'Staff app', detail: 'Tablet-first interface that receives live updates.' },
      { name: 'API', detail: 'Node.js REST API with availability rules enforced in the database.' },
      { name: 'Data', detail: 'PostgreSQL with exclusion constraints to prevent overlapping bookings.' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    features: ['Table availability and booking', 'Online ordering', 'Live kitchen and floor view', 'Daily covers and order reports'],
    decisions: [
      { title: 'Constraints in the database', body: 'Overlapping bookings are rejected by PostgreSQL itself, so a race between two guests cannot double-book a table.' },
      { title: 'Tablet first', body: 'Staff screens are designed for touch and glanceability during service, not for a desktop.' },
    ],
    visual: 'booking',
  },
  {
    slug: 'pulseboard',
    title: 'Pulseboard',
    kind: 'concept',
    category: 'Analytics dashboard',
    summary: 'An operations dashboard that brings metrics from several tools into one view.',
    overview:
      'Pulseboard pulls data from the tools a business already uses, stores it in one model and presents the handful of numbers a team checks every morning.',
    problem:
      'Operational data lives in separate tools, so answering a simple question means exporting spreadsheets and reconciling them by hand.',
    solution:
      'Scheduled connectors load data into PostgreSQL, a small API serves pre-aggregated metrics, and a fast dashboard shows trends with drill-down to the underlying records.',
    architecture: [
      { name: 'Connectors', detail: 'Scheduled Node.js jobs that fetch and normalise source data.' },
      { name: 'Warehouse', detail: 'PostgreSQL tables with daily rollups for fast queries.' },
      { name: 'API', detail: 'REST endpoints serving aggregated metrics, cached in Redis.' },
      { name: 'Dashboard', detail: 'Next.js interface with filters, trends and record drill-down.' },
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    features: ['Scheduled data connectors', 'Daily rollups', 'Trend and comparison views', 'Drill-down to source records'],
    decisions: [
      { title: 'Pre-aggregate', body: 'Daily rollups keep the dashboard fast regardless of how much raw data accumulates.' },
      { title: 'Few metrics, well defined', body: 'Each metric has a written definition, so everyone reads the same number the same way.' },
    ],
    visual: 'analytics',
  },
  {
    slug: 'docsense',
    title: 'Docsense',
    kind: 'concept',
    category: 'AI-powered application',
    summary: 'A retrieval-augmented assistant that answers questions from a company’s own documents.',
    overview:
      'Docsense lets a team ask questions in plain language and get answers drawn from their own policies, manuals and notes, with a link to the source of every answer.',
    problem:
      'Knowledge is spread across documents nobody can find, so the same questions are asked and answered repeatedly. Generic chatbots answer confidently without knowing the company’s actual rules.',
    solution:
      'Documents are split, embedded and indexed. Each question retrieves the most relevant passages, and the language model answers only from those passages and cites them. If nothing relevant is found, it says so.',
    architecture: [
      { name: 'Ingestion', detail: 'Pipeline that parses, chunks and embeds uploaded documents.' },
      { name: 'Retrieval', detail: 'Vector search in PostgreSQL combined with keyword search.' },
      { name: 'Answering', detail: 'LLM integration constrained to retrieved passages, with citations.' },
      { name: 'App', detail: 'Next.js chat interface with source previews and feedback.' },
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'LLM integrations', 'RAG'],
    features: ['Document upload and indexing', 'Answers with citations', 'Explicit “not found” responses', 'Answer feedback for review'],
    decisions: [
      { title: 'Citations required', body: 'Every answer links to the passages it used, so people can check it instead of trusting it.' },
      { title: 'Hybrid search', body: 'Combining keyword and vector search finds both exact terms and paraphrased questions.' },
      { title: 'Saying “I don’t know”', body: 'When retrieval finds nothing relevant, the assistant declines rather than guessing.' },
    ],
    visual: 'assistant',
  },
];
