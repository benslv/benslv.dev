import React from "react";

import { Container } from "../Container";

import { GlobalStyle } from "../../theme/GlobalStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};
