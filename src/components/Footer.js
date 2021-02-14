import React from "react";
import styled from "styled-components";

import Container from "./Container";

import theme from "../theme";
const { colors, fonts } = theme;

const footerItems = {
	Social: [
		{ text: "Twitter", url: "https://twitter.com/bensilverman_" },
		{ text: "Instagram", url: "https://instagram.com/ben.silverman" },
		{ text: "LinkedIn", url: "https://linkedin.com/in/ben-silverman" },
	],
	Personal: [
		{ text: "Blog", url: "#" },
		{ text: "Picrews", url: "#" },
	],
	"Everything Else": [{ text: "© Ben Silverman, 2021" }],
};

const StyledFooter = styled.footer`
	padding: 3em 0 1em 0;
`;

const FooterSection = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

const FooterList = styled.ul`
	list-style: none;
	padding: 0;
	text-align: left;
	line-height: 1.75;

	font-size: ${fonts.sizes.small};

	:before {
		content: attr(aria-label);
		color: ${colors.text.header};
		font-weight: ${fonts.weights.bold};
		text-transform: uppercase;
	}
`;

const FooterLink = styled.a`
	color: ${colors.text.body};
	outline: none;
	text-decoration: none;
`

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FooterSection>
					{footerItems &&
						Object.keys(footerItems).map((item) => (
							<div>
								<FooterList aria-label={item}>
									{footerItems[item].map(({ text, url }) => (
										<li>
											<FooterLink href={url}>{text}</FooterLink>
										</li>
									))}
								</FooterList>
							</div>
						))}
				</FooterSection>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
