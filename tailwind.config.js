/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        'deep-black': '#0B0B0B',
        'gold': {
          50: '#F5E6A8',
          100: '#F1E094',
          200: '#E8D066',
          300: '#DFC038',
          400: '#C9A24D',
          500: '#B08D3C',
          600: '#967A33',
          700: '#7C672A',
          800: '#625421',
          900: '#484118'
        },
        'off-white': '#E5E5E5'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A24D, #F5E6A8, #B08D3C)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}