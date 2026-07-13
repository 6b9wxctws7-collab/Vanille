import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warmes Cremeweiss als Hintergrund
        cream: {
          DEFAULT: "#faf6ef",
          50: "#fdfbf7",
          100: "#faf6ef",
          200: "#f2ead9",
        },
        // Dunkles Braun / Anthrazit fuer Texte
        cocoa: {
          DEFAULT: "#2b2320",
          light: "#4a3f39",
          muted: "#6b5f57",
        },
        // Dezente Gold- / Sandtoene als Akzent
        gold: {
          DEFAULT: "#b08d57",
          light: "#c9a978",
          dark: "#8f6f42",
        },
        sand: {
          DEFAULT: "#e6dcc8",
          light: "#efe7d7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(43, 35, 32, 0.12)",
        "card-hover": "0 18px 40px -14px rgba(43, 35, 32, 0.20)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
