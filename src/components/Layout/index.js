import React from "react";

import { Navbar } from "../Navbar";
import { Container } from "../Container";
import { Footer } from "../Footer";
import { SkipToContent } from "../SkipToContent";
import { SEO } from "../SEO";

import { GlobalStyle } from "../../theme/GlobalStyle";

export const Layout = ({ title, description, children }) => {
  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={description} />
      <SkipToContent />
      <Navbar />
      <Container id="main-content">{children}</Container>
      <Footer />
    </>
  );
};
