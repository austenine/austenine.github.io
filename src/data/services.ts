import type { Pillar, Service } from '@/types';

/** The three capability pillars on the homepage. Each links to a section of /services. */
export const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Build Digital Products',
    description: 'Turn business ideas into functional, scalable digital products.',
    services: [
      'Custom web applications',
      'SaaS development',
      'MVP development',
      'API and backend engineering',
      'Full-stack product development',
    ],
    href: '/services/#software-development',
    motif: 'build',
  },
  {
    number: '02',
    title: 'Modernize & Scale',
    description: 'Improve existing systems for performance, reliability, and growth.',
    services: [
      'Backend modernization',
      'Cloud infrastructure',
      'DevOps and CI/CD',
      'Performance optimization',
      'System architecture improvements',
    ],
    href: '/services/#cloud-devops',
    motif: 'scale',
  },
  {
    number: '03',
    title: 'Build Intelligent Solutions',
    description: 'Introduce practical AI and automation into business workflows.',
    services: [
      'AI integrations',
      'Business process automation',
      'AI-powered applications',
      'LLM integrations',
      'Retrieval-augmented generation (RAG) solutions',
    ],
    href: '/services/#ai-automation',
    motif: 'intelligent',
  },
];

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    summary: 'Full-stack web applications and SaaS products, from first version to production.',
    problem:
      'A good idea stalls when there is no one to turn it into working software, or when the first version is built so quickly that it has to be rewritten before it can grow.',
    deliverables: [
      'Full-stack web applications',
      'Custom business software',
      'SaaS product development',
      'MVP development',
      'Frontend and backend development',
    ],
    approach:
      'We agree on the smallest version that proves the idea, then build it on a structure that can carry the next ten features: typed code, a clear data model, automated tests on the parts that matter, and a deployment you can repeat.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering',
    summary: 'APIs, data models and integrations that stay fast and predictable as usage grows.',
    problem:
      'Slow endpoints, tangled data, fragile integrations and unclear permissions are usually invisible until traffic or the team grows, and then they become the bottleneck.',
    deliverables: [
      'REST API development',
      'Database architecture',
      'Authentication and authorization',
      'API performance optimization',
      'Real-time applications',
      'System integrations',
    ],
    approach:
      'We start from the data and the access rules, design the API contract before the implementation, and measure before optimising, so changes are driven by profiles and query plans rather than guesswork.',
    tech: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    summary: 'Repeatable deployments, sensible infrastructure and the monitoring to trust them.',
    problem:
      'Manual deployments, environments that drift apart and no visibility into production make every release a risk and every incident a guessing game.',
    deliverables: [
      'Cloud deployment',
      'Docker-based environments',
      'CI/CD pipelines',
      'Infrastructure optimization',
      'Monitoring and reliability',
    ],
    approach:
      'We containerise the application, make every environment reproducible from the repository, automate the path from commit to production, and add the logging and alerts you need to know when something breaks.',
    tech: ['AWS', 'Docker', 'NGINX', 'CI/CD'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    summary: 'Practical LLM features and automations that fit into real workflows.',
    problem:
      'Teams lose hours to repetitive work and to searching for information spread across documents and tools, while most AI experiments never make it past a demo.',
    deliverables: [
      'LLM integrations',
      'RAG applications',
      'AI-powered business tools',
      'Workflow automation',
      'Intelligent application features',
    ],
    approach:
      'We pick one workflow with a measurable cost, build the narrowest useful version, ground model output in your own data, and keep a human in the loop where mistakes are expensive.',
    tech: ['LLM integrations', 'RAG', 'AI workflow integrations', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'engineering-partnerships',
    title: 'Engineering Partnerships',
    summary: 'Dependable engineering capacity for agencies and teams, on a defined scope.',
    problem:
      'Agencies and small teams win work that needs more engineering than they have, and hiring for a single project rarely makes sense.',
    deliverables: [
      'White-label development',
      'Agency engineering support',
      'Project-based development',
      'Scoped engineering engagements',
    ],
    approach:
      'We agree on scope, communication and handover up front, work inside your process and tools, and deliver documented code your team can own after we finish.',
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Docker'],
  },
];
