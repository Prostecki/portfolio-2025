import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ultra-smooth-spin":
          "spinUltraSmooth 5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite",
      },
      keyframes: {
        spinUltraSmooth: {
          "0%": { borderColor: "transparent transparent #1D4ED8 transparent" },
          "10%": { borderColor: "transparent #1D4ED8 transparent transparent" },
          "20%": { borderColor: "#1D4ED8 transparent transparent transparent" },
          "30%": { borderColor: "transparent transparent transparent #1D4ED8" },
          "40%": { borderColor: "transparent transparent #1D4ED8 transparent" },
          "50%": { borderColor: "transparent #1D4ED8 transparent transparent" },
          "60%": { borderColor: "#1D4ED8 transparent transparent transparent" },
          "70%": { borderColor: "transparent transparent transparent #1D4ED8" },
          "80%": { borderColor: "transparent transparent #1D4ED8 transparent" },
          "90%": { borderColor: "transparent #1D4ED8 transparent transparent" },
          "100%": {
            borderColor: "transparent transparent #1D4ED8 transparent",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".background-test": {
          backgroundColor: "#020203",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(229,231,235,0.2) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        },
        ".dark .background-test": {
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        },
      });
    }),
    require("tailwind-scrollbar"),
  ],
};
