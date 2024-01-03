import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    fonts: {
      heading: "Roboto, sans-serif",
      body: "Roboto, sans-serif"
    },
    colors: {
      primary: "#DE2E5F"
    }
  },
  withDefaultColorScheme({
    colorScheme: "primary"
  })
);

export default theme;
