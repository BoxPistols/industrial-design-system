// src/tokens/typography.ts
export const typography = {
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  // 見出し
  h1: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '1.75rem',
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h4: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.2,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h6: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.2,
    letterSpacing: '0.0075em',
  },
  // 本文とサブタイトル
  subtitle1: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '0.01071em',
  },
  // その他
  button: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
};

// レスポンシブタイポグラフィ用の補助関数
export const responsiveTypography = {
  // 小さい画面サイズ向けの調整
  small: {
    h1: {
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: 1.2,
    },
    // 必要に応じて他のスタイルも追加
  },
  // タブレット向けの調整
  medium: {
    h1: {
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.85rem',
      lineHeight: 1.2,
    },
    // 必要に応じて他のスタイルも追加
  },
};

export default typography;