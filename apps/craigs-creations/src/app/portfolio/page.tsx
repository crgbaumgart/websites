'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { photos, categories, type PhotoCategory } from '@/data/photos';

type FilterValue = 'all' | PhotoCategory;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1); // -1 = closed

  const filteredPhotos = photos.filter((photo) => {
    if (activeFilter === 'all') {
      return true;
    }
    return photo.category === activeFilter;
  });

  // Convert data.photos into object form lightbox-lib is expecting
  const lightboxSlides = filteredPhotos.map((photo) => ({
    src: photo.path,
    alt: photo.alt,
    width: photo.aspectRatio[0],
    height: photo.aspectRatio[1],
  }));

  // Filter by Category Buttons
  return (
    <main className="min-h-screen px-12 py-24 md:px-24 md:py-12">
      <header className="mb-12">
        <Link href="/" className="font-display text-xl md:text-4xl text-terracotta drop-shadow-md">
          Craig&apos;s Creations
        </Link>
        <h1 className="font-display text-4xl md:text-7xl text-white">Portfolio</h1>
        <p className="mt-4 text-xl text-terracotta-light max-w-8xl">
          A selection of recent work across... Portraits, Events, Landscapes, Studio, and Intimate
          Photography;
        </p>
      </header>

      <nav className="flex flex-wrap gap-2 mb-12" aria-label="Filter photos by category">
        <FilterButton
          isActive={activeFilter === 'all'}
          onClick={() => setActiveFilter('all')}
          label="All"
        />
        {categories.map((cat) => (
          <FilterButton
            key={cat.slug}
            isActive={activeFilter === cat.slug}
            onClick={() => setActiveFilter(cat.slug)}
            label={cat.label}
          />
        ))}
      </nav>

      {/* Portfolio Photo Grid */}
      {filteredPhotos.length === 0 ? (
        <p className="text-stone-500 italic">No photos in {activeFilter} category yet.</p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 space-y-3.5">
          {filteredPhotos.map((photo, index) => (
            <button
              key={photo.path}
              onClick={() => setLightboxIndex(index)}
              className="relative block w-full break-inside-avoid overflow-hidden rounded-md bg-black cursor-zoom-in"
              style={{ aspectRatio: `${photo.aspectRatio[0]}/${photo.aspectRatio[1]}` }}
            >
              <Image
                src={photo.path}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
      />
    </main>
  );
}

function FilterButton({
  isActive,
  onClick,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-5 py-3 rounded-md text-lg font-medium transition-colors ${
        isActive
          ? 'bg-terracotta text-white'
          : 'bg-stone-100 text-stone-700 hover:bg-terracotta-light'
      }`}
    >
      {label}
    </button>
  );
}
