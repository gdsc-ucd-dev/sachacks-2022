/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // tailwind classes can only be used within the following path-ed files
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // sachack theme color extension
      colors: {
        light: "#EEEEEE",
        highlight: "#053A43",
      },
    
    },
  },
  plugins: [],
};
