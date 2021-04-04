import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { font, color, breakpoint } from "../theme/config";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  padding: 1rem;
  margin: 1em 0;

  background-color: ${color.lightGrey};

  box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.1);

  border-radius: 5px;
  border: 1px solid ${color.text};

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 2em;
  }

  ${breakpoint.md} {
    max-width: 480px;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: ${font.size.base};
`;

const Description = styled.p`
  font-size: ${font.size.base};
  margin-bottom: 0;
`;

export const Card = ({ title = "Title", description = "Description" }) => {
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
