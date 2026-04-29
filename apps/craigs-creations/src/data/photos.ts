export type PhotoCategory = 'portraits' | 'events' | 'candid' | `landscapes` | 'studio' | 'boudoir';

export type Photo = {
  path: string;
  alt: string;
  category: PhotoCategory;
  aspectRatio: [number, number];
  meta: null | object;
};

export const photos: Photo[] = [
  // Portraits
  {
    path: '/images/portraits/2024_08_15-Ashlyn-Pre_School_Desk.jpg',
    alt: 'Ashlyn at her preschool desk',
    category: 'portraits',
    aspectRatio: [8256, 5504],
    meta: null,
  },
  {
    path: '/images/portraits/2024_08_15-Ashlyn-Pre_School.jpg',
    alt: 'Portrait of Ashlyn before her first day of preschool',
    category: 'portraits',
    aspectRatio: [5504, 8256],
    meta: null,
  },
  {
    path: '/images/portraits/2024_08_15-Walker_and_Lexi-Pre_School.jpg',
    alt: 'Walker and Lexi together before preschool',
    category: 'portraits',
    aspectRatio: [8256, 5504],
    meta: null,
  },

  // Landscapes
  {
    path: '/images/landscapes/2025_01_09-Court_House_Snow-Denton_TX.jpg',
    alt: 'Denton courthouse covered in snow',
    category: 'landscapes',
    aspectRatio: [8256, 5504],
    meta: null,
  },
  {
    path: '/images/landscapes/2025_01_09-Court_House-Denton_TX.jpg',
    alt: 'Denton courthouse on the square',
    category: 'landscapes',
    aspectRatio: [5504, 8256],
    meta: null,
  },
  {
    path: '/images/landscapes/2025_01_09-Wells_Fargo_Tower-Denton_TX.jpg',
    alt: 'Wells Fargo Tower in downtown Denton',
    category: 'landscapes',
    aspectRatio: [5504, 8256],
    meta: null,
  },
  {
    path: '/images/landscapes/2025_01_10-Man_Crosswalk_Snow-Denton_TX.jpg',
    alt: 'A man at a snowy Denton crosswalk',
    category: 'landscapes',
    aspectRatio: [5504, 8256],
    meta: null,
  },
  {
    path: '/images/landscapes/2025_01_10-Zoom_Zooms_Snow_BW-Denton_TX.jpg',
    alt: 'Zoom Zooms in the snow, black and white',
    category: 'landscapes',
    aspectRatio: [8256, 5504],
    meta: null,
  },
  {
    path: '/images/landscapes/2025_01_10-Andys_Snow-Denton_TX.jpg',
    alt: "Andy's storefront in the snow",
    category: 'landscapes',
    aspectRatio: [8256, 5504],
    meta: null,
  },

  // Studio
  {
    path: '/images/studio/2026_04_15-Bee_in_Frame-Ft_Worth_TX.jpg',
    alt: 'Studio portrait — Bee in frame',
    category: 'studio',
    aspectRatio: [5504, 8256],
    meta: null,
  },
  {
    path: '/images/studio/2026_04_15-Bee_out_of_Frame-Ft_Worth_TX.jpg',
    alt: 'Studio portrait — Bee out of frame',
    category: 'studio',
    aspectRatio: [5504, 8256],
    meta: null,
  },

  // Boudoir
  {
    path: '/images/boudoir/img_01.jpg',
    alt: 'Boudoir photography session 01',
    category: 'boudoir',
    aspectRatio: [8256, 5504],
    meta: null,
  },
  {
    path: '/images/boudoir/img_02.jpg',
    alt: 'Boudoir photography session 02',
    category: 'boudoir',
    aspectRatio: [8256, 5504],
    meta: null,
  },
  {
    path: '/images/boudoir/img_03.jpg',
    alt: 'Boudoir photography session 03',
    category: 'boudoir',
    aspectRatio: [5504, 8256],
    meta: null,
  },
  {
    path: '/images/boudoir/img_04.jpg',
    alt: 'Boudoir photography session 04',
    category: 'boudoir',
    aspectRatio: [5504, 8256],
    meta: null,
  },
  {
    path: '/images/boudoir/img_05.jpg',
    alt: 'Boudoir photography session 05',
    category: 'boudoir',
    aspectRatio: [8256, 5504],
    meta: null,
  },
  {
    path: '/images/boudoir/img_06.jpg',
    alt: 'Boudoir photography session 06',
    category: 'boudoir',
    aspectRatio: [8256, 5504],
    meta: null,
  },
  {
    path: '/images/boudoir/img_07.jpg',
    alt: 'Boudoir photography session 07',
    category: 'boudoir',
    aspectRatio: [5504, 8256],
    meta: null,
  },
];

export const categories: Array<{ slug: PhotoCategory; label: string }> = [
  { slug: 'portraits', label: 'Portraits' },
  { slug: 'events', label: 'Events' },
  { slug: 'candid', label: 'Candid' },
  { slug: 'landscapes', label: 'Landscapes' },
  { slug: 'studio', label: 'Studio' },
  { slug: 'boudoir', label: 'Boudoir' },
];
