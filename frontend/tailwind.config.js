/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/*.{js, jsx, ts, tsx}', './src/component/**/*.tsx'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}