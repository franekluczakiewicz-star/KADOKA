/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f3f8f4',
          100: '#e4f0e7',
          200: '#c5e0cc',
          300: '#96c7a3',
          400: '#5fa873',
          500: '#3d8a54',
          600: '#2d6e42',
          700: '#255837',
          800: '#1f4630',
          900: '#1a3a28',
        },
        mist: '#f4f7f5',
        ink: '#1a221c',
        stone: '#6b6560',
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 18s ease-out forwards',
      },
    },
  },
  plugins: [],
}
