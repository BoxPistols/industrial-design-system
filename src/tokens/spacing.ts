// src/tokens/spacing.ts
/**
 * スペーシング関数
 * rem単位でスペーシングを返す
 * @param factor スペーシングの係数
 * @returns rem単位のスペーシング値
 */
export const spacing = (factor: number): string => `${0.25 * factor}rem`;

/**
 * 名前付きスペーシング値
 * よく使用されるスペーシング値に名前をつけたオブジェクト
 */
export const spacingValues = {
  xs: spacing(1),    // 0.25rem = 4px
  sm: spacing(2),    // 0.5rem = 8px
  md: spacing(4),    // 1rem = 16px
  lg: spacing(6),    // 1.5rem = 24px
  xl: spacing(8),    // 2rem = 32px
  xxl: spacing(12),  // 3rem = 48px
};

/**
 * マージン用のクラス名マッピング
 * Tailwindのマージンクラスとの対応表
 */
export const marginClasses = {
  xs: 'm-1',
  sm: 'm-2',
  md: 'm-4',
  lg: 'm-6',
  xl: 'm-8',
  xxl: 'm-12',
};

/**
 * パディング用のクラス名マッピング
 * Tailwindのパディングクラスとの対応表
 */
export const paddingClasses = {
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
  xxl: 'p-12',
};

/**
 * ギャップ用のクラス名マッピング
 * Tailwindのギャップクラスとの対応表
 */
export const gapClasses = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  xxl: 'gap-12',
};

export default spacing;