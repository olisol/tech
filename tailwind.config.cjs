/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'white': '#fff',
      'main': '`#D32B79',
      'dark': '#821A4E',
      'darker': '#4F1C35',
      'secret-owner': '#D7B8C0',
      'transparent': 'rgba(79, 28, 53, 0.5)',
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xxxl': '1700px',
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
