import React from "react";

import type { AppProps } from "next/app";

import { IconContext } from "react-icons";

import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";

import "@fontsource/fira-code/500.css";

import "styles/prism-theme.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Component {...pageProps} />;
    </IconContext.Provider>
  );
}
export default MyApp;
