import React from "react";

import { Navbar } from "../Navbar";
import { Container } from "../Container";
import { Footer } from "../Footer";

import { GlobalStyle } from "../../theme/GlobalStyle";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
