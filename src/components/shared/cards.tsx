import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Insight, Project } from '@/types';
import { kindLabel } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ProjectVisual } from './project-visual';

export function Tag({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'accent' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs',
        tone === 'accent' ? 'border-line-hover bg-accent-soft text-glow' : 'border-line text-fg-2',
      )}
    >
      {children}
    </span>
  );
}

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link href={`/work/${project.slug}/`} className="group block">
      <article>
        <div className="overflow-hidden rounded-lg">
          <ProjectVisual
            visual={project.visual}
            image={project.image}
            alt={`${project.title} interface mockup`}
            className={cn(
              'aspect-[16/10] transition duration-700 ease-out group-hover:scale-[1.02] group-hover:border-line-hover',
              large && 'lg:aspect-[16/11]',
            )}
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Tag tone="accent">{kindLabel[project.kind]}</Tag>
          <Tag>{project.category}</Tag>
        </div>
        <h3 className={cn('mt-4 flex items-center gap-2', large ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl')}>
          {project.title}
          <ArrowUpRight aria-hidden className="size-6 text-fg-3 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-glow" />
        </h3>
        <p className="mt-3 max-w-xl text-fg-2">{project.summary}</p>
        <p className="mt-4 text-sm text-fg-3">{project.stack.slice(0, 5).join(' · ')}</p>
        <span className="sr-only">View project</span>
      </article>
    </Link>
  );
}

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}/`}
      className="group flex h-full flex-col justify-between gap-10 border-t border-line pt-6 transition-colors hover:border-line-hover"
    >
      <article>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <span className="eyebrow">{insight.topic}</span>
          {insight.status === 'sample' ? <Tag>Sample article</Tag> : null}
        </div>
        <h3 className="mt-5 text-2xl transition-colors group-hover:text-glow">{insight.title}</h3>
        <p className="mt-3 text-fg-2">{insight.excerpt}</p>
      </article>
      <span className="flex items-center justify-between text-sm text-fg-3">
        {insight.readingMinutes} min read
        <ArrowUpRight aria-hidden className="size-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-glow" />
      </span>
    </Link>
  );
}
