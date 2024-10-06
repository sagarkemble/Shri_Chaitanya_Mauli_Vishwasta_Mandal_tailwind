/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        color1: '#00d1ff',
        color2: '#00e1f1',
        color3: '#06edd4',
        color4: '#73f6af',
        color5: '#b8fa8a',
        color6: '#f9f871',
      },
      keyframes:{
        gradient:{
          "0%":{backgroundPosition : "0% 50%"},
          "100%":{backgroundPosition : "100% 50%"},
        },
      },
      animation:{
        gradient:" gradient 4s linear infinite alternate",
      },
      fontFamily:{
        poppins:['Poppins']
      }
      
    },
  },
  plugins: [],
}

