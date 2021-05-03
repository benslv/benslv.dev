import React from "react";
import styled from "styled-components";

import { Emoji } from "../Emoji";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: var(--font-size-lg) 0;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <p>
        Made with <Emoji emoji="☕"/> in the UK!
      </p>
    </Wrapper>
  );
};
