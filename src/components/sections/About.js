import React from "react";
import styled from "styled-components";

import Section from "../Section";

import theme from "../../theme";
const { colors, fonts } = theme;

const skills = {
	Languages: ["Javascript", "Python", "HTML/CSS"],
	Frameworks: ["React", "Gatsby", "Express"],
	Tools: ["Linux", "Git", "Figma"],
};

const SkillsSection = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

const SkillsList = styled.ul`
	list-style: none;
	padding: 0;
	text-align: left;
	line-height: 1.75;

	:before {
		content: attr(aria-label);
		color: ${colors.accent};
		font-weight: ${fonts.weights.bold};
	}
`;

const AboutSection = () => (
	<Section title="About Me" emoji="📋">
		<p>
			Hi! I'm Ben, a second year Computer Science student at the University of
			York. I built this website to showcase the work I've been doing recently
			and to keep my skills web development skills warm.
		</p>
		<p>
			Outside of my studies, I usually spend my time programming, reading or
			playing in the University Jazz and Concert bands!
		</p>
		<SkillsSection>
			{skills &&
				Object.keys(skills).map((skill) => (
					<div>
						<SkillsList aria-label={skill}>
							{skills[skill].map((item) => (
								<li>{item}</li>
							))}
						</SkillsList>
					</div>
				))}
		</SkillsSection>

		<SkillsSection></SkillsSection>
	</Section>
);

export default AboutSection;
