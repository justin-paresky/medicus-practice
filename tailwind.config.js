/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: '5px',
    },
    colors: {
      green: {
        DEFAULT: '#225045',
        light: '#215045',
        dark: '#1a3e35',
      },
      orange: {
        DEFAULT: '#dba805',
        light: '#f18e79',
        dark: '#b58b07',
      },
      tan: {
        DEFAULT: '#ebddb5',
        light: '#fbf4e0',
        dark: '#d4c8a5',
      },
      salmon: {
        DEFAULT: '#f18e79',
      },
      gray: {
        DEFAULT: '#768188',
        light: '#dee1e3',
      },
      red: {
        DEFAULT: '#e72020',
        light: '#ffe3e8',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-neue-einstellung)'],
        serif: ['var(--font-cormorant-garabond)'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#225045',
          secondary: '#dba805',
          accent: '#ebddb5',
          error: '#e72020',
          '.btn': {
            padding: '14px 20px',
            'border-radius': '30px',
            'text-transform': 'capitalize',
            'font-family': 'var(--font-neue-einstellung)',
            'font-weight': 600,
            'font-size': '1rem',
          },
          '.btn-secondary': {
            'background-color': '#dba805',
          },
          '.btn-accent': {
            color: '#215045',
          },
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
};
