import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BiHomeAlt, BiMenu, BiX } from "react-icons/bi";

import { TextLink } from "./TextLink";

import { color, breakpoint, font } from "../theme/config";

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${color.background};

  padding: 1.5em 1em;
  margin-bottom: 1em;
  width: 100%;

  ${breakpoint.md} {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    padding: 2em 3em;
    margin-bottom: 4em;
  }
`;

const StyledNavLink = styled(TextLink)`
  text-decoration: none;
  /* color: ${color.text}; */
  font-weight: ${font.weight.semibold};
  position: relative;
  outline: none;
  z-index: 1;

  margin: 0.5em 0;

  &:first-child {
    margin-top: 1em;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${breakpoint.md} {
    margin: 0 1em;

    transition: color 0.15s ease;

    &:first-child {
      margin-top: auto;
    }

    &:last-child {
      margin-right: 0;
      margin-bottom: auto;
    }

    &:hover {
      color: ${color.accent};
    }
  }
`;

const StyledNavBrand = styled(TextLink)`
  display: flex;
  align-items: center;

  color: ${color.heading};
`;

const StyledNavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${breakpoint.md} {
    margin: 0;
    margin-right: auto;
    width: auto;
  }
`;

const StyledNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;

  ${breakpoint.md} {
    display: flex;
    flex-direction: row;
  }
`;

const StyledMenuToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoint.md} {
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
  return (
    <StyledNav isOpen={isOpen}>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
    </StyledNav>
  );
};

const MenuToggle = ({ toggle, isOpen }) => (
  <StyledMenuToggle onClick={toggle}>
    {isOpen ? <BiX style={{ fontSize: 28 }} /> : <BiMenu style={{ fontSize: 28 }} />}
  </StyledMenuToggle>
);

const NavHeader = ({ toggle, isOpen }) => (
  <StyledNavHeader>
    <StyledNavBrand to="/">
      <BiHomeAlt style={{ fontSize: 28, fontWeight: 700 }} />
    </StyledNavBrand>
    <MenuToggle toggle={toggle} isOpen={isOpen} />
  </StyledNavHeader>
);

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

NavHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
