import React from "react";
import styled from "styled-components";

import { Container } from "@components/Container";

import { GlobalStyle } from "@theme/globalStyles";
import { color } from "@theme/config";

const StyledSite = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${color.accent};
`;

const StyledContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: calc(100vw - 200px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.background};
`;

export const Layout = ({ children }) => {
  return (
    <StyledSite>
      <GlobalStyle />
      <StyledContent>{children}</StyledContent>
    </StyledSite>
  );
};
