/**
 * Abstract "sculpture": a twisted column of elliptical rings around a glowing
 * sphere, drawn in SVG so it costs no WebGL and scales on any screen.
 * Ambient motion is CSS-only and switches off under prefers-reduced-motion.
 */
const N = 34;
const r = (n: number) => Math.round(n * 100) / 100;

const rings = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1);
  const rx = 90 + 210 * Math.sin(Math.PI * (0.1 + 0.8 * t)) ** 1.4;
  return {
    cy: r(150 + t * 500),
    rx: r(rx),
    ry: r(rx * 0.26),
    rotate: r(-28 + t * 56),
    opacity: r(0.18 + 0.7 * Math.sin(Math.PI * t)),
  };
});

export function HeroSculpture({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 800" aria-hidden className={className}>
      <defs>
        <linearGradient id="hs-stroke" x1="0" y1="1" x2="0.4" y2="0">
          <stop offset="0" stopColor="#10257A" />
          <stop offset="0.45" stopColor="#1E51FF" />
          <stop offset="0.8" stopColor="#5CA8FF" />
          <stop offset="1" stopColor="#D6EAFF" />
        </linearGradient>
        <radialGradient id="hs-orb" cx="0.68" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#D6EAFF" />
          <stop offset="0.2" stopColor="#5CA8FF" />
          <stop offset="0.5" stopColor="#1E51FF" />
          <stop offset="1" stopColor="#090E1A" />
        </radialGradient>
        <radialGradient id="hs-halo">
          <stop offset="0" stopColor="#4B9FFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#4B9FFF" stopOpacity="0" />
        </radialGradient>
        <filter id="hs-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="28" />
        </filter>
      </defs>

      {/* halo */}
      <circle cx="430" cy="380" r="300" fill="url(#hs-halo)" className="animate-drift" />

      {/* orbit with a travelling point */}
      <g style={{ transformOrigin: '400px 400px' }} className="animate-spin-slow">
        <ellipse cx="400" cy="400" rx="360" ry="360" fill="none" stroke="rgba(255,255,255,0.07)" />
        <circle cx="400" cy="40" r="4" fill="#D6EAFF" />
        <circle cx="400" cy="40" r="14" fill="#4B9FFF" opacity="0.25" />
      </g>
      <ellipse cx="400" cy="400" rx="300" ry="300" fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 8" />

      {/* rings behind the orb */}
      <g fill="none" stroke="url(#hs-stroke)" strokeWidth="1.4">
        {rings.slice(0, N / 2).map((ring, i) => (
          <ellipse key={i} cx="400" cy={ring.cy} rx={ring.rx} ry={ring.ry} opacity={ring.opacity} transform={`rotate(${ring.rotate} 400 ${ring.cy})`} />
        ))}
      </g>

      {/* orb */}
      <circle cx="450" cy="370" r="128" fill="#1E51FF" opacity="0.5" filter="url(#hs-blur)" />
      <circle cx="450" cy="370" r="118" fill="url(#hs-orb)" />
      <ellipse cx="418" cy="320" rx="46" ry="22" fill="#fff" opacity="0.18" transform="rotate(-30 418 320)" />

      {/* rings in front of the orb */}
      <g fill="none" stroke="url(#hs-stroke)" strokeWidth="1.4">
        {rings.slice(N / 2).map((ring, i) => (
          <ellipse key={i} cx="400" cy={ring.cy} rx={ring.rx} ry={ring.ry} opacity={ring.opacity} transform={`rotate(${ring.rotate} 400 ${ring.cy})`} />
        ))}
      </g>
    </svg>
  );
}
