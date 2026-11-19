import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { insights } from '@/data/insights';
import { site } from '@/lib/site';
import { Tag } from '@/components/shared/cards';
import { CtaBand } from '@/components/shared/cta-band';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}/` },
    openGraph: { type: 'article', title: article.title, description: article.excerpt },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <article className="container-x pt-36 pb-12 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <Link href="/insights/" className="text-sm text-fg-2 hover:text-fg">
            ← All insights
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="eyebrow">{article.topic}</span>
            {article.status === 'sample' ? <Tag>Sample article</Tag> : null}
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl">{article.title}</h1>
          <p className="mt-6 text-xl text-fg-2">{article.excerpt}</p>
          <p className="mt-8 border-b border-line pb-8 text-sm text-fg-3">
            {site.name} · {article.readingMinutes} min read
          </p>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-fg-2">
            {article.body.map((block, i) => (
              <div key={i} className="space-y-6">
                {block.heading ? <h2 className="pt-6 text-2xl sm:text-3xl">{block.heading}</h2> : null}
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
