import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a01135",
          secondary: "#8692e0",
          accent: "#d60e9a",
          neutral: "#1a1b2d",
          "base-100": "#323d49",
          info: "#8fc4dc",
          success: "#29d6c5",
          warning: "#f0b775",
          error: "#fa618c",
        },
      },
    ],
  },
};
export default config;
