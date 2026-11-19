import type { Metadata } from 'next';
import { services } from '@/data/services';
import { PageHero } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { ButtonLink } from '@/components/shared/button';
import { Tag } from '@/components/shared/cards';
import { CtaBand } from '@/components/shared/cta-band';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Software development, backend engineering, cloud and DevOps, AI and automation, and engineering partnerships for startups, agencies and growing businesses.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Engineering services for building, modernising and scaling.">
        Five focused services, each delivered with the same discipline: understand the problem, design deliberately, and
        ship software that is easy to own.
      </PageHero>

      <div className="container-x grid gap-16 pb-12 lg:grid-cols-12">
        {/* Section index */}
        <nav aria-label="Services on this page" className="hidden lg:col-span-3 lg:block">
          <ul className="sticky top-32 space-y-1 border-l border-line">
            {services.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-2 pl-5 text-sm text-fg-2 transition-colors hover:border-glow hover:text-fg">
                  <span className="mr-3 text-fg-3">0{i + 1}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-6 lg:col-span-9">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <section id={s.id} aria-labelledby={`${s.id}-title`} className="rounded-xl border border-line bg-ink-2 p-8 sm:p-12">
                <p className="font-display text-sm text-glow">0{i + 1}</p>
                <h2 id={`${s.id}-title`} className="mt-4 text-3xl sm:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-fg-2">{s.summary}</p>

                <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
                  <div>
                    <h3 className="eyebrow text-fg-3">The problem</h3>
                    <p className="mt-4 text-fg-2">{s.problem}</p>
                  </div>
                  <div>
                    <h3 className="eyebrow text-fg-3">Our engineering approach</h3>
                    <p className="mt-4 text-fg-2">{s.approach}</p>
                  </div>
                  <div>
                    <h3 className="eyebrow text-fg-3">What we deliver</h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-fg">
                          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-glow" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="eyebrow text-fg-3">Relevant technologies</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>

                <ButtonLink href={`/contact/?service=${s.id}`} className="mt-12">
                  Discuss {s.title.toLowerCase()}
                </ButtonLink>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
