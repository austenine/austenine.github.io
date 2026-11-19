import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { PageHero } from '@/components/shared/section-heading';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `How ${site.name} handles the information you send through this website.`,
  alternates: { canonical: '/privacy/' },
};

// TODO: have this reviewed before launch, and update it if you add analytics or cookies.
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Your information, plainly explained." />
      <div className="container-x pb-32">
        <div className="max-w-3xl space-y-10 text-lg text-fg-2 [&_h2]:mb-3 [&_h2]:text-2xl">
          <section>
            <h2>Who we are</h2>
            <p>
              {site.name} is an independent, founder-led software engineering venture based in {site.location}. You can reach us
              about anything on this page at{' '}
              <a href={`mailto:${site.email}`} className="text-glow hover:underline">
                {site.email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2>What we collect</h2>
            <p>
              Only what you send through the contact form: your name, email address, company name, the service you are
              interested in, your project description, and any budget or timeline you choose to share.
            </p>
          </section>
          <section>
            <h2>How we use it</h2>
            <p>
              To reply to your enquiry and, if we work together, to run the project. We do not sell your information, add
              you to mailing lists, or share it with anyone except the services needed to deliver your message.
            </p>
          </section>
          <section>
            <h2>Services involved</h2>
            <p>
              Form submissions are delivered to our inbox by Web3Forms. Fonts are loaded from Google Fonts, which receives
              your IP address when the page loads. This site does not use analytics or advertising cookies.
            </p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>
              You can ask us at any time what we hold about you, and ask us to correct or delete it, by emailing{' '}
              <a href={`mailto:${site.email}`} className="text-glow hover:underline">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
