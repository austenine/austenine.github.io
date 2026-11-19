import { ButtonLink } from '@/components/shared/button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div aria-hidden className="grid-lines absolute inset-0" />
      <div className="container-x relative">
        <p className="font-display text-8xl text-gradient sm:text-9xl">404</p>
        <h1 className="mt-6 text-4xl sm:text-5xl">This page doesn’t exist.</h1>
        <p className="mt-4 max-w-md text-lg text-fg-2">It may have moved, or the link may be wrong.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact/" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
