import React from "react";
import styled from "styled-components";
import { Link as gLink } from "gatsby";

const Link = styled(gLink)``;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-card-border);
  border-radius: var(--border-radius);

  padding: 1em;

  background-color: var(--color-card-background);

  transition: transform 0.175s var(--easing), box-shadow 0.175s var(--easing);

  box-shadow: var(--box-shadow-light);

  &:hover,
  &:active {
    transform: scale(1.025);
    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.p`
  font-weight: 500;

  color: var(--color-heading);
`;

export const Card = ({ title, to, children }) => {
  return (
    <Link to={to}>
      <CardBody>
        <Title>{title}</Title>
        {children}
      </CardBody>
    </Link>
  );
};
