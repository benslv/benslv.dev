import type { LinksFunction } from "@remix-run/node";
import {
	defer,
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useRouteError,
} from "@remix-run/react";
import type { ReactNode } from "react";

import { DefaultLayout } from "./components/DefaultLayout";
import { NowPlaying } from "./components/NowPlaying";
import { SocialIcons } from "./components/SocialIcons";
import { getNowPlaying } from "./models/nowplaying.server";
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

export async function loader() {
	return defer({
		currentTrackPromise: getNowPlaying(),
	});
}

export function Layout({ children }: { children: ReactNode }) {
	const { currentTrackPromise } = useLoaderData<typeof loader>();

	return (
		<html lang="en" className="h-full">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full font-sans font-normal text-zinc-600">
				<div className="flex h-full flex-col gap-y-4">
					<header className="my-4 w-full px-4">
						<nav className="mx-auto flex max-w-screen-sm rounded-full border border-white bg-gradient-to-b from-zinc-50 to-zinc-100 px-4 py-2 text-zinc-400 shadow-md ring-1 ring-zinc-200">
							<ul className="flex gap-x-4 text-sm font-medium">
								<li>
									<Link
										to="/"
										className="transition-colors hover:text-zinc-500">
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/posts"
										className="transition-colors hover:text-zinc-500">
										Posts
									</Link>
								</li>
							</ul>
						</nav>
					</header>
					<div className="w-full flex-1 px-4">{children}</div>
					<footer className="w-full border-t border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-4 shadow-inner">
						<div className="mx-auto flex max-w-screen-sm justify-between">
							<NowPlaying currentTrackPromise={currentTrackPromise} />
							<SocialIcons />
						</div>
					</footer>
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
