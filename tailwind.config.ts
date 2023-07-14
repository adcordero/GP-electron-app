import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#F2CB05",
        white: {
          100: "#FFFFFF",
          200: "#F9F9F9",
          300: "#CECECE",
          400: "#B5B5B5",
          500: "#969696",
        },
        black: {
          100: "#3F3F3F",
          200: "#2D2D2D",
          300: "#161616",
          400: "#0F0F0F",
          500: "#070707",
        },
        yellow: {
          100: "#FFE669",
          200: "#FFE24F",
          300: "#FFDD32",
          400: "#FDD716",
          500: "#F2CB05",
        },
      },
      fontFamily: {
        "albert-sans": '"Albert Sans"',
        "poppins": '"Poppins"',
      },
      height: {
        'overall': '479px',
      }
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
