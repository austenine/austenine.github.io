'use client';

import { motion } from 'motion/react';
import { ButtonLink } from '@/components/shared/button';
import { HeroSculpture } from './hero-sculpture';

const ease = [0.22, 1, 0.36, 1] as const;
const headline = 'We turn ambitious ideas into powerful digital experiences.';

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0" />
        <div
          className="animate-drift absolute top-[-20%] right-[-25%] h-[80vmax] w-[80vmax] rounded-full opacity-70 blur-3xl sm:right-[-10%]"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30,81,255,0.35), rgba(16,37,122,0.25) 35%, transparent 65%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <HeroSculpture className="pointer-events-none absolute top-1/2 right-[-45%] -z-10 w-[130%] max-w-none -translate-y-1/2 opacity-50 sm:right-[-25%] sm:w-[95%] lg:right-[-8%] lg:w-[62%] lg:opacity-100" />

      <div className="container-x">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          Software Engineering · Digital Solutions
        </motion.p>

        <h1 className="mt-7 max-w-[14ch] text-[2.75rem] leading-[1.02] sm:text-7xl lg:max-w-[15ch] lg:text-[5.5rem]">
          {headline.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={`inline-block ${i >= 5 ? 'text-[#9CC8FF]' : ''}`}
                initial={{ y: '105%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.06 }}
              >
                {word}
              </motion.span>
              {' '}
            </span>
          ))}
        </h1>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.8 }}>
          <p className="mt-8 max-w-xl text-lg text-fg-2 sm:text-xl">
            From product development to cloud engineering, we help businesses move forward with technology.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#capabilities">Explore Our Capabilities</ButtonLink>
            <ButtonLink href="/contact/" variant="secondary">
              Discuss Your Project
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
