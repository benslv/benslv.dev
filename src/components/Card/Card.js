import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-card-border);
  border-radius: var(--border-radius);

  padding: 1em;

  /* max-width: 300px; */

  background-color: var(--color-card-background);

  box-shadow: var(--box-shadow-light);
`;

const Title = styled.h2`
  font-size: var(--font-size-base);
  font-weight: 500;

  color: var(--color-heading);
`;

export const Card = ({ title, children }) => {
  return (
    <Body>
      {title && <Title>{title}</Title>}
      {children}
    </Body>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
