import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
	plugins: [
		require("@tailwindcss/typography"),
		plugin(({ addVariant }) => {
			addVariant(
				"prose-inline-code",
				'&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
			);
		}),
	],
} satisfies Config;
