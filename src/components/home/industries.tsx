import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/industries';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-36">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />
      <div className="container-x relative">
        <SectionHeading eyebrow="Industries" title="Engineering for businesses with ambition.">
          Software problems repeat across sectors. These are the businesses we build for, and the kinds of systems that
          help them.
        </SectionHeading>

        <ul className="mt-20 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <li key={ind.slug} className="border-r border-b border-line">
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <Link
                  href={`/industries/#${ind.slug}`}
                  className="group relative flex h-full min-h-64 flex-col justify-between gap-10 p-8 transition-colors duration-500 hover:bg-accent-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-sm text-fg-3">{String(i + 1).padStart(2, '0')}</span>
                    <ArrowUpRight aria-hidden className="size-5 text-fg-3 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-glow" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl">{ind.title}</h3>
                    <p className="mt-3 text-sm text-fg-2">{ind.summary}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
