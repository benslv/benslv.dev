import React from "react";
import { IconContext } from "phosphor-react";

import Layout from "../components/Layout";
import Button from "../components/Button";

import theme from "../theme";
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
				<h1>Hello, world!</h1>
				<Button to="#" text="Hello there " />
				<Button to="#" text="Hello" />
				<p>Lorem ipsum sit dolor amet</p>
			</Layout>
		// </IconContext.Provider>
	);
};

export default IndexPage;
