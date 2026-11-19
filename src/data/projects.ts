import type { Project, ProjectKind } from '@/types';

export const kindLabel: Record<ProjectKind, string> = {
  concept: 'Concept project',
  independent: 'Austenine product',
  professional: 'Professional experience',
};

export const kindNote: Record<ProjectKind, string> = {
  concept:
    'This is an illustrative concept project. The market scenario is hypothetical: there is no client, and no deployment, delivery timeline or measured results are claimed. Outcomes describe potential value only.',
  independent: 'A product or prototype developed under Austenine.',
  professional: 'Work performed in previous employment, described with permission and without identifying the client.',
};

/**
 * Accuracy rules: never invent clients, partnerships, testimonials, timelines or
 * results. Never present employer work as Austenine client work. Outcomes on
 * concept projects are potential value, not measurements.
 */
export const projects: Project[] = [
  {
    slug: 'ledgerline',
    title: 'Ledgerline',
    kind: 'concept',
    category: 'Subscription Management & Billing Platform',
    sector: 'FinTech / SaaS',
    summary: 'Subscription management and billing for growing B2B SaaS businesses.',
    scenario: 'US-based B2B SaaS startup',
    overview: [
      'As SaaS businesses grow, managing subscriptions, recurring payments, invoices and customer billing becomes increasingly complex.',
      'Spreadsheets and disconnected billing tools make it difficult to maintain accurate subscription records, manage payment failures and give customers a transparent billing experience.',
      'Ledgerline explores how a centralized subscription management platform could help growing software businesses run their billing operations through one application.',
    ],
    challenge: {
      points: [
        'Customer and organization management',
        'Multiple subscription plans and pricing structures',
        'Recurring billing cycles and invoice generation',
        'Payment status tracking',
        'Upgrades, downgrades and cancellations',
        'Failed payment handling and retry workflows',
        'Billing history and financial reporting',
      ],
      closing:
        'The challenge is not simply generating invoices. It is maintaining consistency across subscription states, payment events and customer records.',
    },
    objective:
      'Give a growing SaaS business one consistent system of record for subscriptions, payments and invoices, built on a modular backend with clearly separated responsibilities.',
    approach: [
      {
        title: 'Multi-tenant architecture',
        points: ['Isolated customer organizations', 'Tenant-aware database queries', 'Role-based access controls', 'Organization-level subscription management'],
      },
      {
        title: 'Subscription lifecycle management',
        points: ['Trial, active, past-due, cancelled and expired states', 'Plan changes and renewals', 'Billing-cycle calculations', 'Subscription event tracking'],
      },
      {
        title: 'Payment integration',
        points: ['Stripe payment integration', 'Webhook-based payment event processing', 'Idempotent webhook handling', 'Failed payment and retry workflows'],
      },
      {
        title: 'Invoice management',
        points: ['Automated invoice generation', 'Invoice status tracking', 'Tax and billing information', 'Downloadable invoice documents'],
      },
    ],
    architecture: [
      { name: 'Frontend', detail: 'Subscription and billing dashboard.' },
      { name: 'API', detail: 'Authentication, business logic and billing endpoints.' },
      { name: 'Database', detail: 'Organizations, subscriptions, invoices and payments.' },
      { name: 'Redis', detail: 'Caching and temporary workflow state.' },
      { name: 'Payment gateway', detail: 'Payment processing and webhook events.' },
      { name: 'Background jobs', detail: 'Billing cycles, notifications and retries.' },
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Stripe'],
    considerations: [
      'Billing systems require particular attention to financial correctness. We would prioritize idempotency, auditability, transaction consistency, secure webhook validation and reliable payment reconciliation.',
    ],
    decisions: [
      { title: 'Integer money', body: 'Amounts are stored in minor units, never floats, so totals and proration are exact.' },
      { title: 'Events, not overwrites', body: 'Subscription changes append events, giving a complete history for support and audits.' },
      { title: 'Idempotency keys', body: 'Every write endpoint and webhook handler is idempotent, so a retried request never bills twice.' },
    ],
    outcomes: [
      'Centralized subscription operations',
      'Less manual billing administration',
      'Better visibility into recurring revenue',
      'More effective tracking of failed payments',
      'A foundation for expanding subscription products',
    ],
    status: 'Illustrative concept. Not represented as a deployed client engagement.',
    visual: 'billing',
    image: '/case-studies/ledgerline.png',
  },
  {
    slug: 'tablepoint',
    title: 'Tablepoint',
    kind: 'concept',
    category: 'Restaurant Operations & Digital Ordering',
    sector: 'Hospitality / SaaS',
    summary: 'Digital menus, table reservations and online ordering for independent restaurants, in one platform.',
    scenario: 'US-based restaurant technology startup',
    overview: [
      'Independent restaurants often rely on several disconnected tools to manage reservations, digital menus, customer orders and day-to-day operations.',
      'This fragmentation creates operational overhead, makes information harder to manage and introduces friction into the customer experience.',
      'Tablepoint explores a centralized restaurant management platform that connects digital menus, table reservations and online ordering through one system.',
    ],
    challenge: {
      points: [
        'Menus managed across multiple channels',
        'Manual reservation and table management',
        'Disconnected online ordering workflows',
        'Difficulty keeping menu information accurate',
        'Limited visibility into incoming orders',
        'No centralized restaurant administration',
      ],
    },
    objective: 'Provide restaurants with a single platform for managing their digital presence and essential customer-facing workflows.',
    approach: [
      {
        title: 'Restaurant and branch management',
        points: ['Restaurant profile management', 'Multiple branch support', 'Operating hours and availability', 'Restaurant-specific configuration', 'Staff access and permissions'],
      },
      {
        title: 'Digital menu management',
        points: ['Category and item management', 'Descriptions and pricing', 'Image management', 'Item availability controls', 'QR-code-based menu access'],
      },
      {
        title: 'Table reservations',
        points: ['Table configuration', 'Reservation availability', 'Booking management', 'Reservation status tracking', 'Customer booking information'],
      },
      {
        title: 'Online ordering',
        points: ['Digital ordering experience', 'Cart and order management', 'Order status tracking', 'Restaurant-side order dashboard', 'Order history'],
      },
      {
        title: 'Administrative workflows',
        points: ['Centralized dashboard', 'Role-based access', 'Restaurant-level reporting', 'Menu and order management'],
      },
    ],
    architecture: [
      { name: 'Next.js / React', detail: 'Customer and restaurant interfaces.' },
      { name: 'Node.js APIs', detail: 'Business logic and order workflows.' },
      { name: 'PostgreSQL', detail: 'Restaurants, menus, tables and orders.' },
      { name: 'Image storage', detail: 'Menu and restaurant images.' },
      { name: 'Authentication', detail: 'Staff access and permissions.' },
      { name: 'QR codes', detail: 'Table-specific digital menu access.' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    considerations: [
      'Restaurant platforms need to account for concurrent orders, accurate availability, tenant isolation, reliable order-state transitions and mobile-first customer experiences.',
      'We would also consider how the platform handles connectivity issues and prevents duplicate order submissions.',
    ],
    decisions: [
      { title: 'Constraints in the database', body: 'Overlapping bookings are rejected by PostgreSQL itself, so a race between two guests cannot double-book a table.' },
      { title: 'Mobile and tablet first', body: 'Guest and staff screens are designed for touch and glanceability during service, not for a desktop.' },
    ],
    outcomes: [
      'Centralized restaurant operations',
      'Easier digital menu updates',
      'More convenient customer ordering',
      'Better visibility into reservations and orders',
      'A foundation for multi-location management',
    ],
    status: 'Illustrative concept. Not represented as a deployed restaurant client platform.',
    visual: 'booking',
    image: '/case-studies/tablepoint.png',
  },
  {
    slug: 'pulseboard',
    title: 'Pulseboard',
    kind: 'concept',
    category: 'Enterprise Analytics & Data Intelligence',
    sector: 'Enterprise Technology',
    summary: 'A centralized analytics platform bringing operational metrics, reporting and controlled access into one interface.',
    scenario: 'UK-based enterprise technology company',
    overview: [
      'Organizations operate across multiple departments, databases and operational systems. Business-critical information ends up distributed across sources, making it hard for decision-makers to get a consistent view of performance.',
      'Pulseboard explores a centralized analytics platform that brings operational metrics, reporting workflows and business intelligence into one interface.',
    ],
    challenge: {
      points: [
        'Business data distributed across multiple systems',
        'Inconsistent reporting structures',
        'Slow analytical queries',
        'Limited visibility into operational KPIs',
        'Complex access permissions',
        'Manual reporting processes',
        'Difficulty maintaining reliable data pipelines',
      ],
    },
    objective: 'Establish a centralized system for data aggregation, validation, reporting and controlled access.',
    approach: [
      {
        title: 'Centralized analytics architecture',
        body: 'A structured data layer receives information from multiple sources, validates incoming records and makes normalized data available to reporting services.',
        points: [],
      },
      {
        title: 'Role-based access management',
        points: ['Organization-level permissions', 'Department-specific access', 'Role-based dashboard visibility', 'Controlled access to sensitive metrics'],
      },
      {
        title: 'High-performance API development',
        points: ['Optimized database queries', 'Pagination and filtering', 'Aggregation endpoints', 'Redis caching for frequently accessed data', 'Query profiling and indexing'],
      },
      {
        title: 'Reporting and visualization',
        points: ['KPI dashboards', 'Historical trend analysis', 'Department-level reporting', 'Custom date ranges', 'Exportable reports'],
      },
    ],
    architecture: [
      { name: 'Data ingestion', detail: 'Collect information from connected systems.' },
      { name: 'Validation layer', detail: 'Validate and normalize records.' },
      { name: 'PostgreSQL', detail: 'Store structured operational data.' },
      { name: 'Redis', detail: 'Cache frequently requested analytics.' },
      { name: 'Node.js APIs', detail: 'Reporting and aggregation services.' },
      { name: 'Next.js frontend', detail: 'Dashboards and reports.' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis'],
    considerations: [
      'Enterprise analytics platforms need reliable data validation, authorization at the API level, query optimization, audit trails and clear data ownership. Dashboard performance must be considered alongside database performance.',
    ],
    decisions: [
      { title: 'Pre-aggregate', body: 'Daily rollups keep dashboards fast regardless of how much raw data accumulates.' },
      { title: 'Few metrics, well defined', body: 'Each metric has a written definition, so every department reads the same number the same way.' },
    ],
    outcomes: [
      'More consistent reporting across departments',
      'Better visibility into operational performance',
      'Less dependence on manual reporting',
      'More responsive commonly used dashboards',
      'A foundation for expanding analytics capabilities',
    ],
    status: 'Illustrative case study. Architecture inspired by common enterprise analytics requirements.',
    visual: 'analytics',
    image: '/case-studies/pulseboard.png',
  },
  {
    slug: 'docsense',
    title: 'Docsense',
    kind: 'concept',
    category: 'AI-Powered Document Intelligence',
    sector: 'Artificial Intelligence',
    summary: 'A knowledge platform that answers questions from a company’s own documents, with a source for every answer.',
    scenario: 'UK-based professional services startup',
    overview: [
      'Businesses maintain large volumes of internal documentation: policies, reports, technical specifications, contracts, operational manuals and knowledge-base articles.',
      'Finding relevant information across them is slow. Keyword search often misses context, while general-purpose AI assistants can answer without grounding in company-specific information.',
      'Docsense explores an AI-powered knowledge platform where employees upload documents, search organizational knowledge and ask natural-language questions, with references to supporting sources.',
    ],
    challenge: {
      points: [
        'Internal documents spread across multiple repositories',
        'Relevant information buried in lengthy documents',
        'Repetitive questions requiring manual research',
        'No visibility into where an AI-generated answer came from',
        'Sensitive information requiring controlled access',
        'Inconsistent document formats and extraction quality',
      ],
    },
    objective: 'Make organizational knowledge easier to discover while maintaining source traceability and access control.',
    approach: [
      {
        title: 'Document ingestion pipeline',
        body: 'Documents move through explicit uploaded, processing, indexed and failed states, so users always know where each one stands.',
        points: [
          'PDF and supported document uploads',
          'Text extraction and preprocessing',
          'Document normalization',
          'Metadata extraction',
          'Chunking with overlapping segments',
          'Embedding generation',
          'Vector indexing',
        ],
      },
      {
        title: 'Retrieval-augmented generation (RAG)',
        body: 'Rather than sending entire documents to an LLM, the system uses a retrieval pipeline.',
        ordered: true,
        points: [
          'The user submits a natural-language question.',
          'The question is converted into an embedding.',
          'Relevant document chunks are retrieved.',
          'Retrieved context is ranked and assembled.',
          'The LLM generates an answer grounded in that context.',
          'The interface presents the answer with supporting document references.',
        ],
      },
      {
        title: 'Source attribution and answer quality',
        points: [
          'Document-level source references',
          'Page or section references where available',
          'Context-aware retrieval',
          'Relevance thresholds',
          'Explicit handling of insufficient information',
          'Document content never treated as trusted system instructions',
        ],
      },
      {
        title: 'Knowledge access management',
        points: ['Workspace-based document organization', 'User authentication', 'Document-level authorization', 'Tenant-aware retrieval', 'Access validated before returning content'],
      },
    ],
    architecture: [
      { name: 'Next.js', detail: 'Document and chat interface.' },
      { name: 'FastAPI', detail: 'AI processing and retrieval services.' },
      { name: 'PostgreSQL', detail: 'Users, workspaces and document metadata.' },
      { name: 'Vector search', detail: 'Semantic document retrieval.' },
      { name: 'Embedding model', detail: 'Converts text into vector representations.' },
      { name: 'LLM', detail: 'Generates contextual responses.' },
      { name: 'Object storage', detail: 'Stores uploaded documents.' },
      { name: 'Background workers', detail: 'Process documents asynchronously.' },
    ],
    stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Vector search', 'LLM integrations'],
    considerations: [
      'RAG quality depends on more than the language model. Document extraction, chunking strategy, embedding quality, retrieval relevance and context assembly all influence answer quality.',
      'We would also prioritize tenant isolation, document permissions, secure file handling, prompt-injection resistance and evaluation against representative question-and-answer datasets.',
    ],
    decisions: [
      { title: 'Citations required', body: 'Every answer links to the passages it used, so people can check it instead of trusting it.' },
      { title: 'Saying “I don’t know”', body: 'When retrieval finds nothing relevant, the assistant declines rather than guessing.' },
    ],
    outcomes: [
      'Faster discovery of internal information',
      'Fewer repetitive document searches',
      'Easier access to organizational knowledge',
      'More transparent AI responses through source references',
      'A foundation for internal knowledge assistants',
    ],
    status: 'Illustrative concept. Not represented as a production AI deployment or client engagement.',
    visual: 'assistant',
    image: '/case-studies/docsense.png',
  },
];
