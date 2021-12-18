import React from "react";

import { Footer, DesktopNavbar, MobileNavbar, SkipToContent, SEO } from "~/components";

import { globalStyles } from "~/styles/globalStyles";

type LayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const Layout = ({ title, description, children }: LayoutProps): JSX.Element => {
  globalStyles();

  return (
    <>
      <SEO title={title} description={description} />
      <SkipToContent />
      <DesktopNavbar />
      <MobileNavbar />
      {children}
      <Footer />
    </>
  );
};
