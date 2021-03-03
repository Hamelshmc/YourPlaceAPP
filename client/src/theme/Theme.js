import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    secondary: {
      50: '#fcf9f9',
      100: '#fcf0f5',
      200: '#fad2ea',
      300: '#f8abd9',
      400: '#f972bc',
      500: '#fa469a',
      600: '#f22a73',
      700: '#d1205a',
      default: '#a11b44',
      900: '#7d1735',
    },
    primary: {
      50: '#f3f9fb',
      100: '#e1f7f9',
      200: '#bbecf3',
      300: '#8addee',
      400: '#45c0e6',
      500: '#1d9cdb',
      600: '#1679c5',
      default: '#0f58aa',
      800: '#184975',
      900: '#153b5b',
    },
    like: '#ac1945',
    success: '#26aa5e',
    error: '#e74c3c',
    alert: '#b2910a',
  },
  fontSizes: {
    default: '.938rem',
    small: '0.875rem',
    smaller: '.813rem',
    medium: '1.6rem',
    large: '2.4rem',
  },
  fontColor: {
    default: '#333333',
    emphasis: '#8899a6',
    alternative: '#718096',
  },
  margins: ['.5rem', '1rem', '1.5rem'],
  padding: ['.5rem', '1rem', '1.5rem'],
  boxShadow: {
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  card: {
    lessorColor: '#f7fafc',
    borderColor: '#e2e8f0',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
