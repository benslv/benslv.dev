import React from "react";
import styled from "styled-components";
import { blueBox } from "../../theme/mixins";

import { Emoji } from "../Emoji";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: var(--font-size-lg);
  padding: var(--font-size-lg) 0;

  p {
    ${blueBox};

    font-weight: 500;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <p>
        Made with <Emoji emoji="☕" /> in the UK!
      </p>
    </Wrapper>
  );
};
