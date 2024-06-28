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
      primary: {
        DEFAULT: '#2e6759',
        light: '#91cbaf',
        dark: '#215045',
      },
      secondary: {
        DEFAULT: '#f4d890',
        light: '#f18e79',
        dark: '#e4c677',
      },
      accent: {
        DEFAULT: '#E9F5EF',
        light: '#E9F5EF',
        dark: '#cde6da',
      },
      blue: {
        DEFAULT: '#e7f4fa',
      },
      green: {
        DEFAULT: '#2e6759',
        light: '#91cbaf',
        dark: '#215045',
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
        DEFAULT: '#f9f8f6',
        dark: '#768188',
        light: '#dee1e3',
      },
      red: {
        DEFAULT: '#e72020',
        light: '#ffe3e8',
      },
      white: {
        DEFAULT: '#ffffff',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-neue-einstellung)'],
        serif: ['var(--font-cormorant-garabond)'],
        hertine: ['var(--font-hertine)'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-hamburgers'),
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
          primary: '#2e6759',
          secondary: '#f4d890',
          accent: '#e9f5ef',
          error: '#e72020',
          '.btn:not(.btn-circle)': {
            padding: '16px 32px',
            'border-radius': '5px',
            'text-transform': 'capitalize',
            'font-family': 'var(--font-neue-einstellung)',
            'font-weight': 600,
            'font-size': '1rem',
            '&:hover': {
              'background-color': '#215045',
              'border-color': '#215045',
            },
          },
          '.btn-primary': {
            color: '#ffffff',
          },
          '.btn-secondary': {
            'background-color': '#f4d890',
            color: '#2e6759',
            '&:hover': {
              'background-color': '#e4c677 !important',
              'border-color': '#e4c677 !important',
            },
          },
          '.btn-accent': {
            'background-color': '#E9F5EF',
            color: '#2e6759',
            '&:hover': {
              'background-color': '#cde6da !important',
              'border-color': '#cde6da !important',
            },
          },
          '.link-primary': {
            color: '#2e6759',
            background: 'none',
            border: 'none',
            'box-shadow': 'none',
            'text-transform': 'capitalize',
            'text-decoration': 'underline',
            'font-family': 'var(--font-neue-einstellung)',
            '&:hover': {
              background: 'none',
            },
          },
          '.link-gray': {
            color: '#768188',
            'font-family': 'var(--font-neue-einstellung)',
            'text-decoration': 'none',
            '&:hover': {
              'text-decoration': 'underline',
            },
          },
          '.link-white': {
            color: '#ffffff',
            'font-family': 'var(--font-neue-einstellung)',
            'text-decoration': 'none',
            '&:hover': {
              'text-decoration': 'underline',
            },
          },
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
};
