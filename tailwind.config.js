/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a0a1a",
          light: "#2d152d",
          dark: "#0f050f",
        },
        // Couleurs officielles du logo Grow With Sefo
        brand: {
          pink: {
            DEFAULT: "#FF1493",
            light: "#FF69B4",
            dark: "#C71585",
          },
          green: {
            DEFAULT: "#00FF00",
            light: "#39FF14",
            dark: "#00CC00",
          },
        },
        // Couleurs legacy (pour compatibilité)
        accent: {
          DEFAULT: "#FF1493",
          light: "#FF69B4",
        },
        gold: {
          DEFAULT: "#00FF00",
          light: "#39FF14",
        },
        // Couleurs inspirées des posters d'événements
        magenta: {
          DEFAULT: "#FF1493",
          light: "#FF69B4",
          dark: "#C71585",
        },
        violet: {
          DEFAULT: "#9c27b0",
          light: "#e1bee7",
          dark: "#7b1fa2",
        },
        coral: {
          DEFAULT: "#ff5722",
          light: "#ff8a65",
          dark: "#e64a19",
        },
        electric: {
          DEFAULT: "#00FF00",
          light: "#39FF14",
          dark: "#00CC00",
        },
        sunshine: {
          DEFAULT: "#ffc107",
          light: "#ffd54f",
          dark: "#ffa000",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
