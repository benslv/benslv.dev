import React from "react";
import styled from "styled-components";

import { GlobalStyle } from "@theme/globalStyles";

const StyledSite = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledContent = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Layout = ({ children }) => {
  return (
    <StyledSite>
      <GlobalStyle />
      <StyledContent>{children}</StyledContent>
    </StyledSite>
  );
};
