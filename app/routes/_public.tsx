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
			<header className="w-full border-b border-gray-200 bg-gray-50 p-4">
				<div className="mx-auto flex max-w-screen-sm ">
					<nav>
						<ul className="flex gap-x-4 text-sm font-medium text-zinc-400">
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
				</div>
			</header>
			<div className="w-full flex-1 bg-white py-8">
				<Outlet />
			</div>
			<footer className="w-full border-t border-gray-200 bg-gray-50 p-4">
				<div className="mx-auto flex max-w-screen-sm justify-between">
					<NowPlaying currentTrackPromise={currentTrackPromise} />
					<SocialIcons />
				</div>
			</footer>
		</div>
	);
}
