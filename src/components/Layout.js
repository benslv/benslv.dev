import React from "react";
import { Helmet } from "react-helmet";
import "fontsource-inter/400.css";
import "fontsource-inter/700.css";

// Import components
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

import GlobalStyle from "../GlobalStyle";

// Styles for applying a sticky footer
const styles = {
	site: {
		display: "flex",
		"min-height": "100vh",
		"flex-direction": "column",
	},
	content: {
		flex: 1,
	},
};

const Layout = ({ title, children }) => {
	return (
		<div style={styles.site}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<GlobalStyle />
			<Navbar />
			<Container style={styles.content}>{children}</Container>
			<Footer />
		</div>
	);
};

export default Layout;
