import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from "@remix-run/react";
import type { ReactNode } from "react";

import { DefaultLayout } from "./components/DefaultLayout";
import "./tailwind.css";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap",
	},
	{
		rel: "icon",
		href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
	},
];

export function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full bg-zinc-50 font-sans font-normal text-zinc-600">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	return (
		<DefaultLayout>
			<h1 className="mb-2 text-3xl text-zinc-800">Uh oh! 🚨</h1>
			<p>
				Something went a bit wrong there, and the site wasn't quite able to
				handle it.
			</p>
		</DefaultLayout>
	);
}
