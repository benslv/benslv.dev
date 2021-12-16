import React, { useState } from "react";
import { styled } from "../../stitches.config";
import { BiChevronDown } from "react-icons/bi";

import { UnstyledLink } from "../UnstyledLink";
import { Emoji } from "../Emoji";

import { nav } from "content/config";
import { blueBox, ThemeToggle } from "components";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "$2 calc(1.5* $2)",

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
  flexDirection: "row",
  alignItems: "flex-end",

  gap: "$1",
});

const MenuButton = styled("button", {
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
      <UnstyledLink to="/">
        <Emoji emoji="👋" size="48px" />
      </UnstyledLink>
      <NavWrapper>
        <Nav state={isOpen ? "shown" : "hidden"}>
          {nav &&
            nav.map(({ name, to }, i) => (
              <NavLink to={to} key={i}>
                {name}
              </NavLink>
            ))}
        </Nav>
        <ThemeToggle />
        <MenuButton
          onClick={() => setIsOpen((prev) => !prev)}
          state={isOpen ? "shown" : "hidden"}
          className={blueBox()}
          aria-label={`${isOpen ? "Close" : "Open"} nav menu`}>
          <BiChevronDown />
        </MenuButton>
      </NavWrapper>
    </Wrapper>
  );
};
