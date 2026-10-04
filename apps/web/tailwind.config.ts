import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090c",
        foreground: "#f8fafc",
        card: {
          DEFAULT: "rgba(17, 20, 26, 0.7)",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(25, 29, 38, 0.8)",
        },
        brand: {
          50: "#fffbeb",
          100: "#fef3c7",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          gold: "#fbbf24",
          amber: "#f59e0b",
          orange: "#ea580c",
          flame: "#f97316",
          glow: "rgba(245, 158, 11, 0.35)",
        },
        surface: {
          50: "#0e1117",
          100: "#131720",
          200: "#1a202c",
          300: "#242c3d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(245, 158, 11, 0.3)",
        "glow-gold": "0 0 35px -5px rgba(251, 191, 36, 0.35)",
        "glow-orange": "0 0 35px -5px rgba(234, 88, 12, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
