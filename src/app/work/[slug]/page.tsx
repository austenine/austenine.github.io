import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Info } from 'lucide-react';
import { kindLabel, kindNote, projects } from '@/data/projects';
import { ProjectVisual } from '@/components/shared/project-visual';
import { Reveal } from '@/components/shared/reveal';
import { ArrowLink } from '@/components/shared/button';
import { Tag } from '@/components/shared/cards';
import { ConfidentialityNotice } from '@/components/shared/confidentiality-notice';
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
      <section className="relative overflow-hidden pt-36 sm:pt-28">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div className="container-x relative">
          <Reveal>
            <Link href="/work/" className="text-sm text-fg-2 hover:text-fg">
              ← All work
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag tone="accent">{kindLabel[project.kind]}</Tag>
              <Tag>{project.sector}</Tag>
            </div>
            <p className="mt-6 text-sm text-fg-3">{project.category}</p>
            <h1 className="mt-3 text-5xl sm:text-7xl lg:text-8xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-xl text-fg-2">{project.summary}</p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div>
                <dt className="text-fg-3">{project.kind === 'concept' ? 'Market scenario (illustrative)' : 'Context'}</dt>
                <dd className="mt-1 text-fg">{project.scenario}</dd>
              </div>
              {/* <div>
                <dt className="text-fg-3">Status</dt>
                <dd className="mt-1 text-fg">{project.status}</dd>
              </div> */}
            </dl>
          </Reveal>
          <Reveal delay={0.15}>
            <figure className="mt-16">
              <ProjectVisual visual={project.visual} image={project.image} alt={`${project.title} interface mockup`} className="aspect-[16/10] shadow-card sm:aspect-[16/8]" />
              <figcaption className="mt-3 text-xs text-fg-3">Illustrative interface mockup, not a screenshot of a live product.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <div className="container-x py-4">
        <Block n="01" title="Overview">
          <div className="space-y-5">
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Block>
        <Block n="02" title="The challenge">
          <Bullets items={project.challenge.points} />
          {project.challenge.closing ? <p className="mt-8">{project.challenge.closing}</p> : null}
        </Block>
        <Block n="03" title="Objective">
          <p className="text-fg">{project.objective}</p>
        </Block>
        <Block n="04" title="Engineering approach">
          <ol className="space-y-12">
            {project.approach.map((a, i) => (
              <li key={a.title}>
                <p className="font-display text-xs text-glow">0{i + 1}</p>
                <h3 className="mt-2 text-xl text-fg">{a.title}</h3>
                {a.body ? <p className="mt-3">{a.body}</p> : null}
                {a.points.length ? (
                  a.ordered ? (
                    <ol className="mt-5 list-decimal space-y-2 pl-5 marker:text-glow">
                      {a.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ol>
                  ) : (
                    <div className="mt-5">
                      <Bullets items={a.points} />
                    </div>
                  )
                ) : null}
              </li>
            ))}
          </ol>
        </Block>
        <Block n="05" title="Proposed architecture">
          <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {project.architecture.map((a) => (
              <li key={a.name} className="bg-ink-2 p-6">
                <p className="text-lg text-fg">{a.name}</p>
                <p className="mt-2 text-sm">{a.detail}</p>
              </li>
            ))}
          </ol>
        </Block>
        <Block n="06" title="Technology">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Block>
        <Block n="07" title="Engineering considerations">
          <div className="space-y-5">
            {project.considerations.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </div>
          <dl className="mt-10 space-y-8">
            {project.decisions.map((d) => (
              <div key={d.title}>
                <dt className="text-lg text-fg">{d.title}</dt>
                <dd className="mt-2">{d.body}</dd>
              </div>
            ))}
          </dl>
        </Block>
        <Block n="08" title="Expected business value">
          <p className="mb-6 text-sm text-fg-3">Potential value of this approach, not measured results.</p>
          <Bullets items={project.outcomes} />
        </Block>

        <ConfidentialityNotice className="mt-24" />

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line pt-10 sm:flex-row sm:items-center">
          <p className="text-fg-3">Next project</p>
          <ArrowLink href={`/work/${next.slug}/`} className="font-display text-3xl">
            {next.title}
          </ArrowLink>
        </div>
      </div>

      <CtaBand title="Planning something similar?" text="Let’s discuss how this kind of engineering could apply to your product." cta="Discuss a Similar Project" />
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 text-fg">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-glow" />
          {it}
        </li>
      ))}
    </ul>
  );
}
