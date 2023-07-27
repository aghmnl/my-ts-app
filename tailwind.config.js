/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#root", // super important to let tailwind work in MaterialUi
  theme: {
    extend: {},
  },
  plugins: [],
};
