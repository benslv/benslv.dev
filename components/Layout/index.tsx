import React from "react";

import { globalStyles } from "../../styles/globalStyles";

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
      {/* Navbar */}
      {children}
      {/* Footer */}
    </>
  );
};
