import type { Metadata } from 'next';
import type { ProjectKind } from '@/types';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { ProjectCard } from '@/components/shared/cards';
import { ConfidentialityNotice } from '@/components/shared/confidentiality-notice';
import { CtaBand } from '@/components/shared/cta-band';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Projects, products and engineering explorations that show how Austenine approaches software development.',
  alternates: { canonical: '/work/' },
};

/** Sections render in this order and only when they have projects. */
const sections: { kind: ProjectKind; eyebrow: string; title: string; intro: string }[] = [
  {
    kind: 'professional',
    eyebrow: 'Selected work',
    title: 'Professional engineering experience',
    intro: 'Anonymized case studies from previous engineering engagements, where disclosure is permitted.',
  },
  {
    kind: 'independent',
    eyebrow: 'Our products',
    title: 'Products we’re building',
    intro: 'Products and prototypes developed under Austenine.',
  },
  {
    kind: 'concept',
    eyebrow: 'Concept projects',
    title: 'Ideas explored through engineering',
    intro: 'Illustrative projects demonstrating proposed engineering solutions. The market scenarios are hypothetical, and none are presented as client engagements.',
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Engineering in action.">
        <p>
          At Austenine, we approach every software challenge with a focus on thoughtful architecture, practical
          engineering and long-term reliability.
        </p>
        <p className="mt-4">
          Our portfolio brings together original product concepts, engineering explorations and selected professional
          experience. Each project shows how we think through business challenges, design technical solutions and build
          digital products.
        </p>
        <p className="mt-4 text-fg-3">Every project is clearly identified by its nature and development status.</p>
      </PageHero>

      {sections.map((s) => {
        const items = projects.filter((p) => p.kind === s.kind);
        if (!items.length) return null;
        return (
          <section key={s.kind} aria-labelledby={`work-${s.kind}`} className="container-x pb-24 sm:pb-32">
            <Reveal className="max-w-3xl border-t border-line pt-12">
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 id={`work-${s.kind}`} className="mt-5 text-4xl sm:text-5xl">
                {s.title}
              </h2>
              <p className="mt-6 text-lg text-fg-2">{s.intro}</p>
            </Reveal>
            <div className="mt-16 grid gap-x-10 gap-y-24 md:grid-cols-2">
              {items.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i % 2 ? 'md:pt-24' : ''}>
                  <ProjectCard project={p} large />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <ConfidentialityNotice className="container-x" />

      <CtaBand title="Want yours to be the next one?" />
    </>
  );
}
