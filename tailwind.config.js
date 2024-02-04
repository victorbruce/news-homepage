/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softOrange: "var(--soft-orange)",
        softRed: "var(--soft-red)",
        offWhite: "var(--off-white)",
        grayishBlue: "var(--grayish-blue)",
        darkGrayishBlue: "var(--dark-grayish-blue)",
        veryDarkBlue: "var(--very-dark-blue)"
      },
      textColor: {
        softOrange: "var(--soft-orange)",
        softRed: "var(--soft-red)",
        offWhite: "var(--off-white)",
        grayishBlue: "var(--grayish-blue)",
        darkGrayishBlue: "var(--dark-grayish-blue)",
        veryDarkBlue: "var(--very-dark-blue)"
      },
    },
  },
  plugins: [],
};
