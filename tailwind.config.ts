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
      },
      colors: {
        'primary-blu': '#0693e3',
        'secondary-blu': '#8ed1fc',
        'primary-gray': '#33303E',
        'secondary-gray': '#4E4B595',
        'txt-gray': '#7A7789',
        'opacity-gray': 'rgba(100, 80, 57, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
