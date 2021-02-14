import React from "react";
import { Chat } from "phosphor-react";

import Button from "../Button";
import Section from "../Section";

const HeroSection = () => (
	<Section>
		<h1>Hi, I'm Ben!</h1>
		<p style={{ fontSize: "18px" }}>
			I'm a third-year Computer Science student at the University of York,
			currently on placement at Arm.
		</p>
		<Button icon={<Chat weight="bold" />} text="Get in touch!" />
	</Section>
);

export default HeroSection;
