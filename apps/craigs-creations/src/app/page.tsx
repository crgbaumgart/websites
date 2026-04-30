import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-12 md:py-8 ">
        <nav className="flex items-center justify-between max-w-7xl  mx-auto">
          <Link
            href="/"
            className="font-display text-xl md:text-4xl text-white drop-shadow-md hover:text-terracotta-light"
          >
            Craig&apos;s Creations
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-lg text-white drop-shadow-md">
            <li>
              <Link href="/portfolio" className="hover:text-terracotta transition-colors:">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-terracotta transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-terracotta transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/book"
                className="bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2 rounded-md transition-colors"
              >
                Book a Session
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Photo */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <Image src="/images/hero.jpg" alt="" fill priority className="object-cover" sizes="100vw" />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-stone-900/40" />

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
    </>
  );
}
