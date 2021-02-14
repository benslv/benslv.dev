import React from "react";
import styled from "styled-components";

import Container from "./Container";

const StyledFooter = styled.footer`
	background-color: red;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<h1>Hello</h1>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
