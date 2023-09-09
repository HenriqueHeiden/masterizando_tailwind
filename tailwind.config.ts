import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
        'primary-blu': '#0693e3',
        'secondary-blu': '#8ed1fc',
        'primary-gray': '#33303E',
        'secondary-gray': '#4E4B595',
        'txt-gray': '#7A7789',
        'opacity-gray': 'rgba(100, 80, 57, 0.1)',
        violet: {
          25: '#fcfaff',
        },
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        // slideUpAndFade: {
        //   from: { opacity: 1 },
        //   to: { opacity: 0 },
        // },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4 cubic-bezier(0.16, 1, 0.3, 1)',
        // slideUpAndFade: 'slideUpAndFade 1s linear',
      },
    },
  },
  plugins: [],
}
export default config
