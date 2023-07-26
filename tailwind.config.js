/** @type {import('tailwindcss').Config} */
import tailwindcssAnimateCSS from "tailwindcss-animatecss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
      10: "10px",
      20: "20px",
    },
    animatedSettings: {
      classes: ["bounceIn"],
    },
  },
  plugins: [tailwindcssAnimateCSS],
};
