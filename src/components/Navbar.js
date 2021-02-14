import React from "react";
import styled from "styled-components";
import { House, Pen, Newspaper } from "phosphor-react";

import Button from "./Button";
import Container from "./Container";

import theme from "../theme";
const { colors } = theme;

const links = [
	{ name: "Home", to: "/", icon: <House weight="bold" /> },
	{ name: "Projects", to: "/projects", icon: <Pen weight="bold" /> },
	{ name: "Blog", to: "/blog", icon: <Newspaper weight="bold" /> },
];

const StyledNavbar = styled.nav`
	margin: 0;
	padding: 0.8em 0;

	margin-bottom: 2em;

	width: 100%;

	background-color: ${colors.background};

	::after {
		content: "";
		width: 100%;
		display: block;
		border: 1px solid ${colors.accent20};
		margin-top: 0.8em;
	}
`;

const StyledNavbarNav = styled.div`
	display: flex;
	justify-content: center;
`;

const Navbar = () => (
	<StyledNavbar>
		<Container>
			<StyledNavbarNav>
				{links &&
					links.map(({name, icon}) => (
						<Button text={name} icon={icon}/>
					))}
			</StyledNavbarNav>
		</Container>
	</StyledNavbar>
);

export default Navbar;
