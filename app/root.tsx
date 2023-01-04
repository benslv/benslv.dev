import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "New Remix App",
	viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
		},
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
			<body className="mx-4 subpixel-antialiased text-white bg-gray-900 sm:max-w-2xl sm:mx-auto">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
