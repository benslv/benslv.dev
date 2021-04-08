import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakpoint } from "../theme/config";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: 1fr; */

  padding: 0 1em;

  ${breakpoint.md} {
    column-gap: 1em;
  }

  ${breakpoint.lg} {
    padding: 0 2em;
  }
`;

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};
