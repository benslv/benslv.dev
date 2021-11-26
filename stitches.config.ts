import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
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
      cardBackground: "hsla(240, 20%, 97%, 1)",
      cardBorder: "hsla(240, 20%, 75%, 1)",
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
      light: "0 0px 5px 0 rgba(0, 0, 0, 0.1)",
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
  },
});
