/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require("tailwindcss-animate")
  ],
  // ... rest of your config
}

