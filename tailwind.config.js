/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-custom": {
          "-webkit-mask-image": 'url("/hey.gif")',
          "mask-image": 'url("/hey.gif")',
          "-webkit-mask-repeat": "no-repeat",
          "mask-repeat": "no-repeat",
          "-webkit-mask-position": "center",
          "mask-position": "center",
          "-webkit-mask-size": "cover",
          "mask-size": "cover",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".perspective-none": {
          perspective: "none",
        },
      });
    },
    require("tailwindcss-transforms")({
      "3d": true, // Enable 3D transforms
    }),
  ],
};
