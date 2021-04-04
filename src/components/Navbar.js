import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { BiMenu, BiX } from "react-icons/bi";

import { color, breakpoint, font } from "@theme/config";

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${color.background};

  ${breakpoint.lg} {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${color.text};
  font-weight: ${font.weight.bold};
  position: relative;
  outline: none;
  z-index: 1;

  &:last-child {
    margin-bottom: 0;
  }

  ${breakpoint.lg} {
    &:last-child {
      margin-right: 0;
      margin-bottom: auto;
    }

    transition: color 0.15s ease;

    &:hover::after {
      color: ${color.accent};
    }
  }
`;

const StyledNavBrand = styled(Link)``;

const StyledNavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${breakpoint.lg} {
    margin: 0;
    margin-right: auto;
    width: auto;
  }
`;

const StyledNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;

  ${breakpoint.lg} {
    display: flex;
    flex-direction: row;
  }
`;

const StyledMenuToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoint.lg} {
    display: none;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar id="navbar">
      <NavHeader toggle={toggle} isOpen={isOpen} />
      <Nav isOpen={isOpen} />
    </StyledNavbar>
  );
};

const Nav = ({ isOpen }) => {
  return <StyledNav isOpen={isOpen}>
    <StyledNavLink to="/about">About</StyledNavLink>
  </StyledNav>;
};

const MenuToggle = ({ toggle, isOpen }) => (
  <StyledMenuToggle onClick={toggle}>
    {isOpen ? <BiX style={{ fontSize: 24 }} /> : <BiMenu style={{ fontSize: 24 }} />}
  </StyledMenuToggle>
);

const NavHeader = ({ toggle, isOpen }) => (
  <StyledNavHeader>
    <StyledNavBrand to="/">Yordevs</StyledNavBrand>
    <MenuToggle toggle={toggle} isOpen={isOpen} />
  </StyledNavHeader>
);
