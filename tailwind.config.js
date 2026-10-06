/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#120E1F', // night plum: page background
        plum: '#1A1430', // raised surfaces
        velvet: '#241C3D', // cards
        pearl: '#F3EFFA', // primary text
        mist: '#A79FC0', // secondary text
        gold: '#E4B55B', // champagne accent
        goldsoft: '#F3D793',
        orchid: '#9D86FF', // secondary accent
        sage: '#7FD1B0', // status / success
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
