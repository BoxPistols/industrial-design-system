export const palette = {
  primary: {
    main: '#1DA1F2',
    contrastText: '#fff',
  },
  secondary: {
    main: '#E1BEE7',
    contrastText: '#333',
  },
};

export const typography = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSizeBase: 16,
};

export const spacing = (factor: number) => factor * 8;

type BreakpointValues = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  } as BreakpointValues,
  up: (key: keyof BreakpointValues) => `@media (min-width:${breakpoints.values[key]}px)`,
};

