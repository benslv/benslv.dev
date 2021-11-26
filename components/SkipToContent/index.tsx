import React from "react";
import { styled } from "../../stitches.config";

import { blueBox } from "../BlueBox";

const SkipLink = styled("a", {
  position: "fixed",
  left: 50,
  top: 100,

  transform: "translateX(-150%)",
  transition: "transform $ease",

  "&:focus": {
    transform: "translateX(0)",
  },
});

export const SkipToContent = (): JSX.Element => {
  return (
    <SkipLink className={blueBox()} href="#main-content">
      Skip to content
    </SkipLink>
  );
};
