import { createGlobalStyle } from "styled-components";

import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";

import "@fontsource/fira-code/500.css";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: hsla(240, 9%, 43%, 1);
    --color-heading: hsla(240, 18%, 15%, 1);
    --color-background: hsla(0, 0%, 100%,1);
    --color-accent: hsla(206, 80%, 50%, 1);
    --color-accent-20: hsla(206, 80%, 50%, 0.2);
    --color-card-background: hsla(240, 20%, 97%, 1);

    --border-radius: 5px;

    --easing: ease;
    
    --font-sans: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --font-mono: "IBM Plex Mono", "Fira Code", Hack, "Cascadia Code", Inconsolata, "Roboto Mono", Consolas, monospace;

    --scaling-ratio: 1.4;
    --font-size-base: 17px;
    --font-size-sm: 15px;
    --font-size-md: calc(var(--scaling-ratio) * var(--font-size-sm));
    --font-size-lg: calc(var(--scaling-ratio) * var(--font-size-md));
    --font-size-xl: calc(var(--scaling-ratio) * var(--font-size-lg));

  }
  
  html {
    font-size: var(--font-size-base);
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
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

    margin: 0;
    margin-bottom: calc(0.5 * var(--font-size-base));
  }

  h1 {
    font-size: var(--font-size-xl)
  }

  h2 {
    font-size: var(--font-size-lg)
  }

  h3 {
    color: var(--color-accent);
    text-transform: uppercase;
    font-size: var(--font-size-md);
  }

  p {
    line-height: 1.4;
    margin: 0;
    margin-bottom: var(--font-size-base);

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Unsure if this is a good method but it removes
     a lot of the annoying link styling.
  */
  a {
    text-decoration: none;
    color: inherit;

    &:focus {
      outline: 3px solid var(--color-accent);
    }
  }
`;
