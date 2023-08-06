type Job = {
	role: string;
	company: string;
	description: string;
	image: string;
	link: string;
	start: string;
	end: string;
};

const jobs: Job[] = [
	{
		role: "Software Development Engineer",
		company: "Warner Bros. Discovery",
		description:
			"Developing the Max streaming app for connected devices with high-performance web technologies and frameworks like Solid and LightningJS.",
		image: "/images/wbd.png",
		link: "https://wbd.com/",
		start: "2022",
		end: "present",
	},
	{
		role: "Software Development Intern",
		company: "Arm Ltd.",
		description:
			"Created React applications for Arm Developer 2.0 and utilised the Azure platform to improve backend services across the Arm site.",
		image: "/images/arm.png",
		link: "https://arm.com/",
		start: "2020",
		end: "2021",
	},
];

export default jobs;
