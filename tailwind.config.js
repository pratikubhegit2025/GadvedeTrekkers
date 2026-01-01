/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d5f3f",
        primaryDark: "#244d33",
        softBg: "#fdfaf7",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
