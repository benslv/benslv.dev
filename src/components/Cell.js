import React from "react";
import styled from "styled-components";

import { breakpoint } from "../theme/config";

const StyledCell = styled.div`
  grid-column: ${({ sm, smSpan }) => `${sm} / span ${smSpan}`};

  ${breakpoint.md} {
    grid-column: ${({ md, mdSpan }) => `${md} / span ${mdSpan}`};
  }

  ${breakpoint.lg} {
    grid-column: ${({ lg, lgSpan }) => `${lg} / span ${lgSpan}`};
  }
`;

export const Cell = ({ children, ...props }) => {
  return <StyledCell {...props}>{children}</StyledCell>;
};
