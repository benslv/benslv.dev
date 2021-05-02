import React from "react";

import { Container } from "../Container";

import { GlobalStyle } from "../../theme/GlobalStyle";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};
