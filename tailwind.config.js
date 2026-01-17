/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'ag-green': {
          950: '#051b11', // Deepest Black/Green
          900: '#0a2e20', // Deep Background
          800: '#0F5132', // Primary Logo Green
          700: '#166e45',
          100: '#d1fae5',
        },
        'ag-lime': {
          DEFAULT: '#78BC42', // Primary Accent from Logo
          hover: '#65a336',
          light: '#bef264',
        }
      }
    },
  },
  plugins: [],
}
