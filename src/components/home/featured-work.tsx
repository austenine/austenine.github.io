import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/shared/cards';
import { Reveal } from '@/components/shared/reveal';
import { ArrowLink } from '@/components/shared/button';
import { SectionHeading } from '@/components/shared/section-heading';

export function FeaturedWork() {
  const [a, b, c, d] = projects;
  return (
    <section className="container-x py-24 sm:py-36">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Featured work" title="Engineering in action.">
          Concept projects we designed and documented to show how we approach real product problems, from data model to
          interface.
        </SectionHeading>
        <ArrowLink href="/work/" className="shrink-0">
          View all work
        </ArrowLink>
      </div>

      {/* Asymmetric rhythm: wide/narrow, then narrow/wide. */}
      <div className="mt-20 grid gap-x-10 gap-y-20 lg:grid-cols-12">
        {[a, b, c, d].map((p, i) =>
          p ? (
            <Reveal
              key={p.slug}
              delay={(i % 2) * 0.1}
              className={i === 0 || i === 3 ? 'lg:col-span-7' : 'lg:col-span-5 lg:pt-32'}
            >
              <ProjectCard project={p} large={i === 0 || i === 3} />
            </Reveal>
          ) : null,
        )}
      </div>
    </section>
  );
}
