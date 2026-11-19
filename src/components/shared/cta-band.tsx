import { ButtonLink } from './button';
import { Reveal } from './reveal';

/** Closing call to action — used at the bottom of most pages. */
export function CtaBand({
  title = 'Have an idea worth building?',
  text = 'Let’s discuss how thoughtful engineering can move your business forward.',
  cta = 'Start a Conversation',
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="container-x py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-xl px-6 py-20 sm:px-16 sm:py-28" style={{ background: 'var(--gradient-wave-linear)' }}>
          <div aria-hidden className="grid-lines absolute inset-0 opacity-70" />
          <div
            aria-hidden
            className="animate-drift absolute -right-24 -bottom-40 h-[30rem] w-[30rem] rounded-full opacity-80 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(214,234,255,0.55), transparent 65%)' }}
          />
          <CtaMotif className="pointer-events-none absolute top-1/2 -right-24 hidden h-[34rem] w-[34rem] -translate-y-1/2 lg:block xl:right-0" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl">{title}</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">{text}</p>
            <ButtonLink href="/contact/" variant="light" className="mt-10">
              {cta}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Abstract orbit system: rings, a network of nodes and one travelling point. */
function CtaMotif({ className }: { className?: string }) {
  const nodes = [
    [300, 120],
    [470, 230],
    [430, 440],
    [190, 470],
    [130, 250],
  ];
  return (
    <svg viewBox="0 0 600 600" aria-hidden className={className}>
      <g fill="none" stroke="white">
        <circle cx="300" cy="300" r="270" strokeOpacity="0.12" />
        <circle cx="300" cy="300" r="210" strokeOpacity="0.18" strokeDasharray="2 8" />
        <circle cx="300" cy="300" r="150" strokeOpacity="0.22" />
        <ellipse cx="300" cy="300" rx="270" ry="90" strokeOpacity="0.14" transform="rotate(-24 300 300)" />
        <ellipse cx="300" cy="300" rx="270" ry="90" strokeOpacity="0.1" transform="rotate(36 300 300)" />
        {nodes.map(([x, y], i) => {
          const [nx, ny] = nodes[(i + 1) % nodes.length];
          return (
            <g key={i} strokeOpacity="0.3">
              <line x1={x} y1={y} x2={nx} y2={ny} />
              <line x1={x} y1={y} x2="300" y2="300" strokeOpacity="0.15" />
            </g>
          );
        })}
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="white" fillOpacity="0.85" />
      ))}
      <circle cx="300" cy="300" r="46" fill="white" fillOpacity="0.12" />
      <circle cx="300" cy="300" r="10" fill="white" />
      <g style={{ transformOrigin: '300px 300px' }} className="animate-spin-slow">
        <circle cx="300" cy="30" r="5" fill="white" />
        <circle cx="300" cy="30" r="16" fill="white" fillOpacity="0.2" />
      </g>
    </svg>
  );
}
