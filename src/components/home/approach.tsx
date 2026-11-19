import { approach } from '@/data/company';
import { DrawLine, Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';

/** Connected five-step process: horizontal on desktop, vertical on mobile. */
export function Approach() {
  return (
    <section className="container-x py-24 sm:py-36">
      <SectionHeading eyebrow="Our approach" title="From the first conversation to the final release." />

      <ol className="relative mt-20 grid gap-12 lg:grid-cols-5 lg:gap-8">
        <DrawLine className="absolute top-0 left-[7px] block h-full w-px bg-gradient-to-b from-accent via-glow to-transparent lg:hidden" vertical />
        <DrawLine className="absolute top-[7px] left-0 hidden h-px w-full bg-gradient-to-r from-accent via-glow to-transparent lg:block" />
        {approach.map((step, i) => (
          <li key={step.number} className="relative pl-10 lg:pt-14 lg:pl-0">
            <Reveal delay={0.15 * i}>
              <span aria-hidden className="absolute top-0 left-0 size-[15px] rounded-full border-2 border-glow bg-ink shadow-glow" />
              <p className="font-display text-sm text-glow">{step.number}</p>
              <h3 className="mt-3 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm text-fg-2">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
