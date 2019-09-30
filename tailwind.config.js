module.exports = {
  theme: {
    fontFamily: {
        'body': '"Source Sans Pro"',
    },
    extend: {
        colors: {
            "main_blue": "#0a0e13",
            "main_green": "#00ea86",
            "main_green2": "#00c873",
            "main_green3": "#00a65f"
        },
        fontSize: {
            '8xl': '5rem'
        },
           margin: {
            '72': '18rem',
            '86': '20rem',
            '92': '25rem'
        },
        padding: {
            '72': '18rem',
            '86': '20rem',
            '92': '25rem'
        }
    },
    screens: {
            'xxs': '320px',
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