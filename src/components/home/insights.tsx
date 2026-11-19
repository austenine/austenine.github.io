import { insights } from '@/data/insights';
import { InsightCard } from '@/components/shared/cards';
import { Reveal } from '@/components/shared/reveal';
import { ArrowLink } from '@/components/shared/button';
import { SectionHeading } from '@/components/shared/section-heading';

export function Insights() {
  return (
    <section className="container-x py-24 sm:py-36">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Insights" title="Thoughts on technology and engineering." />
        <ArrowLink href="/insights/" className="shrink-0">
          All insights
        </ArrowLink>
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {insights.slice(0, 3).map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.08}>
            <InsightCard insight={a} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
