import type {Preview} from "@storybook/react";
import {ThemeProvider} from "@mui/material/styles";
import {muiTheme} from "../src/tokens/theme"; // MUI 7のテーマ

import "../src/index.css"; // Tailwind用のグローバルCSS
import React from "react";

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={muiTheme}>
        {/* Tailwind CSSのグローバルスタイルを適用 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
