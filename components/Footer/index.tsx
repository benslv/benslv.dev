import React from "react";
import { styled } from "../../stitches.config";
import { blueBox } from "../BlueBox";

import { Emoji } from "../Emoji";
import { Text } from "../Text";

const Wrapper = styled("footer", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  marginTop: "$3",
  padding: "$3 0",

  [`& ${Text}`]: {
    fontWeight: "$semibold",
  },
});

export const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Text className={blueBox()}>
        Made with <Emoji emoji="☕" /> in the UK!
      </Text>
    </Wrapper>
  );
};
