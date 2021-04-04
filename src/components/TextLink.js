import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import { font, color } from "../theme/config";

const StyledLink = styled(Link)`
  color: ${color.heading};
  font-weight: ${font.weight.semibold};
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

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
