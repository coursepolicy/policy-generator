import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "inter", "sans-serif"],
      },
      backgroundColor: {
        coursePolicyGreen: "#0AA680",
        coursePolicyHoverGreen: "#078A6A",
      },
      textColor: {
        coursePolicyGreen: "#0AA680",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pop: {
          "0%": {
            transform: "scale(1)",
            "box-shadow": "var(--box-shadow)",
          },
          "100%": {
            transform: "scale(var(--scale))",
            "box-shadow": "var(--box-shadow-picked-up)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
