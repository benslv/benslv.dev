import React, { useEffect } from "react";
import { styled } from "../../stitches.config";
import Prism from "prismjs";

const Wrapper = styled("div", {
  pre: {
    padding: "$2",
  },

  backgroundColor: "hsla(212, 39%, 10%, 1)",
  margin: "$2 calc(-1 * $2)",
  position: "relative",
  fontFamily: "$mono",
  fontSize: "$1",
  overflow: "hidden",

  "@md": {
    borderRadius: "$2",
  },
});

export interface CodeProps {
  code: React.ReactNode;
}

export const Pre = ({ code }: CodeProps): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Wrapper className="code">
      <pre>{code}</pre>
    </Wrapper>
  );
};