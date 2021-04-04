import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakpoint } from "../theme/config";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1em;

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
