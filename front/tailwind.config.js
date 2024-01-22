/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        merienda: ["Merienda", "cursive"],
        permanent: ["Permanent Marker", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        yellow: "#fff9d6",
        blue: "#1f73ae",
        orange: "#fda608",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    plugins: [],
  },
};
