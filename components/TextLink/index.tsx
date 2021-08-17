import { styled } from "../../stitches.config";

import { UnstyledLink } from "../UnstyledLink";

export const TextLink = styled(UnstyledLink, {
  textDecoration: "none",

  color: "$accent",
  fontWeight: "$semibold",

  borderBottom: "2px solid $accent20",

  transition: "color $ease, border $ease",

  width: "max-content",

  "&:hover": {
    color: "$heading",
    borderBottom: "2px solid $heading",
  },
});
