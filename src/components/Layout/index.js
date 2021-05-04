import React from "react";

import { Navbar } from "../Navbar";
import { Container } from "../Container";
import { Footer } from "../Footer";

import { GlobalStyle } from "../../theme/GlobalStyle";
import { SkipToContent } from "../SkipToContent";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <SkipToContent />
      <Navbar />
      <Container id="main-content">{children}</Container>
      <Footer />
    </>
  );
};
