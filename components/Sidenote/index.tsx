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
  backgroundColor: "$cardBackground",
  border: "1px solid $cardBorder",

  variants: {
    type: {
      info: {
        color: "$heading",
        backgroundColor: "$accent20",

        border: "none",
        borderLeft: "5px solid $accent",

        boxShadow: "0 0 15px $colors$accent20",
      },
      warn: {
        color: "$heading",
        backgroundColor: "$warn20",

        border: "none",
        borderLeft: "5px solid $warn",

        boxShadow: "0 0 15px $colors$warn20",
      },
      error: {
        color: "$heading",
        backgroundColor: "$error20",

        border: "none",
        borderLeft: "5px solid $error",

        boxShadow: "0 0 15px $colors$error20",
      },
    },
  },
});
