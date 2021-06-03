import React from "react";
import styled from "styled-components";
import { blueBox } from "../../theme/mixins";

const SkipLink = styled.a`
  position: fixed;
  left: 50px;
  top: 100px;
  transform: translateX(-150%);
  transition: transform 0.175s var(--easing);

  ${blueBox};

  &:focus {
    transform: translateX(50px);
  }
`;

export const SkipToContent = () => {
  return <SkipLink href="#main-content">Skip to content</SkipLink>;
};
