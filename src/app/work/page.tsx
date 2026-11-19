import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { ProjectCard } from '@/components/shared/cards';
import { CtaBand } from '@/components/shared/cta-band';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Concept projects that show how Austenine approaches SaaS, business systems, analytics and AI applications.',
  alternates: { canonical: '/work/' },
};

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Engineering in action.">
        Each project is labelled for what it is. Concept projects are products we designed and documented to show our
        thinking, from architecture to interface. They are not client work.
      </PageHero>

      <div className="container-x grid gap-x-10 gap-y-24 pb-12 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i % 2 ? 'md:pt-24' : ''}>
            <ProjectCard project={p} large />
          </Reveal>
        ))}
      </div>

      <CtaBand title="Want yours to be the next one?" />
    </>
  );
}
