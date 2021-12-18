import React from "react";
import { styled } from "~/stitches.config";

import { Card, CardProps } from "./Card";
import { UnstyledLink, UnstyledLinkProps } from "../UnstyledLink";

const Link = styled(UnstyledLink, {
  height: "min-content",
  display: "block",

  textDecoration: "none",
  color: "$text",

  borderRadius: "$1",

  transition: "transform $ease, box-shadow $ease",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px 0px rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.1)",
  },
});

interface CardLinkProps extends CardProps, UnstyledLinkProps {}

export const CardLink = ({ title, to, children }: CardLinkProps): JSX.Element => {
  return (
    <Link to={to}>
      <Card title={title}>{children}</Card>
    </Link>
  );
};
