# インダストリアルデザインシステム

このプロジェクトは、React + TypeScript + Viteを使用したモダンなデザインシステムの構築を目的としています。

## 🚀 概要

- モジュール化されたコンポーネントライブラリ
- 一貫性のあるデザイントークンとスタイリング
- 型安全なコンポーネント開発
- 効率的なビルドと開発体験

## 📁 プロジェクト構造

```bash
industrial-design-system/
├── src/
│   ├── components/         # UIコンポーネント
│   │   └── ui/            # 基本コンポーネント
│   │       └── Button/    # ボタンコンポーネント
│   │           ├── Button.tsx        # コンポーネント実装
│   │           ├── Button.stories.tsx # Storybookストーリー
│   │           └── index.ts          # エクスポート
│   ├── lib/               # ユーティリティ関数
│   │   └── utils.ts      # 共通ユーティリティ
│   ├── tokens/           # デザイントークン
│   │   ├── colors.ts     # カラーパレット
│   │   ├── spacing.ts    # スペーシング
│   │   ├── theme.ts      # テーマ設定
│   │   └── typography.ts # タイポグラフィ
│   ├── assets/           # 静的アセット
│   ├── App.tsx           # メインアプリケーション
│   └── main.tsx          # エントリーポイント
├── public/               # 静的ファイル
├── tests/                # テストファイル
├── .eslintrc.js         # ESLint設定
├── tailwind.config.js    # Tailwind設定
├── tsconfig.json         # TypeScript設定
├── vite.config.ts        # Vite設定
└── vitest.workspace.ts   # Vitest設定
```

## 🛠 技術スタック

- **フレームワーク**: React 19
- **言語**: TypeScript 5.7
- **ビルドツール**: Vite 6
- **スタイリング**:
  - Tailwind CSS 3.4
  - Material-UI 7
  - Emotion
- **テスト**:
  - Vitest
  - Storybook 8
  - Playwright
- **開発ツール**:
  - ESLint 9
  - TypeScript ESLint

## ⚙️ セットアップ

### 必要条件

- Node.js 18以上
- pnpm

### インストール

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# Storybookの起動
pnpm storybook

# ビルド
pnpm build

# テストの実行
pnpm test
```

## 📦 主要パッケージ

### コアパッケージ

- `@mui/material`: Material-UIコンポーネント
- `@emotion/react`: CSS-in-JSソリューション
- `class-variance-authority`: バリアント管理
- `tailwindcss`: ユーティリティファーストCSS

### 開発ツール

- `typescript`: 型安全な開発
- `vite`: 高速なビルドツール
- `eslint`: コード品質管理
- `storybook`: コンポーネント開発環境

### テスト

- `vitest`: テストフレームワーク
- `playwright`: E2Eテスト
- `@storybook/test`: Storybookテスト

## 🔧 設定ファイル

### TypeScript設定

- `tsconfig.json`: 共通設定
- `tsconfig.app.json`: アプリケーション設定
- `tsconfig.node.json`: Node.js環境設定

### ビルド設定

- `vite.config.ts`: Vite設定
- `tailwind.config.js`: Tailwind CSS設定
- `postcss.config.js`: PostCSS設定

## 📝 開発ガイドライン

### コンポーネント開発

1. コンポーネントは`src/components/ui`ディレクトリに配置
2. 各コンポーネントは独自のディレクトリを持つ
3. コンポーネントは以下のファイルで構成:
   - `ComponentName.tsx`: メインコンポーネント
   - `ComponentName.stories.tsx`: Storybook用ストーリー
   - `index.ts`: エクスポート用

### デザイントークン

- `src/tokens`ディレクトリで管理
- カラー、スペーシング、タイポグラフィを分離
- テーマ設定で一元的に管理

### テストフロー

- コンポーネントごとにStorybookストーリーを実装
- Vitestでユニットテストを実装
- PlaywrightでE2Eテストを実装

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。
