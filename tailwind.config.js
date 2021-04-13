module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#020202",
        "accent-2": "#F7F8FA",
        "accent-3": "#666666",
      },
    },
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
