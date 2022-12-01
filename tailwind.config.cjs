/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'ui-primary': '#3749D3',
        'ui-primary-highlight': '#1D2D4D',
        'ui-primary-light-2': '#DAE1FF',
        'ui-primary-light-3': '#EAECFB',
        'ui-primary-light-4': '#F6F8FF',
        'ui-primary-nav': '#181F37',
        'ui-black': '#222222',
        'ui-black-shade-4': '#706E6B',
        'ui-green-success': '#0E9F6E',
        'ui-green-shade-1': '#D5F3E7',
        'ui-white-shade-1': '#C0C6DB',
        'ui-white-shade-3': '#ECEBEA',
        'ui-border-shade-1': '#8992B8',
        'ui-border-shade-3': '#DFE3F1',
        'ui-text-disabled': '#706E6B',
        'ui-red-error': '#D53F3F',
        'ui-orange-warning': '#FFD79D',
        'ui-indigo-50': '#F6F8FF',
      },
      keyframes: {
        wiggle: {
          '15%, 85%': { transform: 'rotate(0deg)' },
          '35%, 45%, 55%, 65%': { transform: 'rotate(10deg)' },
          '30%, 40%, 50%, 60%, 75%': { transform: 'rotate(-10deg)' },
        },
      },
      animation: {
        spin: 'spin 600ms linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
