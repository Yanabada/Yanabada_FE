import "@emotion/react";
import theme from "themes/theme";

type Colors = "pink" | "blue" | "green" | "orange" | "gray";
type themeType = (typeof theme)["colors"];

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      pink: {
        100: string;
        200: string;
      };
      blue: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
      };
      green: string;
      orange: {
        100: string;
        200: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
  }
}
