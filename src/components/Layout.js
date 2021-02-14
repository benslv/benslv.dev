import React from "react";
import { Helmet } from "react-helmet";
import "fontsource-inter/400.css";
import "fontsource-inter/700.css";

// Import components
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

import GlobalStyle from "../GlobalStyle";

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
