/**
 * Color tokens for the Industrial Design System
 */

export const colors = {
  // Primary colors
  primary: {
    50: '#e6f7ff',
    100: '#bae7ff',
    200: '#91d5ff',
    300: '#69c0ff',
    400: '#40a9ff',
    500: '#1890ff', // Main primary color
    600: '#096dd9',
    700: '#0050b3',
    800: '#003a8c',
    900: '#002766',
  },

  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373', // Main neutral color
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Semantic colors
  success: {
    50: '#ecfdf5',
    500: '#10b981', // Main success color
    900: '#064e3b',
  },

  warning: {
    50: '#fffbeb',
    500: '#f59e0b', // Main warning color
    900: '#78350f',
  },

  error: {
    50: '#fef2f2',
    500: '#ef4444', // Main error color
    900: '#7f1d1d',
  },

  // Alias tokens - use these for actual implementation
  background: {
    default: '#ffffff',
    secondary: '#f5f5f5',
    tertiary: '#e5e5e5',
  },

  text: {
    primary: '#171717',
    secondary: '#525252',
    disabled: '#a3a3a3',
    inverse: '#ffffff',
  },

  border: {
    default: '#e5e5e5',
    strong: '#737373',
  },
};

export default colors;