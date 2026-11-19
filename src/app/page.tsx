import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';
import { Capabilities } from '@/components/home/capabilities';
import { FeaturedWork } from '@/components/home/featured-work';
import { Industries } from '@/components/home/industries';
import { Approach } from '@/components/home/approach';
import { Technology } from '@/components/home/technology';
import { Insights } from '@/components/home/insights';
import { CtaBand } from '@/components/shared/cta-band';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Capabilities />
      <FeaturedWork />
      <Industries />
      <Approach />
      <Technology />
      <Insights />
      <CtaBand />
    </>
  );
}
