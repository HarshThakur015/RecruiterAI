import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Accent Colors
        accent: {
          blue: "#A5D8FF",
          lavender: "#D0BCFF",
          purple: "#B197FC",
        },
        // Light Theme
        light: {
          primary: "#3B82F6",
          "primary-bg": "#EFF6FF",
          "secondary-bg": "#FFFFFF",
          secondary: "#F3F4F6",
        },
        // Dark Theme
        dark: {
          "primary-bg": "#000000",
          "secondary-bg": "#404040",
          "secondary-text": "#737373",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "scroll": "scroll 30s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "card": "0 4px 20px 0 rgba(0, 0, 0, 0.05)",
        "card-hover": "0 8px 30px 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 50%, #F3F4F6 100%)",
        "hero-gradient-dark": "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #262626 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
