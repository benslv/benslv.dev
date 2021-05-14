import React from "react";

import { Navbar } from "../Navbar";
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
      {children}
      <Footer />
    </>
  );
};
