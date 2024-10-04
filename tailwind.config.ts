import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontWeight: {
			normal: "400",
			medium: "500",
		},
		fontFamily: {
			sans: ["IBM Plex Sans", "sans-serif"],
		},
		extend: {
			animation: {
				"spin-slow": "spin 4s linear infinite",
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
