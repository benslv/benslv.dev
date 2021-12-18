import { styled } from "~/stitches.config";

export type SidenoteProps = {
  className?: string;
  type?: "info" | "warn" | "error";
  children: React.ReactNode;
};

export const Sidenote = styled("aside", {
  margin: "calc(2 * $1) 0",
  padding: "$1",

  borderRadius: "$1",

  color: "$text",
  backgroundColor: "$slate2",
  border: "1px solid $slate7",

  variants: {
    type: {
      info: {
        color: "$blue12",
        backgroundColor: "$accent20",

        border: "1px solid $blue7",
        borderLeft: "5px solid $accent",

        boxShadow: "0 0 15px $colors$accent20",
      },
      warn: {
        color: "$amber12",
        backgroundColor: "$warn20",

        border: "1px solid $amber7",
        borderLeft: "5px solid $warn",

        boxShadow: "0 0 15px $colors$warn20",
      },
      error: {
        color: "$red12",
        backgroundColor: "$error20",

        border: "1px solid $red7",
        borderLeft: "5px solid $error",

        boxShadow: "0 0 15px $colors$error20",
      },
    },
  },
});
