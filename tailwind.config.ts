import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "forest-green": "#2F5233",
        "olive-green": "#7B8550",
        "gray-blue": "#A4B9C9",
        "warm-beige": "#EDE6DB",
        "camoflage": "#9C8E71",
        "tan": "#CAB894",
        "bone-white": "#EDE6DB",
      },
    },
  },
  plugins: [],
};

export default config;
