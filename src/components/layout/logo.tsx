/**
 * Crystal A: the letter A built from lattice atoms and bonds — a nod to
 * austenite, steel's crystal structure. The bright apex atom is the "peak".
 * app/icon.svg is a simplified version for favicon sizes.
 */
export function LogoMark({ className = 'size-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={`shrink-0 overflow-visible ${className}`}>
      <defs>
        <linearGradient id="au-bond" x1="16" y1="4" x2="16" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5CA8FF" />
          <stop offset="1" stopColor="#1E51FF" />
        </linearGradient>
      </defs>
      <path
        d="M16 4 5 27M16 4 27 27M10.5 15.5h11M10.5 15.5 16 27l5.5-11.5M5 27h22"
        fill="none"
        stroke="url(#au-bond)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="4" r="2.7" fill="#D6EAFF" />
      <circle cx="10.5" cy="15.5" r="2.3" fill="#5CA8FF" />
      <circle cx="21.5" cy="15.5" r="2.3" fill="#5CA8FF" />
      <circle cx="5" cy="27" r="2.3" fill="#1E51FF" />
      <circle cx="16" cy="27" r="2.3" fill="#1E51FF" />
      <circle cx="27" cy="27" r="2.3" fill="#1E51FF" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark />
      <span className="font-display text-[1.15rem] font-[450] tracking-[0.22em] text-fg">AUSTENINE</span>
    </span>
  );
}
