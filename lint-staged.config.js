export default {
  // For JS/TS files in the Next.js app, run ESLint then Prettier
  'apps/craigs-creations/**/*.{js,jsx,ts,tsx,mjs,cjs}': [
    'pnpm --filter craigs-creations lint --fix',
    'prettier --write',
  ],

  // For JS/TS files in the Astro app, run ESLint then Prettier
  // (Note: only if the Astro app has a lint script — see notes below)
  'apps/denton-bights-collective/**/*.{js,jsx,ts,tsx,mjs,cjs,astro}': ['prettier --write'],

  // For everything else (CSS, JSON, MD, etc.) just format with Prettier
  '*.{css,json,md,yaml,yml}': ['prettier --write'],
};
