import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { color } from "@theme/config";

const StyledLink = styled(Link)`
  color: ${color.text};
  font-weight: 700;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  &:hover {
    color: ${color.accent};
  }
`;

export const TextLink = ({ to, children, className }) => {
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <StyledLink to={to} className={className}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink as="a" href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </StyledLink>
  );
};
