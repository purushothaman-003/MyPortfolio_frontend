/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#13bbff',
        'text-color':'#fff',
        'bg-color': '#1b1f24',
        'secont-bg-color': '#22282f',
        'main-color': '#13bbff',
        'other-color': '#c3cad5',
      },
    },
  },
  plugins: [],
}

