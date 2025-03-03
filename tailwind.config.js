/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'spotify-green': '#1DB954',
          'spotify-black': '#121212',
          'spotify-gray': '#181818',
          'spotify-light-gray': '#282828',
          'spotify-dark-gray': '#181818',
          'spotify-text': '#b3b3b3',
        },
        backgroundColor: {
          'main-bg': '#121212',
          'card-bg': '#181818',
          'card-hover': '#282828',
        },
        fontSize: {
          'xxs': '0.625rem',
        },
      },
    },
    plugins: [],
  };