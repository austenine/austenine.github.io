import { techGroups } from '@/data/company';
import { Reveal } from '@/components/shared/reveal';
import { Tag } from '@/components/shared/cards';

/** Technology as an ecosystem by layer, not a logo wall. Reused on /company. */
export function Technology({ id }: { id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden bg-ink-2 py-24 sm:py-36">
      <div aria-hidden className="absolute -bottom-1/3 -left-1/4 h-[40rem] w-[40rem] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(30,81,255,0.18), transparent 65%)' }} />
      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-5">Technology</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl">Built with modern engineering tools.</h2>
          <p className="mt-6 max-w-md text-lg text-fg-2">
            A deliberately focused stack, chosen for reliability and a large hiring pool, so your product is never tied to
            niche tools.
          </p>
        </Reveal>

        <dl className="lg:col-span-7">
          {techGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.06}>
              <div className="grid gap-4 border-t border-line py-7 sm:grid-cols-[10rem_1fr] sm:items-center">
                <dt className="font-display text-lg text-fg">{g.name}</dt>
                <dd className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
