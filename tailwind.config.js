module.exports = {
  theme: {
    fontFamily: {
        'body': '"Source Sans Pro"',
    },
    extend: {
        colors: {
            "main_blue": "#0a0e13",
            "main_green": "#00ea86"
        },
        fontSize: {
            '4xl_': '2rem'
        },
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