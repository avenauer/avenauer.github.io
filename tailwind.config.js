module.exports = {
  content: ["pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}", "src/containers/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      tag: "0.875rem",
      xs: "1rem",
      sm: "1.25rem",
      md: "1.625rem",
      lg: "1.75rem",
      xl: "2.125rem",
      "2xl": "2.5rem",
      "3xl": "3rem",
    },
    transitionTimingFunction: {
      smooth: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
    },
  },
  plugins: [],
};
