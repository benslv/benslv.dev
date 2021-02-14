import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import "fontsource-inter/400.css";
import "fontsource-inter/700.css";

import Navbar from "./Navbar";

import theme from "../theme";
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

const Container = styled.div`
	max-width: 540px;
	margin: 0 auto;
`;

const Layout = ({ title, children }) => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<GlobalStyle />
			<Navbar />
			<Container>{children}</Container>
			{/* Footer */}
		</React.Fragment>
	);
};

export default Layout;
