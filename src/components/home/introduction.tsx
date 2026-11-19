import { Reveal } from '@/components/shared/reveal';
import { ArrowLink } from '@/components/shared/button';

const notes = [
  { title: 'Engineering first', body: 'Architecture, data and reliability are decided deliberately, not left to chance.' },
  { title: 'Problem before product', body: 'Every build starts from the business problem and the people who have it.' },
  { title: 'Direct collaboration', body: 'You work directly with the engineer designing and building your product.' },
];

export function Introduction() {
  return (
    <section className="container-x py-24 sm:py-36">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-6">Our perspective</p>
          <h2 className="text-4xl sm:text-6xl lg:text-[4.25rem]">
            Technology should move your business <span className="text-gradient">forward.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:pt-16">
          <p className="text-lg text-fg">
            Building digital products requires more than writing code. It takes thoughtful engineering, reliable architecture,
            and an understanding of the problems businesses need to solve.
          </p>
          <p className="mt-5 text-fg-2">
            Austenine is a founder-led engineering studio. We keep scope clear, choose proven technology, and build
            software that is ready to grow with you.
          </p>
          <ArrowLink href="/company/" className="mt-8">
            About Austenine
          </ArrowLink>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
        {notes.map((n, i) => (
          <Reveal key={n.title} delay={i * 0.08} className="h-full bg-ink p-8">
            <p className="font-display text-sm text-glow">0{i + 1}</p>
            <h3 className="mt-6 text-xl">{n.title}</h3>
            <p className="mt-3 text-sm text-fg-2">{n.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
