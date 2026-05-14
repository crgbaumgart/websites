import { SiteHeader } from '@/components/Headers';
import { SiteWidthContainer } from '@/components/Containers';

export default function AboutPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="min-h-screen py-12 md:py-16">
        <SiteWidthContainer>
          <header className="md-12">
            <h1 className="font-display text-4xl md:text-6xl text-stone-900">About</h1>
            <p className="mt-4 text-xl text-terracotta max-w-2xl">
              Photographer, based in Denton, TX.
            </p>
          </header>

          <div className="max-w-2xl">
            <p className="text-lg text-stone-400 leading-relaxed">More about me is coming soon.</p>
          </div>
        </SiteWidthContainer>
      </main>
    </>
  );
}
