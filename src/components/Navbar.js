import React from "react";
import styled from "styled-components";

import Button from "./Button";

import theme from "../theme";
const { colors } = theme;

const links = [
	{ name: "Home", to: "/" },
	{ name: "Projects", to: "/projects" },
	{ name: "Blog", to: "/blog" },
];

const StyledNavbar = styled.nav`
	margin: 0;
	padding: 0.8em 0;

	width: 100%;

	background-color: ${colors.background};
`;

const StyledNavbarNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  (Button)
`

const Navbar = () => (
	<StyledNavbar>
		<StyledNavbarNav>
			{links && links.map((link) => <li><Button text={link.name}/></li>)}
		</StyledNavbarNav>
	</StyledNavbar>
);

export default Navbar;
