module.exports = {
  content: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    "src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    transitionTimingFunction: {
      smooth: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
    },
  },
  plugins: [],
};
