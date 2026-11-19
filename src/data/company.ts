/** Delivery process — homepage "Our Approach" and /company. */
export const approach = [
  { number: '01', title: 'Discover', body: 'Understand the business problem, objectives, users, and requirements.' },
  { number: '02', title: 'Architect', body: 'Define the technical approach, architecture, technology choices, and milestones.' },
  { number: '03', title: 'Build', body: 'Develop the solution with clean, maintainable engineering practices.' },
  { number: '04', title: 'Validate', body: 'Test functionality, performance, reliability, and security.' },
  { number: '05', title: 'Deliver & Improve', body: 'Deploy, monitor, maintain, and continuously improve the product.' },
] as const;

/** Only technologies we actually work with. No vendor partnership is implied. */
export const techGroups = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { name: 'Infrastructure', items: ['AWS', 'Docker', 'NGINX', 'CI/CD'] },
  { name: 'AI', items: ['LLM integrations', 'RAG', 'AI workflow integrations'] },
] as const;

export const principles = [
  { title: 'Clarity before code', body: 'We write down the problem, the scope and what “done” means before building anything.' },
  { title: 'Boring where it counts', body: 'Proven tools for the foundations, so the interesting work happens in your product, not in the plumbing.' },
  { title: 'Built to be handed over', body: 'Readable code, documented decisions and repeatable deployments, so you are never locked in.' },
  { title: 'Honest estimates', body: 'If something is uncertain, we say so and plan around it, rather than promising a date we cannot keep.' },
] as const;
