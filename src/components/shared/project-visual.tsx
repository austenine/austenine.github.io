import type { Project } from '@/types';
import { cn } from '@/lib/utils';

/**
 * Illustrative product mockups drawn in SVG — no screenshots exist for concept
 * projects, and these deliberately show interface shapes rather than numbers.
 * Swap for real screenshots (in public/images/) when a project is built.
 */
export function ProjectVisual({ visual, className }: { visual: Project['visual']; className?: string }) {
  return (
    <div
      className={cn('relative overflow-hidden rounded-lg border border-line', className)}
      style={{ background: 'radial-gradient(120% 90% at 85% 0%, #10257A 0%, #0D1B36 45%, #0B0F15 100%)' }}
    >
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <svg viewBox="0 0 640 400" role="img" aria-label="Illustrative interface mockup" className="relative h-full w-full">
        <defs>
          <linearGradient id={`pv-${visual}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1E51FF" />
            <stop offset="1" stopColor="#5CA8FF" />
          </linearGradient>
        </defs>
        {/* window */}
        <g transform="translate(56 44)">
          <rect width="528" height="330" rx="14" fill="#151B25" stroke="rgba(255,255,255,0.12)" />
          <circle cx="20" cy="18" r="4" fill="#717D90" />
          <circle cx="34" cy="18" r="4" fill="#717D90" opacity=".6" />
          <circle cx="48" cy="18" r="4" fill="#717D90" opacity=".35" />
          <line x1="0" y1="36" x2="528" y2="36" stroke="rgba(255,255,255,0.08)" />
          <g transform="translate(0 36)">{scenes[visual](`url(#pv-${visual})`)}</g>
        </g>
      </svg>
    </div>
  );
}

const bar = (x: number, y: number, w: number, o = 0.14) => <rect x={x} y={y} width={w} height="8" rx="4" fill="#fff" opacity={o} />;

const scenes: Record<Project['visual'], (accent: string) => React.ReactNode> = {
  billing: (accent) => (
    <>
      <rect width="120" height="294" fill="#101722" />
      {[24, 52, 80, 108].map((y, i) => bar(20, y, i === 0 ? 70 : 56, i === 0 ? 0.5 : 0.14))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${140 + i * 126} 20)`}>
          <rect width="114" height="70" rx="10" fill="#1E2229" />
          {bar(14, 16, 50)}
          <rect x="14" y="38" width={i === 1 ? 80 : 64} height="14" rx="5" fill={i === 1 ? accent : '#fff'} opacity={i === 1 ? 1 : 0.5} />
        </g>
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(140 ${110 + i * 34})`}>
          <rect width="366" height="26" rx="6" fill={i === 1 ? 'rgba(30,81,255,0.18)' : '#1E2229'} />
          {bar(12, 9, 90, 0.3)}
          {bar(160, 9, 60)}
          <rect x="300" y="6" width="52" height="14" rx="7" fill={i === 3 ? '#717D90' : accent} opacity={i === 3 ? 0.5 : 0.85} />
        </g>
      ))}
    </>
  ),
  booking: (accent) => (
    <>
      {bar(24, 22, 120, 0.45)}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => {
          const on = (r * 5 + c) % 3 === 1;
          const x = 34 + c * 70;
          const y = 60 + r * 56;
          return c % 2 ? (
            <rect key={`${r}${c}`} x={x} y={y} width="44" height="36" rx="8" fill={on ? accent : '#1E2229'} stroke="rgba(255,255,255,0.1)" />
          ) : (
            <circle key={`${r}${c}`} cx={x + 22} cy={y + 18} r="19" fill={on ? accent : '#1E2229'} stroke="rgba(255,255,255,0.1)" />
          );
        }),
      )}
      <rect x="388" y="20" width="120" height="254" rx="10" fill="#101722" />
      {[44, 96, 148, 200].map((y, i) => (
        <g key={y}>
          <rect x="400" y={y} width="96" height="40" rx="8" fill="#1E2229" />
          {bar(410, y + 10, 60, 0.4)}
          {bar(410, y + 24, 40)}
          {i === 0 ? <circle cx="486" cy={y + 12} r="4" fill="#4B9FFF" /> : null}
        </g>
      ))}
    </>
  ),
  analytics: (accent) => (
    <>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${24 + i * 122} 20)`}>
          <rect width="110" height="58" rx="10" fill="#1E2229" />
          {bar(12, 14, 46)}
          <rect x="12" y="32" width="58" height="12" rx="4" fill="#fff" opacity=".55" />
        </g>
      ))}
      <rect x="24" y="94" width="306" height="180" rx="10" fill="#1E2229" />
      {[130, 170, 210, 250].map((y) => (
        <line key={y} x1="40" x2="314" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
      ))}
      <path d="M40 240 C80 230 96 200 130 204 S180 170 210 176 S260 130 314 120 L314 258 L40 258 Z" fill={accent} opacity=".18" />
      <path d="M40 240 C80 230 96 200 130 204 S180 170 210 176 S260 130 314 120" fill="none" stroke={accent} strokeWidth="3" />
      <rect x="346" y="94" width="158" height="180" rx="10" fill="#1E2229" />
      {[60, 92, 74, 120, 104, 138].map((h, i) => (
        <rect key={i} x={364 + i * 22} y={256 - h} width="14" height={h} rx="4" fill={i === 5 ? accent : '#fff'} opacity={i === 5 ? 1 : 0.18} />
      ))}
    </>
  ),
  assistant: (accent) => (
    <>
      <rect width="130" height="294" fill="#101722" />
      {[24, 50, 76, 102].map((y, i) => bar(18, y, 90, i === 0 ? 0.45 : 0.14))}
      <g transform="translate(270 24)">
        <rect width="220" height="40" rx="14" fill={accent} />
        {bar(16, 16, 150, 0.8)}
      </g>
      <g transform="translate(152 82)">
        <rect width="300" height="112" rx="14" fill="#1E2229" />
        {bar(18, 20, 240, 0.4)}
        {bar(18, 38, 260, 0.25)}
        {bar(18, 56, 200, 0.25)}
        <rect x="18" y="78" width="86" height="20" rx="10" fill="rgba(75,159,255,0.18)" stroke="#4B9FFF" strokeOpacity=".5" />
        <rect x="112" y="78" width="74" height="20" rx="10" fill="rgba(75,159,255,0.18)" stroke="#4B9FFF" strokeOpacity=".5" />
      </g>
      <g transform="translate(152 236)">
        <rect width="354" height="40" rx="20" fill="#1E2229" stroke="rgba(255,255,255,0.1)" />
        {bar(20, 16, 140)}
        <circle cx="332" cy="20" r="12" fill={accent} />
      </g>
    </>
  ),
};
