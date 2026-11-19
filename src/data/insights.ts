import type { Insight } from '@/types';

/**
 * All articles start as `status: 'sample'` and show a visible "Sample article"
 * label. Review, edit and switch to 'published' when you are happy to stand
 * behind them. Do not add author names, dates or credentials that are not real.
 */
export const insights: Insight[] = [
  {
    slug: 'architecture-for-the-next-stage',
    title: 'Architecture for the next stage, not the final one',
    topic: 'Software architecture',
    excerpt: 'Most early products do not need microservices. They need a clean monolith with clear boundaries.',
    readingMinutes: 4,
    status: 'sample',
    body: [
      {
        paragraphs: [
          'It is tempting to design a new product for the scale you hope to reach. In practice, the architecture that serves a product best is the one that fits its next stage of growth and leaves room to change.',
        ],
      },
      {
        heading: 'Start with a modular monolith',
        paragraphs: [
          'A single deployable application with well-separated modules is faster to build, easier to test and cheaper to run than a set of services. The important part is the boundaries: each module owns its data and exposes a small interface to the rest.',
          'When one module genuinely needs to scale or deploy independently, those boundaries make it straightforward to extract.',
        ],
      },
      {
        heading: 'Decide what is expensive to change',
        paragraphs: [
          'Some decisions are cheap to revisit, such as UI libraries and most internal APIs. Others are expensive: the data model, tenancy, authentication and how money is stored. Spend design time on the expensive ones.',
        ],
      },
    ],
  },
  {
    slug: 'measure-before-you-optimise',
    title: 'Measure before you optimise your backend',
    topic: 'Backend performance',
    excerpt: 'Slow APIs are rarely slow where you expect. Profiles and query plans beat intuition.',
    readingMinutes: 4,
    status: 'sample',
    body: [
      {
        paragraphs: [
          'When an endpoint is slow, the first instinct is often to add a cache. Caching can help, but it can also hide the real problem and add a new class of bugs.',
        ],
      },
      {
        heading: 'Find where the time goes',
        paragraphs: [
          'Measure request time end to end, then break it down: database, external calls, serialisation. In most web applications the database dominates, usually through missing indexes or the N+1 query pattern.',
          'Reading the query plan for the slowest queries is often the highest-value hour of performance work.',
        ],
      },
      {
        heading: 'Then fix the cause',
        paragraphs: [
          'Add the index, batch the queries, or return less data. Reach for a cache once the underlying work is as cheap as it reasonably can be, and decide up front how the cache is invalidated.',
        ],
      },
    ],
  },
  {
    slug: 'multi-tenancy-decisions',
    title: 'Three multi-tenancy decisions every SaaS makes',
    topic: 'SaaS engineering',
    excerpt: 'Shared tables, separate schemas or separate databases — and why the choice matters early.',
    readingMinutes: 5,
    status: 'sample',
    body: [
      {
        paragraphs: [
          'Every SaaS product serves many customers from one system. How their data is separated affects security, cost, performance and how hard the product is to operate.',
        ],
      },
      {
        heading: 'Where tenant data lives',
        paragraphs: [
          'Shared tables with a tenant column are the simplest and cheapest to run. Separate schemas or databases give stronger isolation at the cost of more operational work. Most products start with shared tables and enforce isolation in the database itself, for example with row-level security.',
        ],
      },
      {
        heading: 'How access is enforced',
        paragraphs: [
          'Relying on every query to remember a tenant filter eventually fails. Enforcing the rule in one place, in middleware or in the database, makes the safe path the default.',
        ],
      },
      {
        heading: 'How tenants grow',
        paragraphs: [
          'Plan for one large customer whose data and traffic dwarf the rest. Knowing how you would move them to dedicated resources is enough at the start; building it can wait.',
        ],
      },
    ],
  },
  {
    slug: 'boring-cloud-infrastructure',
    title: 'The case for boring cloud infrastructure',
    topic: 'Cloud infrastructure',
    excerpt: 'Containers, one managed database and an automated pipeline cover most products for a long time.',
    readingMinutes: 3,
    status: 'sample',
    body: [
      {
        paragraphs: [
          'Cloud platforms offer hundreds of services. A small product rarely needs more than a few of them, and every extra service is something to secure, monitor and pay for.',
        ],
      },
      {
        heading: 'A sensible default',
        paragraphs: [
          'Package the application in Docker, run it on a managed container or virtual machine service, use a managed PostgreSQL database, and put a reverse proxy such as NGINX in front. Automate builds and deployments from the repository.',
          'This setup is well understood, easy to hire for and straightforward to reproduce in every environment.',
        ],
      },
    ],
  },
  {
    slug: 'practical-rag',
    title: 'What makes a RAG application useful in practice',
    topic: 'AI applications',
    excerpt: 'Retrieval quality, citations and the ability to say “I don’t know” matter more than the model.',
    readingMinutes: 5,
    status: 'sample',
    body: [
      {
        paragraphs: [
          'Retrieval-augmented generation answers questions using your own documents. The model is only one part of it; most of the quality comes from what happens before the model is called.',
        ],
      },
      {
        heading: 'Retrieval is the product',
        paragraphs: [
          'If the right passage is not retrieved, no model can produce the right answer. Good chunking, hybrid keyword and vector search, and a set of real test questions do more for quality than switching models.',
        ],
      },
      {
        heading: 'Make answers checkable',
        paragraphs: [
          'Show the sources behind every answer, and let the application decline when nothing relevant is found. People trust a system that can say “I don’t know” far more than one that always sounds certain.',
        ],
      },
    ],
  },
  {
    slug: 'engineering-practices-that-pay-off',
    title: 'Small engineering practices that pay off early',
    topic: 'Engineering best practices',
    excerpt: 'Typed code, a few meaningful tests and repeatable deployments save more time than they cost.',
    readingMinutes: 3,
    status: 'sample',
    body: [
      {
        paragraphs: [
          'Small teams cannot afford heavy process, but a few habits pay for themselves within weeks.',
        ],
      },
      {
        heading: 'The short list',
        paragraphs: [
          'Use TypeScript in strict mode, so whole classes of bugs never reach production. Test the parts where a mistake costs money or data, rather than chasing a coverage number. Deploy from a pipeline, never from a laptop. Write down decisions that were hard to make, so nobody has to make them twice.',
        ],
      },
    ],
  },
];
