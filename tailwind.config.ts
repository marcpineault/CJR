import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          green: "#006838",
          "green-light": "#45b86c",
          dark: "#141412",
          cream: "#F6F5F1",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['"Sofia Sans"', 'sans-serif'],
        heading: ['"Sofia Sans Semi Condensed"', 'sans-serif'],
      },
      letterSpacing: {
        'heading': '-0.02em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
