/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '380px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      lineHeight: {
      },
      fontSize: {
      }
    },
    fontFamily: {
      'sans': ['WorkSans'],
      'mono': ['Digital-7-Mono'],
      'grotesk': ['SpaceGrotesk'],
      'inter': ['Inter'],
      'mohave': ['Mohave'],
    }
  },
  plugins: [],
}
