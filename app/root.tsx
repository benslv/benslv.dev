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
				<div className="mx-4 my-2 mt-16 max-w-screen-sm md:mx-auto">
					<div className="group flex justify-end gap-x-2 text-zinc-400 transition-colors hover:text-zinc-300">
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
