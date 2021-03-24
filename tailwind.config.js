module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      header: "Space Mono",
      spacemono: ["Space Mono, monospace"],
      robotomono: ["Roboto Mono, monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
