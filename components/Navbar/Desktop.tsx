import React from "react";
import { styled } from "~/stitches.config";

import { UnstyledLink } from "../UnstyledLink";
import { Emoji } from "../Emoji";
import { ThemeToggle } from "../ThemeToggle";

import { nav } from "~/content/config";

const Wrapper = styled("div", {
  display: "none",

  justifyContent: "space-between",
  alignItems: "center",

  padding: "$2 calc(1.5* $2)",

  "@md": {
    display: "flex",
  },
});

const Nav = styled("nav", {
  alignItems: "center",
  gap: "$2",

  display: "none",

  "@sm": {
    display: "flex",
  },
});

const NavLink = styled(UnstyledLink, {
  color: "$text",
  fontWeight: 500,

  textDecoration: "none",

  transition: "color $ease",

  "&:hover": {
    color: "$accent",
  },
});

export const Desktop = (): JSX.Element => (
  <Wrapper>
    <UnstyledLink to="/">
      <Emoji emoji="👋" size="48px" />
    </UnstyledLink>
    <Nav>
      {nav &&
        nav.map(({ name, to }, i) => (
          <NavLink to={to} key={i}>
            {name}
          </NavLink>
        ))}
    </Nav>
    <ThemeToggle />
  </Wrapper>
);
