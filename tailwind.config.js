/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { // this is where you add things to the stuff that already exist
      colors: {
        'primary-color' : '#111B47',
      },
      backgroundImage: {
        'home-bg-img-big' : "url('./assets/designer_1.png')",
        'home-bg-img-small' : "url('./assets/figure_computer.png')"
      },
      backgroundSize: {
        '60%' : '50%',
      }
    },
  },
  plugins: [],
}

