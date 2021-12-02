import React, { useState } from "react";
import { styled } from "../../stitches.config";
import { BiDotsVerticalRounded } from "react-icons/bi";

import { UnstyledLink } from "../UnstyledLink";
import { Emoji } from "../Emoji";

import { nav } from "content/config";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "$2 calc(1.5* $2)",

  backgroundColor: "$background",

  "@md": {
    display: "none",
  },
});

const Nav = styled("nav", {
  alignItems: "center",
  gap: "$2",

  display: "none",

  "@sm": {
    display: "flex",
  },

  variants: {
    state: {
      shown: {
        display: "flex",
      },
      hidden: {
        display: "none",
      },
    },
  },

  defaultVariants: {
    state: "hidden",
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

export const Mobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Emoji emoji="👋" size="48px" />
      <BiDotsVerticalRounded onClick={() => setIsOpen((prev) => !prev)} />
      <Nav state={isOpen ? "shown" : "hidden"}>
        {nav &&
          nav.map(({ name, to }, i) => (
            <NavLink to={to} key={i}>
              {name}
            </NavLink>
          ))}
      </Nav>
    </Wrapper>
  );
};
