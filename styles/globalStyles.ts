import { globalCss, darkTheme } from "../stitches.config";

export const globalStyles = globalCss({
  html: {
    fontSize: "$1",
    boxSizing: "border-box",
    width: "100%",
  },

  "*, *:before, *:after": {
    margin: 0,
    padding: 0,
    boxSizing: "inherit",
  },

  "*": {
    scrollbarColor: "$text $background",
  },

  body: {
    margin: 0,
    padding: 0,

    fontFamily: "$sans",
    fontWeight: "$normal",

    color: "$text",
    backgroundColor: "$background",

    "&::-webkit-scrollbar": {
      width: 12,
    },

    "&::-webkit-scrollbar-track": {
      background: "$background",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "$text",
      borderRadius: 20,
      border: "3px solid $background",
    },
  },
});
