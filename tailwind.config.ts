import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#F2CB05",
      },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
