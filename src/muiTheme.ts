import { createTheme } from '@mui/material/styles';
import { palette, typography } from './theme';

export const muiTheme = createTheme({
  palette: {
    primary: { ...palette.primary },
    secondary: { ...palette.secondary },
  },
  typography,
});
export type MuiTheme = typeof muiTheme;
export type MuiThemePalette = typeof muiTheme.palette;
export type MuiThemeTypography = typeof muiTheme.typography;
export type MuiThemeSpacing = typeof muiTheme.spacing;
export type MuiThemeBreakpoints = typeof muiTheme.breakpoints;
export type MuiThemeZIndex = typeof muiTheme.zIndex;
export type MuiThemeComponents = typeof muiTheme.components;
