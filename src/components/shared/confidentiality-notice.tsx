import { ShieldCheck } from 'lucide-react';

/** Shown at the foot of /work and every case study. */
export function ConfidentialityNotice({ className }: { className?: string }) {
  return (
    <aside aria-labelledby="confidentiality" className={className}>
      <div className="flex gap-4 rounded-lg border border-line bg-ink-2 p-6 text-sm text-fg-2">
        <ShieldCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-glow" />
        <div>
          <h2 id="confidentiality" className="text-base text-fg">
            Confidentiality notice
          </h2>
          <p className="mt-2 w-full">
            This case study presents a recreated and anonymized representation of enterprise software engineering experience. All interface screenshots, names, records, and sample data are illustrative and do not contain
            actual client information or production data. Certain implementation details have been generalized to
            respect confidentiality obligations.
          </p>
        </div>
      </div>
    </aside>
  );
}
