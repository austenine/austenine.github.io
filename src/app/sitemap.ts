import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { projects } from '@/data/projects';
import { insights } from '@/data/insights';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    'services',
    'industries',
    'work',
    'insights',
    'company',
    'contact',
    'privacy',
    ...projects.map((p) => `work/${p.slug}`),
    ...insights.map((a) => `insights/${a.slug}`),
  ];
  return paths.map((path) => ({
    url: `${site.url}/${path ? `${path}/` : ''}`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/') ? 0.6 : 0.8,
  }));
}
