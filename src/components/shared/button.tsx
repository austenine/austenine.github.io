import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-[var(--transition-base)] disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-accent text-white shadow-glow hover:bg-accent-hover hover:shadow-[0_0_48px_rgba(30,81,255,0.35)]',
  secondary: 'border border-line bg-white/[0.03] text-fg backdrop-blur hover:border-line-hover hover:bg-white/[0.06]',
  light: 'bg-white text-ink hover:bg-[#D6EAFF]',
} as const;

export type ButtonVariant = keyof typeof variants;

/** Shared with <button> elements (e.g. the contact form submit). */
export function buttonClass(variant: ButtonVariant = 'primary', className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <>
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );
  if (/^(mailto:|https?:)/.test(href)) {
    return (
      <a href={href} className={buttonClass(variant, className)}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {inner}
    </Link>
  );
}

/** Understated text link with an arrow, for "Explore capability" and similar. */
export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn('group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-glow', className)}
    >
      {children}
      <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
