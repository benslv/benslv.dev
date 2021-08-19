import React from "react";

import { globalStyles } from "../../styles/globalStyles";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Layout = ({ title, description, children }: LayoutProps): JSX.Element => {
  globalStyles();

  return (
    <>
      {/* SEO */}
      {/* Skip to Content button */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
