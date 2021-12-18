import { styled } from "~/stitches.config";

export const Text = styled("p", {
  lineHeight: 1.4,

  fontSize: "$1",

  margin: 0,
  marginBottom: "calc(0.5 * $1)",

  "b, strong": {
    fontWeight: "$semibold",
    color: "$heading",
  },

  "&:last-child": {
    marginBottom: 0,
  },

  "& + :is(h1,h2,h3)": {
    marginTop: "$1",
  },
});
