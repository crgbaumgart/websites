import Link from 'next/link';

import { SiteWidthContainer } from '@/components/Containers';
import { SiteHeader } from '@/components/Headers';

export default function BookingPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <SiteWidthContainer>
          <header className="mb-12">
            <h1 className="font-display text-4xl md:text-6xl text-stone-800">
              Book a Private Session
            </h1>
            <p className="mt-4 text-xl text-terracotta-light max-w-4xl">
              Portraits, Events, Candid, Landscapes, Studio, and Intimate Photography.
            </p>
          </header>

          <div className="max-w-2xl space-y-6">
            <p className="text-lg text-stone-400 leading-relaxed">
              Online booking is coming soon. For now, the best way to start booking a session is to
              reach out to me directly & tell me what you have in mind.
              <br />
              <br />
              We&apos;ll figure out the details together!
            </p>

            <Link
              href="/contact"
              className="inline-block bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-md text-base font-medium transition-colors"
            >
              Get in Touch.
            </Link>
          </div>
        </SiteWidthContainer>
      </main>
    </>
  );
}
