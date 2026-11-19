import type { Metadata } from 'next';
import { industries } from '@/data/industries';
import { PageHero } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { CtaBand } from '@/components/shared/cta-band';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'How Austenine applies software engineering to SaaS, startups, digital agencies, retail, hospitality and professional services.',
  alternates: { canonical: '/industries/' },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Engineering for businesses with ambition.">
        Every sector has its own pressures, but the software that relieves them follows familiar patterns. Here is what we
        can build for each.
      </PageHero>

      <div className="container-x pb-12">
        {industries.map((ind, i) => (
          <Reveal key={ind.slug}>
            <section id={ind.slug} aria-labelledby={`${ind.slug}-title`} className="grid gap-10 border-t border-line py-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-display text-sm text-glow">{String(i + 1).padStart(2, '0')}</p>
                <h2 id={`${ind.slug}-title`} className="mt-4 text-3xl sm:text-5xl">
                  {ind.title}
                </h2>
                <p className="mt-4 max-w-md text-lg text-fg-2">{ind.summary}</p>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
                <div>
                  <h3 className="eyebrow text-fg-3">Common challenges</h3>
                  <ul className="mt-4 space-y-3 text-fg-2">
                    {ind.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="eyebrow text-fg-3">What we can build</h3>
                  <ul className="mt-4 space-y-3">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-3 text-fg">
                        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-glow" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      <CtaBand title="Don’t see your industry?" text="The engineering is transferable. Tell us about the problem and we will tell you honestly whether we can help." />
    </>
  );
}
