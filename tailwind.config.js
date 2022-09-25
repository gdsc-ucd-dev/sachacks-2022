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
        purple: "#1E1E1E",
      },
    
    },
    //  screens: {
    //   'sm': {'min': '640px', 'max': '767px'},
    //   'md': {'min': '768px', 'max': '1023px'},
    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   '2x;': {'min': '1536px'}
    // },
  },
  plugins: [],
};
