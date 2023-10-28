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
          primary: "#B0383E",
          secondary: "#283149",
          accent: "#6C7B8B",
          neutral: "#534847",
          "base-100": "#2B282A",
          info: "#6E748B",
          success: "#25a161",
          warning: "#e3a02b",
          error: "#de2831",
        },
      },
    ],
  },
};
export default config;
