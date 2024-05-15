import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontWeight: {
			normal: "300",
			medium: "400",
		},
		extend: {
			fontFamily: {
				sans: ["Rubik", "sans-serif"],
				handwriting: ["Kalam", "Rubik", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
