import type { Metadata } from 'next';
import { insights } from '@/data/insights';
import { PageHero } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { InsightCard } from '@/components/shared/cards';
import { CtaBand } from '@/components/shared/cta-band';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Notes on software architecture, backend performance, SaaS engineering, cloud infrastructure and practical AI.',
  alternates: { canonical: '/insights/' },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Thoughts on technology and engineering.">
        Short, practical notes on the decisions that shape software products.
      </PageHero>
      <div className="container-x grid gap-x-8 gap-y-16 pb-12 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 0.08}>
            <InsightCard insight={a} />
          </Reveal>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
