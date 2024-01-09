import "@emotion/react";
import theme from "themes/theme";

type ColorKeys = keyof (typeof theme)["colors"];
type ShadowKeys = keyof (typeof theme)["shadows"];
type TextKeys = keyof (typeof theme)["text"];

declare module "@emotion/react" {
  export interface Theme {
    colors: { [K in ColorKeys]: (typeof theme)["colors"][K] };
    shadows: { [K in ShadowKeys]: (typeof theme)["shadows"][K] };
    text: { [K in TextKeys]: (typeof theme)["text"][K] };
  }
}
