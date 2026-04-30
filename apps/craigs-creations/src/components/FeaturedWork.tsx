import Image from 'next/image';
import Link from 'next/link';

import { featuredPhotos } from '@/data/photos';

const maxPixelWidth: number = 250;

export function FeaturedWork() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-32 max-2-7xl mx-auto">
      <header className="mb-12 mb:mb-16">
        <p className="text-sm font-medium text-terracotta uppercase tracking-widest">
          Selected Work
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl text-stone-900">
          Moments worth remembering
        </h2>
      </header>

      {/* Photo strip - flexbox row w/ photos @ uniform-height, variable-width, 
      based on aspect ratio. Then wraps to multiple rows. */}
      <div className="flex flex-wrap gap-3">
        {featuredPhotos.map((photo) => {
          const [w, h] = photo.aspectRatio;
          const widthAtRowHeight = (maxPixelWidth * w) / h;

          return (
            <div
              key={photo.path}
              className="relative h-[250px] md:h-[300px] lg:h-[350px] flex-shrink-0 overflow-hidden rounded-md bg-stone-200"
              style={{
                aspectRatio: `${w}/${h}`,
                flexBasis: `${widthAtRowHeight}px`,
                flexGrow: 1,
              }}
            >
              <Image
                src={photo.path}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-12 md:mt-16 flex justify-center">
        <Link
          href="/portfolio"
          className="inline-block bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-md tex-base font-medium transition-colors"
        >
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}
