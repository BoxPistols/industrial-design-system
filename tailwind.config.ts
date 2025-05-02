import { palette, spacing } from './src/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        primary: palette.primary.main,
        secondary: palette.secondary.main,
      },
      spacing: Object.fromEntries(
        Array(20)
          .fill(null)
          .map((_, i) => [`${i}`, spacing(i)])
      ),
    },
  },
  plugins: [],
};
