// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    light: {
      background: "#ffffff",
      text: "#000000",
      // add more colors as needed
    },
    dark: {
      background: "#1a202c",
      text: "#ffffff",
      // add more colors as needed
    },
  },
});

export default theme;
