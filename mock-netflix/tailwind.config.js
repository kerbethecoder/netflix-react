// import netflixBg from './src/assets/index';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0a100d',
        white: '#f9f7f3',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'], //900 & 300
      },
      backgroundImage: {
        collage: 'url(./src/assets/cover.svg)',
      },
    },
  },
  plugins: [],
};
