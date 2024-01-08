import "@emotion/react";
import theme from "themes/theme";

type ColorKeys = keyof (typeof theme)["colors"];

declare module "@emotion/react" {
  export interface Theme {
    colors: { [K in ColorKeys]: (typeof theme)["colors"][K] };
    shadows: {
      1: string;
      2: string;
    };
  }
}
