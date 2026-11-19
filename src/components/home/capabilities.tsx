import type { Pillar } from '@/types';
import { pillars } from '@/data/services';
import { Reveal } from '@/components/shared/reveal';
import { ArrowLink } from '@/components/shared/button';
import { SectionHeading } from '@/components/shared/section-heading';

export function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-ink-2 py-24 sm:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="Capabilities" title="Three ways we move products forward.">
          From a first version to a system under real load, our work falls into three connected disciplines.
        </SectionHeading>

        <ol className="mt-20 space-y-6">
          {pillars.map((p, i) => (
            <li key={p.number}>
              <Reveal delay={i * 0.05}>
                <article className="group relative grid gap-10 overflow-hidden rounded-xl border border-line bg-ink p-8 transition-colors duration-500 hover:border-line-hover sm:p-12 lg:grid-cols-12">
                  <div
                    aria-hidden
                    className="absolute -top-1/2 -right-1/4 h-[140%] w-2/3 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: 'var(--gradient-glow)' }}
                  />
                  <div className="relative lg:col-span-5">
                    <p className="font-display text-6xl text-fg-3 transition-colors duration-500 group-hover:text-glow sm:text-7xl">{p.number}</p>
                    <h3 className="mt-6 text-3xl sm:text-4xl">{p.title}</h3>
                    <p className="mt-4 max-w-sm text-fg-2">{p.description}</p>
                    <ArrowLink href={p.href} className="mt-8">
                      Explore capability
                    </ArrowLink>
                  </div>
                  <ul className="relative self-end lg:col-span-4">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-center gap-3 border-b border-line py-3 text-fg-2 last:border-0">
                        <span aria-hidden className="size-1.5 rounded-full bg-glow" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="relative hidden items-center justify-end lg:col-span-3 lg:flex">
                    <Motif type={p.motif} />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** One abstract illustration per pillar: stacked layers, rising scale, a connected network. */
function Motif({ type }: { type: Pillar['motif'] }) {
  const stroke = 'url(#motif-g)';
  return (
    <svg viewBox="0 0 200 200" aria-hidden className="size-48 transition-transform duration-700 group-hover:scale-105">
      <defs>
        <linearGradient id="motif-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1E51FF" />
          <stop offset="1" stopColor="#D6EAFF" />
        </linearGradient>
      </defs>
      {type === 'build' &&
        [0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M100 ${40 + i * 28} l70 26 -70 26 -70 -26 z`}
            fill={i === 0 ? 'rgba(30,81,255,0.35)' : 'none'}
            stroke={stroke}
            strokeWidth="1.5"
            opacity={1 - i * 0.18}
          />
        ))}
      {type === 'scale' && (
        <g fill="none" stroke={stroke} strokeWidth="1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={30 + i * 30} y={150 - (i + 1) * 22} width="18" height={(i + 1) * 22} rx="4" fill={i === 4 ? 'rgba(30,81,255,0.35)' : 'none'} />
          ))}
          <path d="M24 120 C70 110 110 70 176 30" strokeDasharray="3 5" />
          <circle cx="176" cy="30" r="5" fill="#D6EAFF" stroke="none" />
        </g>
      )}
      {type === 'intelligent' && (
        <g stroke={stroke} strokeWidth="1.2">
          {[
            [100, 100, 40, 50],
            [100, 100, 160, 44],
            [100, 100, 170, 140],
            [100, 100, 50, 160],
            [40, 50, 160, 44],
            [50, 160, 170, 140],
            [100, 100, 100, 20],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.6" />
          ))}
          {[
            [40, 50],
            [160, 44],
            [170, 140],
            [50, 160],
            [100, 20],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="7" fill="#151B25" />
          ))}
          <circle cx="100" cy="100" r="18" fill="rgba(30,81,255,0.45)" />
          <circle cx="100" cy="100" r="6" fill="#D6EAFF" stroke="none" />
        </g>
      )}
    </svg>
  );
}
