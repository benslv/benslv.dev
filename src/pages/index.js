import React from "react";

import Layout from "../components/Layout";
import Button from "../components/Button";



const IndexPage = () => {
	return (
		<Layout>
			<h1>Hello, world!</h1>
			<Button to="#" text="Hello" />
			<Button to="#" text="Hello" />
			<p>Lorem ipsum sit dolor amet</p>
		</Layout>
	);
};

export default IndexPage;
