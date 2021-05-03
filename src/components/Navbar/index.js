import React from "react";
import styled from "styled-components";

import { TextLink } from "../TextLink";

import { nav } from "../../content/config";
import { Emoji } from "../Emoji";

const Wrapper = styled.div`
  padding: var(--font-size-lg);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Nav = styled.nav`
  display: flex;
  gap: var(--font-size-lg);
  align-items: center;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Emoji emoji="👋" size="48px" style="" />
      <Nav>{nav && nav.map(({ name, to }) => <TextLink to={to}>{name}</TextLink>)}</Nav>
    </Wrapper>
  );
};
