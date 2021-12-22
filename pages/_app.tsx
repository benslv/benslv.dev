import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";
import { KBarProvider } from "kbar";
import { darkTheme } from "~/stitches.config";

import { KBar } from "~/components";

import { actions } from "~/components/KBar/kbarActions";

import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "@fontsource/fira-code/500.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
      value={{
        dark: darkTheme.toString(),
        light: "light",
      }}>
      <KBarProvider actions={actions}>
        <KBar />
        <IconContext.Provider value={{ className: "react-icons" }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </KBarProvider>
    </ThemeProvider>
  );
}
export default App;
