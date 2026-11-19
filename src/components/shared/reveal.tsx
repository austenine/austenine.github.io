'use client';

import { MotionConfig, motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

/** Root wrapper: Motion honours prefers-reduced-motion everywhere (transforms off, fades kept). */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades and lifts its children into view once, on scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** A horizontal or vertical line that draws itself in when scrolled into view. */
export function DrawLine({ className, vertical = false }: { className?: string; vertical?: boolean }) {
  return (
    <motion.span
      aria-hidden
      className={className}
      style={{ originX: 0, originY: 0 }}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.6, ease }}
    />
  );
}
