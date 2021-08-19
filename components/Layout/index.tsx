import React from "react";

import { globalStyles } from "../../styles/globalStyles";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { SkipToContent } from "../SkipToContent";
import { SEO } from "../SEO";

interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Layout = ({ title, description, children }: LayoutProps): JSX.Element => {
  globalStyles();

  return (
    <>
      <SEO title={title} description={description} />
      <SkipToContent />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
