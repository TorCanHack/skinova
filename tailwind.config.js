/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#EEE7DD',
        dustyGreen : '#6F855A'
      },
      inset: {
        97: '460px',
        97.5: '540px'
      },
      width: {
        360: '360px',
        600: '600px',
        800:  '800px',
        900: '900px',
        1168: '1168',
        1440: '1440px'
      }
    },
  },
  plugins: [],
}

