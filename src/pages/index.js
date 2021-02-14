import React from "react";
import { IconContext } from "phosphor-react";

// Import components
import Layout from "../components/Layout";

// Import sections
import HeroSection from "../components/sections/Hero";

// Import theme
import theme from "../theme";
import AboutSection from "../components/sections/About";
const { colors } = theme;

const IndexPage = () => {
	return (
		// <IconContext.Provider
		// 	value={{
		// 		color: `${colors.text.body}`,
		// 		size: 24,
		// 		weight: "bold",
		// 		mirrored: false,
		// 	}}>
		<Layout>
			<HeroSection />
			<AboutSection />
		</Layout>
		// </IconContext.Provider>
	);
};

export default IndexPage;
