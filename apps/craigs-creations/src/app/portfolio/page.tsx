'use client';

import Image from 'next/image';
import { useState } from 'react';
import { photos, categories, type PhotoCategory } from '@/data/photos';

type FilterValue = 'all' | PhotoCategory;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filteredPhotos = photos.filter((photo) => {
    if (activeFilter === 'all') {
      return true;
    }
    return photo.category === activeFilter;
  });

  // Filter by Category Buttons
  return (
    <main className="min-h-screen px-12 py-24 md:px-12 md:py-32 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="font-display text-4xl md:text-6xl text-white">Portfolio</h1>
        <p className="mt-4 text-xl text-terracotta max-w-2xl">
          A selection of recent work across portraits, events, landscapes, studio, and intimate
          photography.
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

      {/* Porfolio Photo Grid */}
      {filteredPhotos.length === 0 ? (
        <p className="text-stone-500 italic">No photos in {activeFilter} category yet.</p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 space-y-3.5">
          {/* <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-3.5">     */}
          {filteredPhotos.map((photo) => (
            <div
              key={photo.path}
              // className="mb-4 break-inside-avoid"
              className="relative break-inside-avoid overflow-hidden rounded-md bg-stone-200"
              style={{ aspectRatio: `${photo.aspectRatio[0]}/${photo.aspectRatio[1]}` }}
            >
              <Image
                src={photo.path}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
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
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? 'bg-terracotta text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
      }`}
    >
      {label}
    </button>
  );
}
