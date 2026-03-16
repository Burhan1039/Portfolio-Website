/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#050816',
        },
        brand: {
          50: '#fffdf2',
          100: '#fff9dd',
          200: '#fff0b5',
          300: '#ffe48a',
          400: '#ffd95d',
          500: '#f7c948',
          600: '#d9a81e',
          700: '#b38612',
          800: '#8f690f',
          900: '#73550f',
        },
        accent: {
          400: '#fff4bf',
          500: '#ffe79a',
          600: '#f3d56b',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 18px 50px rgba(247, 201, 72, 0.24)',
        card: '0 24px 60px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
