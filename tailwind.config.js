module.exports = {
  theme: {
    fontFamily: {
        'body': 'Lato',
    },
    extend: {
        colors: {
            "devblue": "#184cd5",
            "main_blue": "#0a0e13",
            "main_gold": "#ab9a75",
            "main_green": "#00ea86",
            "main_green2": "#00c873"
        },
        fontSize: {
            '8xl': '5rem',
            '10xl': '8rem',
            '12xl': '10rem',
            '20xl': '20rem'
        },
        padding: {
            '72': '24rem',
            '105': '34rem'
        },
        boxShadow: {
            '3xl': '0px 22px 79px -47px rgba(255,255,255,0.79);'
        }
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xl2': '1630px'
    }
  },
  variants: {
        borderRadius: ['responsive', 'hover', 'focus'],
        padding: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}