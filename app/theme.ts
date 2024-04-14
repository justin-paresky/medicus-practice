/* eslint-disable no-unused-vars */
'use client';

import { Cormorant_Garamond } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import * as COLORS from './constants/colors';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
  }
}

const cormorantGaramond = Cormorant_Garamond({
  weight: ['600'],
  display: 'swap',
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.PRIMARY_MAIN,
      contrastText: COLORS.WHITE,
      dark: COLORS.PRIMARY_DARK,
      light: COLORS.PRIMARY_LIGHT,
    },
    secondary: {
      main: COLORS.SECONDARY_MAIN,
      dark: COLORS.SECONDARY_DARK,
      light: COLORS.SECONDARY_LIGHT,
    },
    tertiary: {
      main: COLORS.TERTIARY_MAIN,
      dark: COLORS.TERTIARY_DARK,
      light: COLORS.TERTIARY_LIGHT,
    },
    error: {
      main: COLORS.ERROR_MAIN,
    },
    warning: {
      main: COLORS.WARNING_MAIN,
    },
    text: {
      primary: COLORS.TEXT_PRIMARY,
      secondary: COLORS.TEXT_SECONDARY,
      disabled: COLORS.TEXT_DISABLED,
    },
  },
  typography: {
    h1: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: '120%',
    },
    h2: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: 600,
      fontSize: '2.625rem',
      lineHeight: '120%',
    },
    h3: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: '120%',
    },
    subtitle1: {
      fontFamily: "'Neue Einstellung', sans-serif",
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '150%',
    },
    body1: {
      fontFamily: "'Neue Einstellung', sans-serif",
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: '150%',
    },
    caption: {
      fontFamily: "'Neue Einstellung', sans-serif",
      fontSize: '0.875rem',
      fontWeight: 300,
      lineHeight: '150%',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '600',
          padding: '14px 50px',
          borderRadius: 30,
          textTransform: 'capitalize',
        },
        containedSecondary: {
          color: COLORS.WHITE,

          '&:hover': {
            backgroundColor: COLORS.SECONDARY_DARK,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.WHITE,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          color: COLORS.PRIMARY_DARK,
          fontSize: '1.75rem',
          fontFamily: cormorantGaramond.style.fontFamily,
          fontWeight: 600,
        },
        avatar: {
          backgroundColor: COLORS.PRIMARY_DARK,
        },
      },
    },
  },
});

export default theme;
