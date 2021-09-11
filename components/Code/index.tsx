import React, { useEffect } from "react";
import { styled } from "../../stitches.config";
import Prism from "prismjs";

const Wrapper = styled("div", {
  pre: {
    padding: "$2",
  },

  backgroundColor: "hsla(212, 39%, 10%, 1)",
  margin: "0 calc(-1 * $2)",
  marginTop: "$2",
  marginBottom: "$1",
  position: "relative",
  fontFamily: "$mono",
  fontSize: "$1",
  borderRadius: "$2",
  overflow: "hidden",
});

interface CodeProps {
  code: string;
  language: string;
}

export const Code = ({ code, language }: CodeProps): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Wrapper className="code">
      <pre>
        <code className={language}>{code}</code>
      </pre>
    </Wrapper>
  );
};
