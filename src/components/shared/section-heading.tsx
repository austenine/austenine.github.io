import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

/** Eyebrow + large editorial heading + optional supporting copy. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <Reveal className={cn('max-w-3xl', className)}>
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <Tag className="text-4xl sm:text-5xl lg:text-6xl">{title}</Tag>
      {children ? <div className="mt-6 max-w-2xl text-lg text-fg-2">{children}</div> : null}
    </Reveal>
  );
}

/** Top of every inner page: grid + glow backdrop, h1, intro. */
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-28">
      <div aria-hidden className="grid-lines absolute inset-0" />
      <div aria-hidden className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full blur-2xl" style={{ background: "var(--gradient-glow)" }} />
      <div className="container-x relative">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} className="max-w-4xl [&_h1]:text-5xl [&_h1]:sm:text-6xl [&_h1]:lg:text-7xl">
          {children}
        </SectionHeading>
      </div>
    </section>
  );
}
