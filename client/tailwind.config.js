/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#050816',
        },
        brand: {
          50: '#f2fffc',
          100: '#d9fff7',
          200: '#b2fff0',
          300: '#79f7e3',
          400: '#3ae8cf',
          500: '#10cdb5',
          600: '#0ba392',
          700: '#0c8275',
          800: '#11685f',
          900: '#13564f',
        },
        accent: {
          50: '#fffdf4',
          100: '#fff6d1',
          200: '#ffeaa3',
          300: '#ffdd72',
          400: '#ffd246',
          500: '#f5b91f',
          600: '#d38d14',
        },
        ink: {
          900: '#141221',
          800: '#232036',
          700: '#3a3653',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16, 205, 181, 0.1), 0 16px 42px rgba(16, 205, 181, 0.18)',
        card: '0 22px 60px rgba(20, 18, 33, 0.08)',
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
