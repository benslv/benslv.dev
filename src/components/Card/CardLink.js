import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card } from "./Card";
import { UnstyledLink } from "../UnstyledLink";

const Link = styled(UnstyledLink)`
  height: min-content;
  border-radius: var(--border-radius);
  transition: transform 0.175s var(--easing), box-shadow 0.175s var(--easing);

  /* max-width: 300px; */

  &:hover,
  &:active {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const CardLink = ({ title, to, children }) => {
  return (
    <Link to={to}>
      <Card title={title}>{children}</Card>
    </Link>
  );
};

CardLink.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
