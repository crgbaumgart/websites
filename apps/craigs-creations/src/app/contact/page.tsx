import { SiteWidthContainer } from '@/components/Containers';
import { SiteHeader } from '@/components/Headers';

export default function ContactPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="min-h-screen py-12 md:py-16">
        <SiteWidthContainer>
          <header className="mb-12">
            <h1 className="front-display text-4xl md:text-5xl text-terracotta">Contact</h1>
            <p className="mt-4 tet-l text-stone-400 max-w-2xl">
              Let&apos;s talk about your next personalized photography session.
            </p>
          </header>

          <div className="max-w-2xl">
            <p className="text-md text-stone-400 leading-relaxed">
              Your patience is valued and appreciated as a proper contact form is on its way.. In
              the meantime, the fastest way is by email. Thank you!
            </p>

            <div className="mt-8 space-y-2">
              <p className="text-stone-400 md:text-lg">Email:</p>
              <a
                href="mailto:craigscreationstx@gmail.com"
                className="font-display text-2xl text-terracotta hover:text-terracotta transition-colors"
              >
                craigscreationstx@gmail.com
              </a>
            </div>

            <div className="mt-8 space-y-2">
              <p className="text-stone-400 md:text-lg text-">Based out of:</p>
              <p className="font-display text-2xl text-terracotta">Denton, Texas</p>
            </div>
          </div>
        </SiteWidthContainer>
      </main>
    </>
  );
}
