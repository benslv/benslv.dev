import React from "react";
import { styled } from "~/stitches.config";

const Wrapper = styled("div", {
  pre: {
    padding: "$1",
  },
  backgroundColor: "$slate3",
  margin: "$2 calc(-1 * $2)",
  position: "relative",
  fontSize: "$1",
  lineHeight: 1.5,

  overflowX: "auto",
  scrollbarWidth: "thin",

  border: "1px solid $slate7",

  "@md": {
    borderRadius: "$2",
  },
});

export type CodeProps = {
  code: React.ReactNode;
};

export const Pre = ({ code }: CodeProps): JSX.Element => (
  <Wrapper className="code">
    <pre>{code}</pre>
  </Wrapper>
);
