import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { IconoirProvider } from "iconoir-react";
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
      <IconoirProvider iconProps={{ width: 28, height: 28, strokeWidth: 2 }}>
        <KBarProvider actions={actions}>
          <KBar />
          <Component {...pageProps} />
        </KBarProvider>
      </IconoirProvider>
    </ThemeProvider>
  );
}
export default App;
