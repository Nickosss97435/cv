/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Active le mode sombre basé sur des classes (par exemple, `dark:bg-gray-800`)
  theme: {
    extend: {
      colors: {
        primary: "#0E7490",
        secondary: "#6C757D",
        dark: "#1F2937",
        light: "#F8F9FA",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideIn: "slideIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};