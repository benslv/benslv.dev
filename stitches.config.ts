import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      text: "hsla(240, 9%, 43%, 1)",
      heading: "hsla(240, 18%, 15%, 1)",
      background: "hsla(0, 0%, 100%,1)",
      accent: "hsla(206, 80%, 50%, 1)",
      accent20: "hsla(206, 80%, 50%, 0.2)",
      warn: "hsla(38, 100%, 53%, 1)",
      warn20: "hsla(38, 100%, 53%, 0.2)",
      error: "hsla(348, 100%, 44%, 1)",
      error20: "hsla(348, 100%, 44%, 0.2)",
      cardBackround: "hsla(240, 20%, 97%, 1)",
      cardBorder: "hsla(240, 20%, 75%, 1)",
    },
    fonts: {
      sans: "Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
      mono: "Fira Code, Hack, Cascadia Code, Inconsolata, Roboto Mono, Consolas, monospace",
    },
    fontSizes: {
      base: "17px",
      sm: "calc(($base / 1.4) + 2px)",
      md: "calc(1.4 * $base)",
      lg: "calc(1.4 * $md)",
      xl: "calc(1.4 * $lg)",
    },
    fontWeights: {
      normal: 400,
      semibold: 500,
      bold: 700,
    },
    shadows: {
      light: "0 0px 5px 0 rgba(0, 0, 0, 0.1)",
    },
    space: {
      1: "12px",
      2: "24px",
      3: "48px",
    },
    radii: {
      1: "5px",
    },
    transitions: {
      ease: "ease",
    },
  },
  utils: {
    blueBox: () => () => ({
      color: "$accent",
      backgroundColor: "$accent20",

      padding: "calc(0.5 * $1) $1",

      borderRadius: "$1",

      boxShadow: "$light",
    }),
  },
});
