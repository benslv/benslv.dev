import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { font, color } from "../theme/config";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 480px;

  padding: 1.5rem;

  background-color: ${color.lightGrey};

  box-shadow: 0 0 25px 4px ${color.lightGrey};

  border-radius: 5px;
  border: 1px solid ${color.text};

  transition: all 0.35s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: ${font.size.base};

  margin-bottom: 1em;
`;

const Description = styled.p`
  font-size: ${font.size.medium};
  margin-bottom: 0;
`;

export const Card = ({ title, description }) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Description>
        {description}
        {/* I&apos;m working hard on designing this site at the moment, and am aiming to actually start
        coding it as soon as possible! */}
      </Description>
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
