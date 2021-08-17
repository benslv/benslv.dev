import React from "react";
import { styled } from "../../stitches.config";

import { Emoji } from "../Emoji";
import { UnstyledLink } from "../UnstyledLink";

import { nav } from "../../content/config";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "$2 calc(1.5* $2)",

  backgroundColor: "$background",
});

const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

const NavLink = styled(UnstyledLink, {
  color: "$text",
  fontWeight: 500,

  textDecoration: "none",

  transition: "color 0.175s $ease",

  "&:hover": {
    color: "$accent",
  },
});

export const Navbar = (): JSX.Element => (
  <Wrapper>
    <Emoji emoji="👋" size="48px" />
    <Nav>
      {nav &&
        nav.map(({ name, to }, i) => (
          <NavLink to={to} key={i}>
            {name}
          </NavLink>
        ))}
    </Nav>
  </Wrapper>
);
