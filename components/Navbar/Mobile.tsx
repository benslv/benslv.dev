import React, { useState } from "react";
import { styled } from "../../stitches.config";
import { BiChevronDown } from "react-icons/bi";

import { UnstyledLink } from "../UnstyledLink";
import { Emoji } from "../Emoji";

import { nav } from "content/config";
import { blueBox } from "components";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "$2 calc(1.5* $2)",

  backgroundColor: "$background",

  "@md": {
    display: "none",
  },

  zIndex: 1,
});

const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
  flexDirection: "column",

  position: "absolute",

  padding: "$1",

  background: "$cardBackground",
  border: "1px solid $cardBorder",
  borderRadius: "$1",
  boxShadow: "$light",

  transition: "top 0.3s cubic-bezier(.51,.28,0,1.29)",

  variants: {
    state: {
      shown: {
        top: 90,
      },
      hidden: {
        top: -200,
      },
    },
  },

  defaultVariants: {
    state: "hidden",
  },

  zIndex: 2,
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

const NavWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",

  gap: "$1",
});

const MenuButton = styled("button", blueBox, {
  display: "flex",

  fontSize: "$3",

  padding: "calc(0.5 * $0)",

  border: "$cardBorder",

  transition: "transform 0.3s cubic-bezier(.51,.28,0,1.29)",

  variants: {
    state: {
      shown: {
        transform: "rotate(180deg)",
      },
      hidden: {
        transform: "rotate(0deg)",
      },
    },
  },
});

export const Mobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Emoji emoji="👋" size="48px" />
      <NavWrapper>
        <Nav state={isOpen ? "shown" : "hidden"}>
          {nav &&
            nav.map(({ name, to }, i) => (
              <NavLink to={to} key={i}>
                {name}
              </NavLink>
            ))}
        </Nav>
        <MenuButton onClick={() => setIsOpen((prev) => !prev)} state={isOpen ? "shown" : "hidden"}>
          <BiChevronDown />
        </MenuButton>
      </NavWrapper>
    </Wrapper>
  );
};
