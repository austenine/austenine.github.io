import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { approach, principles } from '@/data/company';
import { pillars } from '@/data/services';
import { ArrowLink } from '@/components/shared/button';
import { PageHero } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { LogoMark } from '@/components/layout/logo';
import { Technology } from '@/components/home/technology';
import { CtaBand } from '@/components/shared/cta-band';

export const metadata: Metadata = {
  title: 'Company',
  description: `${site.statement} Our mission, engineering philosophy and how we work.`,
  alternates: { canonical: '/company/' },
};

const model = [
  { title: 'One accountable engineer', body: 'The person you talk to is the person designing and building your software. Nothing is lost in handoffs.' },
  { title: 'Scoped engagements', body: 'Work is agreed in clear phases with defined outcomes, so you always know what is being built and why.' },
  { title: 'Specialists when needed', body: 'If a project needs a skill outside our core, such as specialised design, we tell you up front and agree how to cover it.' },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Company" title="Engineering with purpose. Building for progress." />

      {/* Who we are */}
      <section aria-labelledby="who-we-are" className="container-x grid gap-12 pb-16 lg:grid-cols-12">
        <h2 id="who-we-are" className="sr-only">Who we are</h2>
        <Reveal className="text-xl text-fg lg:col-span-7">
          <p>
            Austenine is an independent, founder-led software engineering venture focused on helping startups,
            agencies, and growing businesses turn ideas into reliable digital products.
          </p>
          <p className="mt-6 text-fg-2">
            We focus on building web applications, SaaS platforms, backend systems, APIs, and cloud-based solutions with an
            emphasis on clean architecture, performance, and long-term maintainability.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <dl className="space-y-6 border-l border-line pl-6 text-sm">
            <div>
              <dt className="text-fg-3">Based in</dt>
              <dd className="mt-1 text-lg text-fg">{site.location}</dd>
            </div>
            <div>
              <dt className="text-fg-3">Clients</dt>
              <dd className="mt-1 text-lg text-fg">{site.availability}</dd>
            </div>
            <div>
              <dt className="text-fg-3">Operating model</dt>
              <dd className="mt-1 text-lg text-fg">Independent and founder-led</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Mission & vision */}
      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
        <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
        <div className="container-x relative grid gap-16 lg:grid-cols-2">
          {[
            { label: 'Mission', text: 'Make reliable software engineering accessible to businesses that want to build, improve, and scale their digital products.' },
            { label: 'Vision', text: 'Become a trusted engineering partner for businesses building the next generation of digital experiences.' },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1}>
              <h2 className="eyebrow">{b.label}</h2>
              <p className="mt-6 font-display text-3xl leading-tight text-fg sm:text-4xl">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy & principles */}
      <section className="container-x grid gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Engineering philosophy</p>
          <h2 className="mt-5 text-4xl sm:text-5xl">Software should be easy to trust and easy to change.</h2>
          <p className="mt-6 text-lg text-fg-2">
            We favour clear structure over clever code, proven tools over fashionable ones, and decisions that are written
            down. The goal is software that keeps working, and keeps being workable, long after launch.
          </p>
        </Reveal>
        <dl className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <dt>
                <span aria-hidden className="block font-display text-sm text-glow">0{i + 1}</span>
                <span className="mt-3 block text-xl text-fg">{p.title}</span>
              </dt>
              <dd className="mt-2 text-fg-2">{p.body}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* How we operate */}
      <section className="container-x pb-24 sm:pb-32">
        <Reveal>
          <p className="eyebrow">How we operate</p>
          <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">A founder-led model, by design.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {model.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08} className="h-full bg-ink p-8">
              <h3 className="text-xl">{m.title}</h3>
              <p className="mt-3 text-fg-2">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Engineering capabilities */}
      <section className="bg-ink-2 py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Engineering capabilities</p>
            <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">What we deliver.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.08} className="h-full bg-ink p-8">
                <p className="font-display text-sm text-glow">{p.number}</p>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-3 text-fg-2">{p.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-fg-2">
                  {p.services.map((sv) => (
                    <li key={sv} className="flex items-center gap-3">
                      <span aria-hidden className="size-1.5 rounded-full bg-glow" />
                      {sv}
                    </li>
                  ))}
                </ul>
                <ArrowLink href={p.href} className="mt-8">
                  Explore
                </ArrowLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process summary */}
      <section className="container-x pb-24 sm:pb-32">
        <Reveal>
          <p className="eyebrow">Working principles</p>
          <h2 className="mt-5 text-4xl sm:text-5xl">How a project runs.</h2>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {approach.map((s) => (
            <li key={s.number} className="bg-ink p-6">
              <p className="font-display text-sm text-glow">{s.number}</p>
              <p className="mt-3 text-lg text-fg">{s.title}</p>
              <p className="mt-2 text-sm text-fg-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <Technology />
      <CtaBand />
    </>
  );
}
