import React from "react";
import styled from "styled-components";

import { Card } from "../Card";

import { font, breakpoint } from "../../theme/config";

const StyledProjects = styled.div`
  grid-column: 1 / span 6;

  ${breakpoint.md} {
    grid-column: 1 / span 3;
  }

  ${breakpoint.lg} {
    grid-column: 1 / span 2;
  }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${font.size.base};
`;

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledProjects>
  );
};
