import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    orange: {
      300: "#FBD38D",
      400: "#F6AD55",
      500: "#fa8c44",
      600: "#EC7C32",
      700: "#DD6B20",
      800: "#C05621",
      900: "#7B341E"
    }
  },
  fonts,
  breakpoints,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  }
});

export default theme;
