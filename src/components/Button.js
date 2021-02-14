import React from "react";
import styled from "styled-components";

import theme from "../theme";
const { buttons } = theme;

const StyledButton = styled.a`
	text-decoration: none;
	padding: 0.8em 1.6em;
	font-weight: 700;
	border-radius: 8px;
	background: ${buttons.primary.background};
	color: ${buttons.primary.color};
	outline: none;

	transition: all 0.15s cubic-bezier(.21,.63,.32,.98);

	:hover {
		background: ${buttons.hover.background};
		color: ${buttons.hover.color}
	}	
`;

const Button = ({ to, text }) => {
	return (
		<StyledButton href={to}>
			{text}
		</StyledButton>
	);
};

export default Button;
