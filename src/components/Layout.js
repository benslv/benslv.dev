import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import "fontsource-inter/400.css";
import "fontsource-inter/700.css";

import Navbar from "./Navbar";
import Container from "./Container";

import theme from "../theme";
import Footer from "./Footer";
const { colors } = theme;

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${colors.background};
		color: ${colors.text.body};
		margin: 0;
		padding: 0;
		font-family: "Inter", sans-serif;
		font-weight: 400;
	}
`;

const Layout = ({ title, children }) => {
	return (
		<React.Fragment className="site">
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<GlobalStyle />
			<Navbar />
			<Container className="content">{children}</Container>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
