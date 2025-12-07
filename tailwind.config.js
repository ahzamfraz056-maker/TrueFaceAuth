/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'govt-saffron': '#FF9933',
        'govt-white': '#FFFFFF',
        'govt-green': '#138808',
        'govt-blue': '#003366',
        'govt-bg': '#f5f5f5',
        'govt-text': '#333333',
        'govt-link': '#2874f0'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        hindi: ['Hind', 'sans-serif']
      }
    },
  },
  plugins: [],
}
