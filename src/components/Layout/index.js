import React from "react";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

import { GlobalStyle } from "../../theme/GlobalStyle";
import { SkipToContent } from "../SkipToContent";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <SkipToContent />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
