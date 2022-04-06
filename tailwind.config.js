module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      keyframes: {
        airplaneMove: {
          '25%' : {opacity: '1'},
          '85%' : {opaicty: '1'},
          '100%' : {opacity: '0', transform: 'translate(-100%, 0)'}
        },
        modalIn : {
          '100%' : {opacity: '1', transform: 'translate(0, 0)'} 
        },
        modalOut : {
          '100%' : {opacity: '0', transform: 'translate(100%, 0)'}
        }
      },
      animation: {
        airplaneMove: '15s airplaneMove forwards infinite ease-in-out',
        modalIn: "modalIn 0.75s forwards ease-in-out",
        modalOut: "modalOut 0.25s forwards ease-in",
      },
      fontFamily : {
        poppins: ['Poppins', 'sans-serif']
      },
      colors : {
        mainColor: "#053A43"
      }
    },
  },
  plugins: [],
}
