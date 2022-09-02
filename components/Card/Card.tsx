import React from "react";
import { styled } from "~/stitches.config";

import { H2 } from "../Heading";

const Body = styled("div", {
  display: "flex",
  flexDirection: "column",

  border: "1px solid $slate7",
  borderRadius: "$1",

  padding: "$1",

  backgroundColor: "$slate2",

  boxShadow: "$light",
});

const Title = styled(H2, {
  fontSize: "$1",
  fontWeight: "$semibold",

  // marginBottom: "calc(0.5 * $1)",
  marginBottom: "calc(0.25 * $0)",

  color: "$heading",
});

export type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps): JSX.Element => {
  return (
    <Body>
      {title ? <Title>{title}</Title> : null}
      {children}
    </Body>
  );
};
