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
