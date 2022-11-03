/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        mdx: "5px 10px 15px #F0F0F0"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
