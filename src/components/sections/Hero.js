import React from "react";
import { Chat } from "phosphor-react";

import Button from "../Button";


const HeroSection = () => (
	<React.Fragment>
		<h1>Hi, I'm Ben!</h1>
		<p>
			I'm a third-year Computer Science student at the University of York,
			currently on placement at Arm.
		</p>
    <Button icon={<Chat/>} text="Get in touch!" />
	</React.Fragment>
);

export default HeroSection;