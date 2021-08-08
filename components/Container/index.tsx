import { styled } from "../../stitches.config";

export const Container = styled("main", {
  display: "grid",

  gridTemplateColumns: "1fr min(65ch, calc(100% - 2 * var(--gap-width))) 1fr",
  gridColumnGap: "$1",
  gridRowGap: "calc(2 * $1)",

  marginBottom: "calc(2 * $1)",

  "& > *": {
    gridColumn: 2,
  },

  "& > .full-bleed": {
    gridColumn: "1 / -1",
  },
});
