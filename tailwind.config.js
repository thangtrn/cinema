/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-lighten": "#2a2a2a",
        "dark": "#222222",
        "dark-darken": "#1a1a1a",
        "orange": "#ff4112",
        "red": "#FF0000",
      },
    },
  },
  plugins: [],
}
