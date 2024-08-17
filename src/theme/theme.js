const { extendTheme } = require("@chakra-ui/theme-utils");

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

const breakpoints = {
  sm: "576px",
  md: "769px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
};

const customTheme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      primary: "#1987a4",
    },
    muted: "#D9D9D9",
  },
  components: {
    Heading: {
      variants: {
        primary: {
          fontSize: ["1.4rem", "2.5rem", null, null, "2.9rem"],
          lineHeight: ["33px", "54px"],
          fontWeight: 500,
        },
        secondary: {
          fontSize: ["1.2rem", "1.2rem", "2rem"],
        },
        tertiary: {
          fontWeight: 800,
          fontSize: ["1.2rem", null, "1.7rem"],
        },
        smaller: {
          fontWeight: 600,
          fontSize: ["0.9rem", null, "1rem"],
        },
      },
    },
    Text: {
      variants: {
        description: {
          fontSize: ["0.8rem", "0.9rem", "1rem"],
        },
        small: {
          fontSize: ["0.6rem", "0.7rem", "0.8rem"],
        },
      },
    },
    Button: {
      variants: {
        primary: {
          bg: "#2e2e2e",
          color: "#fff",
          fontWeight: 500,
          borderRadius: "50px",
        },
      },
    },
    FormLabel: {
      variants: {
        primary: {
          fontSize: ["0.8rem", "0.9rem"],
        },
      },
    },
  },
});

export default customTheme;
