import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0170B9",
          blueLight: "#3B9BDB",
          navy: "#1a3a5c",
          navyDark: "#0d2340",
          navyLight: "#2a5080",
          gold: "#F5C518",
          goldSoft: "#FFE066",
          text: "#3a3a3a",
          textLight: "#4B4F58",
          bg: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-10px) translateX(8px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(var(--orbit-r, 80px)) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(var(--orbit-r, 80px)) rotate(-360deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        breath: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        flowDown: {
          "0%": { transform: "translateY(-110%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(110%)", opacity: "0" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0px) scaleY(1)" },
          "50%": { transform: "translateY(-6px) scaleY(1.15)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        spinSlow: "spinSlow 30s linear infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        drawLine: "drawLine 2.4s ease-in-out forwards",
        orbit: "orbit 14s linear infinite",
        pulseRing: "pulseRing 2.6s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        breath: "breath 5s ease-in-out infinite",
        gradientShift: "gradientShift 12s ease-in-out infinite",
        flowDown: "flowDown 3.2s ease-in-out infinite",
        wave: "wave 3s ease-in-out infinite",
        twinkle: "twinkle 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
