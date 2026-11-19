import Link from 'next/link';
import { nav, site } from '@/lib/site';
import { services } from '@/data/services';
import { Logo } from './logo';

const columns = [
  { title: 'Navigation', links: [{ href: '/', label: 'Home' }, ...nav] },
  { title: 'Services', links: services.map((s) => ({ href: `/services/#${s.id}`, label: s.title })) },
  {
    title: 'Company',
    links: [
      { href: '/company/', label: 'About us' },
      { href: '/contact/', label: 'Contact' },
      { href: '/privacy/', label: 'Privacy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="container-x grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Austenine, home">
            <Logo />
          </Link>
          <p className="mt-6 max-w-sm text-fg-2">{site.statement}</p>
          <a href={`mailto:${site.email}`} className="mt-8 inline-block font-display text-xl text-fg transition-colors hover:text-glow">
            {site.email}
          </a>
          {site.social.linkedin ? (
            <p className="mt-4">
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-fg-2 hover:text-fg">
                LinkedIn ↗
              </a>
            </p>
          ) : null}
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="lg:col-span-2 lg:first-of-type:col-start-7">
            <h2 className="eyebrow text-fg-3">{col.title}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-fg-2 transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container-x flex flex-col gap-3 border-t border-line py-8 text-xs text-fg-3 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
        <p>{site.availability}.</p>
      </div>
    </footer>
  );
}
