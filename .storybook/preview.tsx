import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import {muiTheme} from "../src/muiTheme";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={muiTheme}>
      <div className="p-4 max-w-lg mx-auto">
        <Story />
      </div>
    </ThemeProvider>
  ),
];
