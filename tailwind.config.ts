import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The accent is driven by a CSS variable set from content.ts (theme.accentColor),
        // so changing one hex there recolors the whole site.
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent) / 0.12)",
        },
        ink: {
          // Near-black background + layered surfaces for the dark theme.
          950: "#08080A",
          900: "#0A0A0B",
          800: "#111114",
          700: "#1A1A1F",
          600: "#26262D",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "accent-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accent-pulse": "accent-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
