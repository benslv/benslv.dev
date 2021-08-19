import React from "react";
import { styled } from "../../stitches.config";

import { Emoji } from "../Emoji";

const Wrapper = styled("footer", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  marginTop: "$3",
  padding: "$3 0",

  p: {
    blueBox: "",

    fontWeight: "$semibold",
  },
});

export const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <p>
        Made with <Emoji emoji="☕" /> in the UK!
      </p>
    </Wrapper>
  );
};
