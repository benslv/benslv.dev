import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Navbar } from "./Navbar";

import { GlobalStyle } from "../theme/globalStyles";
import { color, breakpoint } from "../theme/config";

const StyledSite = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  /* background-color: ${color.accent}; */
  background-color: #efeff4;
`;

const StyledContent = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.background};

  ${breakpoint.lg} {
    max-width: calc(100vw - 200px);
  }
`;

export const Layout = ({ children }) => {
  return (
    <StyledSite>
      <GlobalStyle />
      <StyledContent>
        <Navbar />
        {children}
      </StyledContent>
    </StyledSite>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
