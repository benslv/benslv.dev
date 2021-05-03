import React from "react";
import styled from "styled-components";

import { TextLink } from "../TextLink";
import { Emoji } from "../Emoji";

import { nav } from "../../content/config";

const Wrapper = styled.div`
  padding: var(--font-size-lg);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Nav = styled.nav`
  display: flex;
  gap: var(--font-size-md);
  align-items: center;
`;

const NavLink = styled(TextLink)`
  color: var(--color-accent);
  border: 0;

  background-color: var(--color-accent-20);
  
  padding: calc(0.5 * var(--font-size-base)) var(--font-size-base);
  border-radius: var(--border-radius);

  box-shadow: var(--box-shadow-light);

  transition: background-color 0.175s var(--easing), color 0.175s var(--easing);

  &:hover {
    border: 0;

    color: var(--color-text);
    background-color: var(--color-card-background);
  }
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Emoji emoji="👋" size="48px" style="" />
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
};
