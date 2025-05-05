import { createTheme } from '@mui/material'
import colors from './colors' // Correct import for colors
import { typography } from './typography' // Uncommented import
import { spacing } from './spacing' // Uncommented import
import { colorData } from './colorToken'
// 共通デザイントークン
export const tokens = {
    colors,
    typography,
    spacing,
}

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: colorData.primary.main,
            light: colorData.primary.light,
            dark: colorData.primary.dark,
            // lighter: colorData.primary.lighter,
            // textContrast: colorData.primary.textContrast,
        },
        secondary: {
            main: tokens.colors.neutral[500],
            light: tokens.colors.neutral[300],
            dark: tokens.colors.neutral[700],
        },
        // 他のパレット設定
    },
    typography: {
        fontFamily: tokens.typography.fontFamily,
        h1: tokens.typography.h1,
        // 他のタイポグラフィ設定
    },
    // MUI 7の新しいテーマ設定があればここに追加
    spacing: (factor: number) => `${0.25 * factor}rem`, // スペーシングの設定
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                disableTouchRipple: true,
                variant: 'contained',
                size: 'medium',
            },
            styleOverrides: {
                root: {
                    // fontFamily: tokens.typography.fontFamily,
                    // fontWeight: 500,
                    // fontSize: tokens.typography.subtitle1.fontSize,
                    // lineHeight: tokens.typography.subtitle1.lineHeight,
                    // letterSpacing: tokens.typography.subtitle1.letterSpacing,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: tokens.typography.fontFamily,
                    fontSize: tokens.typography.subtitle1.fontSize,
                    lineHeight: tokens.typography.subtitle1.lineHeight,
                    letterSpacing: tokens.typography.subtitle1.letterSpacing,
                },
            },
        },
        // 他のコンポーネントのスタイルオーバーライド
    },
})

export default tokens
