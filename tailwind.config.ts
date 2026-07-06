import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF5',
        linen: '#F2EDE4',
        /* Clinical teal */
        teal: {
          DEFAULT: '#1B5E6E',
          mid:     '#236E80',
          light:   '#4A9EAD',
          pale:    '#E4F3F6',
          dark:    '#113C49',
        },
        /* Playful coral */
        coral: {
          DEFAULT: '#E0623A',
          light:   '#ED8A68',
          pale:    '#FDEEE8',
          dark:    '#B84B28',
        },
        /* Growth sage */
        sage: {
          DEFAULT: '#4A9466',
          light:   '#79BA93',
          pale:    '#E8F5ED',
          dark:    '#2E6444',
        },
        /* Accent gold */
        gold: {
          DEFAULT: '#EFA530',
          pale:    '#FDF5E4',
        },
        ink:       '#1A1C2E',
        'ink-2':   '#6A6780',
        border:    '#E0D9CF',
        night:     '#111828',
        'night-2': '#1D2535',
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        arabic:  ['var(--font-cairo)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '72rem' },
    },
  },
  plugins: [],
};

export default config;
