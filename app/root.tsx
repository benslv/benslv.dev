import type { LinksFunction } from "@remix-run/node";
import {
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { ReactNode } from "react";

import GitHub from "./components/icons/GitHub";
import Goodreads from "./components/icons/Goodreads";
import LinkedIn from "./components/icons/LinkedIn";
import Twitter from "./components/icons/Twitter";
import tailwind from "./tailwind.css?url";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: tailwind },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Kalam:wght@400&display=swap",
	},
	{
		rel: "icon",
		href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
	},
];

export function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full bg-white font-sans font-normal text-zinc-600">
				<div className="mx-4 my-2 mt-8 max-w-screen-sm md:mx-auto md:mt-16">
					<div className="group ml-auto flex w-fit gap-x-2 text-zinc-400 transition-colors hover:text-zinc-300">
						<Link
							to="https://linkedin.com/in/ben-silverman"
							target="_blank"
							className="transition-colors hover:text-zinc-400">
							<LinkedIn />
						</Link>
						<Link
							to="https://github.com/benslv"
							target="_blank"
							className="transition-colors hover:text-zinc-400">
							<GitHub />
						</Link>
						<Link
							to="https://twitter.com/bensilverman_"
							target="_blank"
							className="transition-colors hover:text-zinc-400">
							<Twitter />
						</Link>
						<Link
							to="https://www.goodreads.com/benslv"
							target="_blank"
							className="transition-colors hover:text-zinc-400">
							<Goodreads />
						</Link>
					</div>
					{children}
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
