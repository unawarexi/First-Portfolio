/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      minWidth: {
      210: "210px",
      350: "350px",
      620: "620px",
     },

     screens:  {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
     },


      
      height:  {
      80: "80px",
      150: "150px",
      225: "225px",
      300: "300px",
      340: "340px",
      370: "370px",
      420: "420px",
      510: "510px",
      600: "600px",
      650: "650px",
      685: "685px",
      800: "800px",
      "90vh": "90vh",
     },
      
       width:  {
      150: "150px",
      190: "190px",
      225: "225px",
      275: "275px",
      300: "300px",
      340: "340px",
      350: "350px",
      375: "375px",
      460: "460px",
      656: "656px",
      880: "880px",
      508: "508px",
     },



      colors : { 
        secondary_color: " #1E2022",
        backgrund_color: "#4d4d4d",
        shadow: "#282827",
        primary_color: "#ef9273",
        compliment: "#52616b",
        softner: "#f0f5f9",
        colorprimary: "#6c63ff",
        colorsuccess: "#00bf8e",
        colorwarning: "#f7c94b",
        colordanger: "#f75842",
        color_danger_variant: "rgba(247,88, 66, 0.4)",
        colorwhite: "#fff",
        colorblack: "#000",
        colorbg: "#1f2641",
        colorbg1: "#2e3267",
        colorbg2:"#424890",
        transition: "all 400ms ease",
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
        lightOverlay: "rgba(256,256,256,0.2)",
        
        
      }

    },
  },
  plugins: [],
}
