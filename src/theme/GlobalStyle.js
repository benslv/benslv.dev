import { createGlobalStyle } from "styled-components";

import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";

import "@fontsource/fira-code/500.css";

import { PrismStyles } from "./PrismStyles";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: hsla(240, 9%, 43%, 1);
    --color-heading: hsla(240, 18%, 15%, 1);
    --color-background: hsla(0, 0%, 100%,1);
    --color-accent: hsla(206, 80%, 50%, 1);
    --color-accent-20: hsla(206, 80%, 50%, 0.2);
    --color-warn: hsla(38, 100%, 53%, 1);
    --color-warn-20: hsla(38, 100%, 53%, 0.2);
    --color-error: hsla(348, 100%, 44%, 1);
    --color-error-20: hsla(348, 100%, 44%, 0.2);
    --color-card-background: hsla(240, 20%, 97%, 1);
    --color-card-border: hsla(240, 20%, 75%, 1);

    --border-radius: 5px;

    --box-shadow-light: 0 0px 5px 0 rgba(0, 0, 0, 0.1);

    --gap-width: 24px;

    --easing: ease;
    
    --font-sans: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --font-mono: "Fira Code", Hack, "Cascadia Code", Inconsolata, "Roboto Mono", Consolas, monospace;

    --scaling-ratio: 1.4;
    --font-size-base: 17px;
    --font-size-sm: calc((var(--font-size-base) / var(--scaling-ratio)) + 2px);
    --font-size-md: calc(var(--scaling-ratio) * var(--font-size-base));
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
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  * {
    /* scrollbar-width: thin; */
    scrollbar-color: var(--color-text) var(--color-background);
  }

  body {
    margin: 0;
    padding: 0;
    
    font-family: var(--font-sans);
    font-weight: 400;

    background-color: var(--color-background);
    color: var(--color-text);


    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-background);      
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-text);
      border-radius: 20px;
      border: 3px solid var(--color-background);
    }
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
    margin-bottom: calc(0.5 * var(--font-size-base));

    &:last-child {
      margin-bottom: 0;
    }

    & + :is(h1,h2,h3) {
      margin-top: var(--font-size-base);
    }
  }

  /* Unsure if this is a good method but it removes
     a lot of the annoying link styling.
  */
  a {
    text-decoration: none;
    color: inherit;

    &:focus-visible {
      outline: 3px solid var(--color-accent);
      border-radius: var(--border-radius);
    }
  }

  code {
    color: var(--color-accent);
    font-family: var(--font-mono);
    font-weight: 500;

    background: var(--color-accent-20);
    border-radius: var(--border-radius);
    padding: 2px 5px;

    line-height: 1.6;
  }
  
  img {
    max-width: 100%;
    border-radius: var(--border-radius);
  }

  .gatsby-resp-image-figcaption {
    font-size: var(--font-size-base);
    text-align: center;
    font-style: italic;


    margin-top: calc(0.5 * var(--font-size-base));
  }

  /* Custom <ol> styling 
     https://www.joshwcomeau.com/css/styling-ordered-lists-with-css-counters/
  */
  ol {
    counter-reset: bruh;
    list-style: none;
    /* padding-left: calc(0.5 * var(--font-size-base)); */

    margin: calc(0.5 * var(--font-size-base)) 0;
  }

  ol li {
    counter-increment: bruh;
  }

  ol li:before {
    content: counters(bruh, ".") ". ";

    color: var(--color-accent);
    font-weight: 500;

    padding-right: calc(0.25 * var(--font-size-base));
  }

  ul {
    list-style: none;
    margin-bottom: 1em;
  
    li {
      margin: calc(0.5 * var(--font-size-base));

      &:before {
        content: "•";
      color: var(--color-accent);

      padding-right: 8px;

      font-weight: 700;
      }
    }
    
  }

  string, b {
    font-weight: 500;
    color: var(--color-heading);
  }

  ${PrismStyles}
`;
