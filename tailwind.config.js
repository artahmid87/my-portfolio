/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js, jsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "350px",
      // => @media (min-width: 350px) { ... }

      md: "660px",
      // => @media (min-width: 660px) { ... }

      lg: "900px",
      // => @media (min-width: 900px) { ... }

      xl: "110px",
      // => @media (min-width: 110px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
