/**
 * Site-wide facts. Every value marked TODO must be replaced before launch.
 *
 * Accuracy rules (see README): Austenine is an independent, founder-led venture
 * in India, not a registered company. Never add a legal suffix, registration
 * number, office address, headcount, client logos or testimonials here.
 */
export const site = {
  name: 'Austenine',
  shortName: 'Austenine',
  tagline: 'Engineering ideas into digital products.',
  statement: 'An independent, founder-led software engineering venture based in India.',
  description:
    'Austenine is an independent, founder-led software engineering venture based in India, helping startups, agencies and growing businesses build, modernise and scale digital products.',

  // TODO: both only work once austenine.com is registered and the mailbox exists.
  url: 'https://austenine.com',
  email: 'austenine.team@gmail.com',
  location: 'India',
  availability: 'Working with clients globally',

  social: {
    linkedin: '', // TODO: LinkedIn URL. Hidden everywhere while empty.
  },

  founder: {
    // TODO: replace the bracketed placeholders. Rendered on /company.
    name: '[Founder name]',
    role: 'Founder & Engineer',
    bio: [
      '[Two or three sentences on your engineering background: the kinds of systems you have built, the stacks you work in, and how many years you have been doing it.]',
      '[One sentence on why you started Austenine and the kind of work you want to take on.]',
    ],
    linkedin: '', // TODO: personal LinkedIn URL. Hidden while empty.
  },
} as const;

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/work/', label: 'Our Work' },
  { href: '/insights/', label: 'Insights' },
  { href: '/company/', label: 'Company' },
] as const;
