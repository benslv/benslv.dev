import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, V2_MetaFunction } from "@vercel/remix";

import styles from "./tailwind.css";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Ben Silverman" },
		{ name: "charset", content: "utf-8" },
		{ name: "viewport", content: "width=device-width,initial-scale=1" },
	];
};

export const links: LinksFunction = () => {
	return [
		// {
		// 	rel: "stylesheet",
		// 	href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
		// },
		{ rel: "stylesheet", href: styles },
	];
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="subpixel-antialiased">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
