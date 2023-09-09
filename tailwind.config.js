import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
};

