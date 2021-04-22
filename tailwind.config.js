module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#020202",
        "accent-2": "#F7F8FA",
        "accent-3": "#666666",
        "accent-4": "#D3D3D3",
        "accent-5": "#B3B3B3",
      },
    },
    fontFamily: {
      header: "Space Mono",
      spacemono: ["Space Mono, monospace"],
      robotomono: ["Roboto Mono, monospace"],
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
