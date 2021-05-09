import styled from "styled-components";

import { UnstyledLink } from "../../UnstyledLink";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--font-size-base));
`;

export const Project = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`;

export const ProjectInfo = styled.div`
  grid-column: 3 / span 4 ;
  grid-row: 1;

  display: grid;
  grid-row-gap: var(--font-size-base);

  z-index: 2;
`;

export const ProjectTitle = styled(UnstyledLink)`
  margin: 0;

  font-weight: 700;
  color: var(--color-accent);
  font-size: var(--font-size-md);

  transition: color 0.175s var(--easing);

  &:hover {
    color: var(--color-heading);
  }
`;

export const ProjectImage = styled.div`
  grid-column: 6 / span 5;
  grid-row: 1;
  
  box-shadow: var(--box-shadow-light);

  z-index: 0;
`;

export const ProjectTags = styled.span`
  font-family: var(--font-mono);
  color: var(--color-text);
  font-size: var(--font-size-sm);
`;
