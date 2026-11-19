'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { nav } from '@/lib/site';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/shared/button';
import { Logo } from './logo';

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Escape closes; click outside closes the dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);
  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500',
        solid ? 'border-line bg-ink/75 backdrop-blur-xl' : 'border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Main" className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Austenine, home" className="relative z-10">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === 'Services' ? (
              <li
                key={item.href}
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(navLink, isActive(item.href) && 'text-fg')}
                >
                  Services
                  <ChevronDown aria-hidden className={cn('size-4 transition-transform', servicesOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {servicesOpen ? (
                    <motion.div
                      id="services-menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease }}
                      className="absolute top-full left-1/2 w-[22rem] -translate-x-1/2 pt-3"
                    >
                      <ul className="rounded-lg border border-line bg-ink-2/95 p-2 shadow-card backdrop-blur-xl">
                        {services.map((s) => (
                          <li key={s.id}>
                            <Link href={`/services/#${s.id}`} className="block rounded-md px-4 py-3 transition-colors hover:bg-white/5 focus-visible:bg-white/5">
                              <span className="block text-sm text-fg">{s.title}</span>
                              <span className="mt-0.5 block text-xs leading-relaxed text-fg-3">{s.summary}</span>
                            </Link>
                          </li>
                        ))}
                        <li className="mt-1 border-t border-line pt-1">
                          <Link href="/services/" className="block rounded-md px-4 py-3 text-sm text-glow hover:bg-white/5">
                            All services →
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={cn(navLink, isActive(item.href) && 'text-fg')}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-3">
          <ButtonLink href="/contact/" className="hidden px-5 py-2.5 sm:inline-flex">
            Let’s Talk
          </ButtonLink>
          <button
            type="button"
            className="relative z-10 inline-flex size-11 items-center justify-center rounded-full border border-line text-fg lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 h-[calc(100dvh-5rem)] overflow-y-auto bg-ink lg:hidden"
          >
            <ul className="container-x flex flex-col pt-6 pb-10">
              {[{ href: '/', label: 'Home' }, ...nav, { href: '/contact/', label: 'Contact' }].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.04 * i }}
                  className="border-b border-line"
                >
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="font-display flex items-center justify-between py-5 text-3xl text-fg"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-x pb-12">
              <ButtonLink href="/contact/" className="w-full">
                Discuss a Project
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

const navLink =
  'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-fg-2 transition-colors hover:text-fg';
