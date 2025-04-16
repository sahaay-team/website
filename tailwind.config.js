/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
      colors: {
        primary: "#FE4B01",
        "primary-light": "#FE9367",
        secondary: "#FDD867",
        "primary-hover": "#e54601",
      },
    },
  },
  plugins: [],
};
