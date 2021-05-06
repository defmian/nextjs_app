module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "80vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        104: "29rem",
        200: "34rem"
      },
      colors: {
        "accent-1": "#020202",
        "accent-2": "#F7F8FA",
        "accent-3": "#666666",
        "accent-4": "#D3D3D3",
        "accent-5": "#B3B3B3",
      },
      typography: {
        lg: {
          css: {
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
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
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
