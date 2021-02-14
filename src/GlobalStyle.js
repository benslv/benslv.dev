import { createGlobalStyle } from "styled-components";

import theme from "./theme";
const { colors, fonts } = theme;

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;

    height: 100%;

    background-color: ${colors.background};
    color: ${colors.text.body};
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: ${fonts.sizes.regular};
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: ${colors.text.header};
    margin-bottom: 0.25em;
    font-size: ${fonts.sizes.large};
  }

  h1 {
    font-size: ${fonts.sizes.xLarge}
  }

  p { 
    margin-bottom: 1em;
  }
`;
