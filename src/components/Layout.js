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
  /* background-color: #efeff4; */
  background-color: ${color.accent};
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
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin-top: 2em;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
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
