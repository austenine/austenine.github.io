export type Service = {
  id: string; // anchor on /services
  title: string;
  summary: string;
  problem: string;
  deliverables: string[];
  approach: string;
  tech: string[];
};

export type Pillar = {
  number: string;
  title: string;
  description: string;
  services: string[];
  href: string;
  motif: 'build' | 'scale' | 'intelligent';
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  challenges: string[];
  solutions: string[];
};

/**
 * concept       — illustrative project demonstrating a proposed solution; hypothetical scenario, no client
 * independent   — product or prototype built under Austenine
 * professional  — work performed in previous employment, published only where disclosure is permitted
 */
export type ProjectKind = 'concept' | 'independent' | 'professional';

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  category: string;
  sector: string;
  summary: string;
  /** The market context the project is written for. Hypothetical for concept projects. */
  scenario: string;
  overview: string[];
  challenge: { points: string[]; closing?: string };
  objective: string;
  approach: { title: string; body?: string; points: string[]; ordered?: boolean }[];
  architecture: { name: string; detail: string }[];
  stack: string[];
  considerations: string[];
  decisions: { title: string; body: string }[];
  /** Potential value only. Never measured results unless they can be evidenced. */
  outcomes: string[];
  status: string;
  visual: 'billing' | 'booking' | 'analytics' | 'assistant';
  /** Screenshot of the static mockup in /public. Falls back to the SVG visual when absent. */
  image?: string;
};

export type Insight = {
  slug: string;
  title: string;
  topic: string;
  excerpt: string;
  readingMinutes: number;
  /** sample = drafted for launch, must be reviewed before it is presented as published writing. */
  status: 'sample' | 'published';
  body: { heading?: string; paragraphs: string[] }[];
};
