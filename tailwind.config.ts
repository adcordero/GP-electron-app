import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing_bg': "url('/images/landing.png')",
      }
    },
    fontFamily: {
      'branding': ['"Albert Sans"'],
    }
  },
  variants: {},
  plugins: [],
} satisfies Config;
