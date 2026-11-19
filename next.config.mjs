/**
 * Static export for GitHub Pages.
 *
 * The site is served either from a domain root (custom domain) or from a
 * project subpath such as /site. The deploy workflow feeds the right value in
 * from actions/configure-pages; it emits "" for a custom domain and "/site"
 * for a project page, but can also emit a bare "/", which Next rejects.
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath = raw === '/' ? '' : raw.replace(/\/+$/, '');

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  // Re-export the normalised value so components (see src/components/Img.tsx)
  // read the same string this config used, not the raw environment variable.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
  images: { unoptimized: true },
};
