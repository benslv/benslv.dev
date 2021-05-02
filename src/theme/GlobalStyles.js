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

    --border-radius: 5px;

    --easing: ease;
    
    --base-font-size: 17px;
    --font-sans: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --font-mono: "IBM Plex Mono", "Fira Code", Hack, "Cascadia Code", Inconsolata, "Roboto Mono", Consolas, monospace;

    font-size: var(--base-font-size);
  }

  html {
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
    margin-bottom: calc(0.5 * var(--base-font-size));
  }

  h1 {
    
  }
  h2 {

  }
  h3 {
 
  }

  p {
    line-height: 1.4;
    margin: 0;
    margin-bottom: var(--base-font-size);
  }

  pre {
    font-family: var(--font-mono);
  }

  a {
    text-decoration: none;

    border-bottom: 2px solid var(--color-accent-20);
    
    color: var(--color-accent);
    
    font-weight: 500;
    
    transition: color 0.175s var(--easing), border 0.175s var(--easing);
    
    &:hover {
      color: var(--color-heading);
      border-bottom: 2px solid var(--color-heading);
    }
  }
`;
