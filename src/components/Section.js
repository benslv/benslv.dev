import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
	margin-bottom: 3em;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Section = ({ title, emoji, children }) => (
	<StyledSection>
		{title && <h2>{emoji} {title}</h2>}
		{children}
	</StyledSection>
);

export default Section;
