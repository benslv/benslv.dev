import { createStitches, createTheme } from "@stitches/react";

import {
  blue,
  slate,
  red,
  amber,
  cyan,
  pink,
  orange,
  grass,
  purple,
  blueDark,
  slateDark,
  redDark,
  amberDark,
  cyanDark,
  pinkDark,
  orangeDark,
  grassDark,
} from "@radix-ui/colors";

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
  theme: {
    colors: {
      ...blue,
      ...slate,
      ...red,
      ...amber,

      ...cyan,
      ...pink,
      ...orange,
      ...grass,
      ...purple,

      text: "$slate11",
      heading: "$slate12",
      background: "$slate1",
      accent: "$blue11",
      accent20: "$blue4",
      warn: "$amber9",
      warn20: "$amber4",
      error: "$red9",
      error20: "$red5",
    },
    fonts: {
      sans: "Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
      mono: "Fira Code, Hack, Cascadia Code, Inconsolata, Roboto Mono, Consolas, monospace",
    },
    fontSizes: {
      0: "12px",
      1: "17px",
      2: "24px",
      3: "32px",
      4: "48px",
    },
    fontWeights: {
      normal: 400,
      semibold: 500,
      bold: 700,
    },
    shadows: {
      light: "0 0 5px 0 $slate10",
    },
    space: {
      0: "12px",
      1: "17px",
      2: "24px",
      3: "32px",
      4: "48px",
    },
    sizes: {
      1: "24px",
    },
    radii: {
      1: "5px",
      2: "10px",
    },
    transitions: {
      ease: "0.175s ease",
      easeSlower: "0.25s ease",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1280px)",
    dark: "(prefers-color-scheme: dark)",
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    ...blueDark,
    ...slateDark,
    ...redDark,
    ...amberDark,
    ...cyanDark,
    ...pinkDark,
    ...orangeDark,
    ...grassDark,

    text: "$slate11",
    heading: "$slate12",
    background: "$slate1",
    accent: "$blue11",
    accent20: "$blue4",
    warn: "$amber9",
    warn20: "$amber4",
    error: "$red9",
    error20: "$red5",
  },
});
