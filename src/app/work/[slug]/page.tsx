import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Info } from 'lucide-react';
import { kindLabel, kindNote, projects } from '@/data/projects';
import { ProjectVisual } from '@/components/shared/project-visual';
import { Reveal } from '@/components/shared/reveal';
import { ArrowLink } from '@/components/shared/button';
import { Tag } from '@/components/shared/cards';
import { CtaBand } from '@/components/shared/cta-band';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${kindLabel[project.kind]}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative overflow-hidden pt-36 sm:pt-44">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div className="container-x relative">
          <Reveal>
            <Link href="/work/" className="text-sm text-fg-2 hover:text-fg">
              ← All work
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag tone="accent">{kindLabel[project.kind]}</Tag>
              <Tag>{project.category}</Tag>
            </div>
            <h1 className="mt-6 text-5xl sm:text-7xl lg:text-8xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-xl text-fg-2">{project.summary}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <figure className="mt-16">
              <ProjectVisual visual={project.visual} className="aspect-[16/10] shadow-card sm:aspect-[16/8]" />
              <figcaption className="mt-3 text-xs text-fg-3">Illustrative interface mockup, not a screenshot of a live product.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <div className="container-x py-20">
        <p className="flex max-w-3xl gap-3 rounded-lg border border-line-hover bg-accent-soft p-5 text-sm text-fg-2">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-glow" />
          {kindNote[project.kind]}
        </p>

        <Block n="01" title="Overview">
          <p>{project.overview}</p>
        </Block>
        <Block n="02" title="The problem">
          <p>{project.problem}</p>
        </Block>
        <Block n="03" title="Proposed solution">
          <p>{project.solution}</p>
        </Block>
        <Block n="04" title="Architecture">
          <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {project.architecture.map((a, i) => (
              <li key={a.name} className="bg-ink-2 p-6">
                <p className="font-display text-xs text-glow">Layer {i + 1}</p>
                <p className="mt-2 text-lg text-fg">{a.name}</p>
                <p className="mt-2 text-sm">{a.detail}</p>
              </li>
            ))}
          </ol>
        </Block>
        <Block n="05" title="Technology stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Block>
        <Block n="06" title="Key features">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-fg">
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-glow" />
                {f}
              </li>
            ))}
          </ul>
        </Block>
        <Block n="07" title="Engineering decisions">
          <dl className="space-y-8">
            {project.decisions.map((d) => (
              <div key={d.title}>
                <dt className="text-lg text-fg">{d.title}</dt>
                <dd className="mt-2">{d.body}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-line pt-10 sm:flex-row sm:items-center">
          <p className="text-fg-3">Next project</p>
          <ArrowLink href={`/work/${next.slug}/`} className="font-display text-3xl">
            {next.title}
          </ArrowLink>
        </div>
      </div>

      <CtaBand />
    </>
  );
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="mt-16 grid gap-6 border-t border-line pt-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-sm text-glow">{n}</p>
          <h2 className="mt-2 text-2xl sm:text-3xl">{title}</h2>
        </div>
        <div className="text-lg text-fg-2 lg:col-span-8">{children}</div>
      </section>
    </Reveal>
  );
}
