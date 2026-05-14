import Link from 'next/link';

import { SiteWidthContainer } from '@/components/Containers';

type SiteHeaderProps = {
  /**
   * 'overlay' floats the header over the page (white text, absolute positioning)
   * 'solid' sits the header in the normal page flow (terracotta logo, dark links)
   */
  variant?: 'overlay' | 'solid';
};

export function SiteHeader({ variant = 'overlay' }: SiteHeaderProps) {
  const isOverlay = variant === 'overlay';

  const headerPositionClass = isOverlay ? 'absolute top-0 left-0 right-0 z-20' : 'relative';

  const logoColorClass = isOverlay ? 'text-white drop-shadow-md' : 'text-terracotta';

  return (
    <header className={`${headerPositionClass} py6 md:py-8`}>
      <SiteWidthContainer>
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className={`font-display text-xl md:text-4xl hover:text-terracotta-light transition-colors ${logoColorClass}`}
          >
            Craig&apos;s Creations
          </Link>
          <HeaderNavLinks variant={variant} />
        </nav>
      </SiteWidthContainer>
    </header>
  );
}

// export function HomePageNavHeader() {
//   return (
//     <header className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-12 md:py-8">
//       <SiteWidthContainer>
//         <nav className="flex items-center justify-between max-w-7xl  mx-auto">
//           <Link
//             href="/"
//             className="font-display text-xl md:text-4xl text-white drop-shadow-md hover:text-terracotta-light"
//           >
//             Craig&apos;s Creations
//           </Link>

//           <HeaderBasicNavigation />
//         </nav>
//       </SiteWidthContainer>
//     </header>
//   );
// }

// export function AboutPageHeader() {
//   return (
//     <header className="absolute top-0 left-0 right-0 z-20 px-6 py-6 md:px-12 md:py-8 ">
//       <nav className="flex items-center justify-between max-w-7xl  mx-auto">
//         <Link
//           href="/"
//           className="font-display text-xl md:text-4xl text-white drop-shadow-md hover:text-terracotta-light"
//         >
//           Craig&apos;s Creations
//         </Link>

//         <HeaderBasicNavigation />
//       </nav>
//     </header>
//   );
// }

// export function PortfolioPageHeader() {
//   return (
//     <header className="mb-12">
//       <nav className="flex items-center justify-between max-w-7xl  mx-auto">
//         <Link
//           href="/"
//           className="font-display text-xl md:text-4xl text-terracotta drop-shadow-md hover:text-terracotta-light"
//         >
//           Craig&apos;s Creations
//         </Link>
//       </nav>

//       <h1 className="font-display text-4xl md:text-7xl text-white">Portfolio</h1>
//       <p className="mt-4 text-xl text-terracotta-light max-w-8xl">
//         A selection of recent work across... Portraits, Events, Landscapes, Studio, and Intimate
//         Photography;
//       </p>
//     </header>
//   );
// }

function HeaderNavLinks({ variant }: { variant: 'overlay' | 'solid' }) {
  const linkColorClass = variant === 'overlay' ? 'text-white drop-shadow-md' : 'text-stone-900';

  return (
    <ul className={`hidden md:flex items-center gap-8 text-lg ${linkColorClass}`}>
      <li>
        <Link href="/portfolio" className="hover:text-terracotta transition-colors">
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
          href="/booking"
          className="bg-terracotta hover:bg-terracotta-dark text-white px-5 py-2 rounded-md transition-colors"
        >
          Book a Session
        </Link>
      </li>
    </ul>
  );
}
