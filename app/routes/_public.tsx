import { defer, Link, Outlet, useLoaderData } from "@remix-run/react";

import { NowPlaying } from "~/components/NowPlaying";
import { SocialIcons } from "~/components/SocialIcons";
import { getNowPlaying } from "~/models/nowplaying.server";

export async function loader() {
	return defer({
		currentTrackPromise: getNowPlaying(),
	});
}

export default function PublicLayout() {
	const { currentTrackPromise } = useLoaderData<typeof loader>();

	return (
		<div className="flex h-full flex-col">
			<header className="w-full bg-white px-4">
				<nav className="mx-auto mt-4 flex max-w-screen-sm rounded-full border border-zinc-200 bg-gradient-to-b from-zinc-50 to-zinc-100 px-4 py-2 text-zinc-400 shadow-inner">
					<ul className="flex gap-x-4 text-sm font-medium">
						<li>
							<Link to="/" className="transition-colors hover:text-zinc-500">
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
			<div className="w-full flex-1 bg-white px-4 py-8">
				<Outlet />
			</div>
			<footer className="w-full border-t border-zinc-200 bg-zinc-50 p-4 shadow-inner">
				<div className="mx-auto flex max-w-screen-sm justify-between">
					<NowPlaying currentTrackPromise={currentTrackPromise} />
					<SocialIcons />
				</div>
			</footer>
		</div>
	);
}
