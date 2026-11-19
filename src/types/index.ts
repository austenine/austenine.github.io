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
 * concept      — designed and documented by Austenine, not built for a client
 * independent  — built and shipped by Austenine as its own product
 * client       — real client work, published with the client's permission only
 */
export type ProjectKind = 'concept' | 'independent' | 'client';

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  category: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: { name: string; detail: string }[];
  stack: string[];
  features: string[];
  decisions: { title: string; body: string }[];
  visual: 'billing' | 'booking' | 'analytics' | 'assistant';
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
