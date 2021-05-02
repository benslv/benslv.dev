import { createGlobalStyle } from "styled-components";

import "@fontsource/rubik/400.css";
import "@fontsource/rubik/700.css";

import "@fontsource/fira-code/500.css";

export const GlobalStyle = createGlobalStyle`
  html {
    --color-text: #646478;
    --color-heading: #1F1F2D;
    --color-background: #FFFFFF;
    --color-accent: #198EE5;
    
    --base-font-size: 18px;
    --font-sans: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --font-mono: "IBM Plex Mono", "Fira Code", Hack, "Cascadia Code", Inconsolata, "Roboto Mono", Consolas, monospace;

    font-size: var(--base-font-size);
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    
    font-family: var(--font-sans);
    font-weight: 400;

    color: var(--color-text);
  }

  h1,h2,h3 {
    font-weight: 700;

    color: var(--color-heading);
  }

  p {
    line-height: 1.5;
  }

  pre {
    font-family: var(--font-mono);
  }
`;
