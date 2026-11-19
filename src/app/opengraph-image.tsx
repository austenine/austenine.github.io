import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const dynamic = 'force-static';
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Social preview card, rendered at build time from the brand gradient. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          color: '#fff',
          background: 'radial-gradient(circle at 85% 20%, #5CA8FF 0%, #1E51FF 25%, #10257A 50%, #0B0F15 80%)',
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 4, textTransform: 'uppercase', color: '#D6EAFF' }}>{site.name}</div>
        <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 900 }}>{site.tagline}</div>
        <div style={{ fontSize: 26, color: '#A7B1C2' }}>Software engineering · Digital solutions</div>
      </div>
    ),
    size,
  );
}
