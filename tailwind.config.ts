import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0D0F14",
        fg: "#EEF3F8",
        magenta: "#FF3FD1",
        cyan: "#3FE6FF",
        accent: "#3FE6FF",
        accent2: "#FF3FD1",
        subtle: "#121620",
        ring: "#7DEBFF",
        star: "#FFF0B3",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui"],
        body: ["var(--font-body)", "system-ui"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orbit": "orbit 8s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 1.5s ease-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "liquid": "liquid 12s ease-in-out infinite",
        "swirl": "swirl 10s linear infinite",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        liquid: {
          "0%, 100%": { transform: "translateX(0) translateY(0) scale(1)" },
          "33%": { transform: "translateX(30px) translateY(-30px) scale(1.1)" },
          "66%": { transform: "translateX(-20px) translateY(20px) scale(0.9)" },
        },
        swirl: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
