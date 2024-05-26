import { useLoaderData } from "@remix-run/react";

import Isbn from "@library-pals/isbn";
import { Link } from "@remix-run/react";
import { CurrentBook } from "~/components/CurrentBook";
import { getReader } from "~/models/reader.server";
import { CurrentTrackPlayer } from "./resources.now-playing";

export async function loader() {
	const reader = getReader();
	const sites = await reader.collections.blogroll.all();

	const sitesWithFavicon = sites.map((site) => ({
		slug: site.slug,
		entry: {
			...site.entry,
			favicon: `https://s2.googleusercontent.com/s2/favicons?domain=${site.entry.url}&sz=16`,
		},
	}));

	const isbn = new Isbn();

	const book = await isbn.resolve("9781399613385");

	return { sites: sitesWithFavicon, currentBook: book };
}

export default function Page() {
	const { currentBook } = useLoaderData<typeof loader>();
	return (
		<>
			<h1 className="mb-4 font-handwriting text-3xl text-zinc-800">Now ⏱</h1>
			<p>
				What am I up to? I'll try and update my{" "}
				<Link
					to="https://nownownow.com/about"
					target="_blank"
					className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
					/now page
				</Link>{" "}
				with things I'm currently trying, learning, enjoying etc.
			</p>
			<div className="flex">
				<div className="flex flex-col items-center gap-y-2">
					<CurrentTrackPlayer />
					<p className="text-sm font-medium uppercase text-zinc-500">
						Listening to
					</p>
				</div>
				<div className="flex flex-col items-center gap-y-2">
					<CurrentBook book={currentBook} />
					<p className="text-sm font-medium uppercase text-zinc-500">Reading</p>
				</div>
			</div>
			<hr />
		</>
	);
}
