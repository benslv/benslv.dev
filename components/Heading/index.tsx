import { styled, css } from "~/stitches.config";

const heading = css({
  fontWeight: "$bold",
  color: "$heading",

  margin: 0,
  marginBottom: "calc(0.5 * $1)",
});

export const H1 = styled("h1", heading, {
  fontSize: "$4",
});

export const H2 = styled("h2", heading, {
  fontSize: "$3",
});

export const H3 = styled("h3", heading, {
  color: "$accent",

  textTransform: "uppercase",

  fontSize: "$2",
});
