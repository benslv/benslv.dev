import React, { useEffect } from "react";
import { styled } from "../../stitches.config";
import Prism from "prismjs";

const Wrapper = styled("div", {});

interface CodeProps {
  code: string;
  language: string;
}

export const Code = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Wrapper className="code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </Wrapper>
  );
};
