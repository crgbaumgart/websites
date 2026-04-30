import Image from 'next/image';
import Link from 'next/link';

import { HomePageNavHeader } from '@/components/Headers';
import { FeaturedWork } from '@/components/FeaturedWork';

export default function HomePage() {
  return (
    <>
      {/* Navigation Header */}
      <HomePageNavHeader />

      {/* Hero Image Overlay */}
      <HeroPhoto />

      {/* Image Grid that Features Specific Photos */}
      <FeaturedWork />
    </>
  );
}

function HeroPhoto() {
  return (
    <section className="relative h-screen min-h-150 flex items-end">
      <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" sizes="100vw" />

      <div className="absolute inset-0 bg-linear-to-t from-stone-900/70 via-stone-900/20 to-stone-900/40" />

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto w-full">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight max-w-3xl">
          Honest portraits.
          <br />
          Real moments.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
          Photography in Denton, Texas — for the people, places, and stories worth remembering.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/book"
            className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-md text-base font-medium transition-colors"
          >
            Book a Session
          </Link>
          <Link
            href="/portfolio"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md text-base font-medium transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
