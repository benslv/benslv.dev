import { styled } from "../../stitches.config";

export const UnorderedList = styled("ul", {
  marginBottom: "$1",
  marginLeft: "$1",

  "::marker": {
    color: "$accent",
  },
});

export const ListItem = styled("li", {
  margin: "calc(0.5 * $1) 0",
});
