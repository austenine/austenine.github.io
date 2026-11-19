import type { Metadata } from 'next';
import { Globe2, Mail, MapPin } from 'lucide-react';
import { site } from '@/lib/site';
import { ContactForm } from '@/components/contact/contact-form';
import { PageHero } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have a project idea or need engineering support? Tell Austenine about it.',
  alternates: { canonical: '/contact/' },
};

const next = [
  'We read your message and reply personally.',
  'A short call to understand the problem and constraints.',
  'A written proposal with scope, approach and estimate.',
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s build something meaningful.">
        Have a project idea, need engineering support, or looking for a development partner? We’d love to hear from you.
      </PageHero>

      <div className="container-x grid gap-14 pb-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <ul className="space-y-6">
            <li className="flex gap-4">
              <Mail aria-hidden className="mt-1 size-5 text-glow" />
              <div>
                <p className="text-sm text-fg-3">Email</p>
                <a href={`mailto:${site.email}`} className="text-lg break-all text-fg hover:text-glow">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin aria-hidden className="mt-1 size-5 text-glow" />
              <div>
                <p className="text-sm text-fg-3">Location</p>
                <p className="text-lg text-fg">{site.location}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Globe2 aria-hidden className="mt-1 size-5 text-glow" />
              <div>
                <p className="text-sm text-fg-3">Availability</p>
                <p className="text-lg text-fg">{site.availability}</p>
              </div>
            </li>
          </ul>

          <div className="mt-12 border-t border-line pt-10">
            <h2 className="text-2xl">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {next.map((step, i) => (
                <li key={step} className="flex gap-4 text-fg-2">
                  <span className="font-display text-sm text-glow">0{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </>
  );
}
