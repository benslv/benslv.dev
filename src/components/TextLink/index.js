import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import { Sidenote } from "../Sidenote";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-accent);
  font-weight: 500;
  border-bottom: 2px solid var(--color-accent-20);
  transition: color 0.175s var(--easing), border 0.175s var(--easing);

  &:hover {
    color: var(--color-heading);
    border-bottom: 2px solid var(--color-heading);
  }

  ${Sidenote}.warn & {
    color: var(--color-warn);
    border-bottom: 2px solid var(--color-warn-20);

    &:hover {
      color: var(--color-heading);
      border-bottom: 2px solid var(--color-heading);
    }
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
