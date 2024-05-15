import { createReader } from "@keystatic/core/reader";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import keystaticConfig from "../../keystatic.config";

export async function loader() {
	// 1. Create a reader
	const reader = createReader(process.cwd(), keystaticConfig);
	// 2. Read the "Posts" collection
	const posts = await reader.collections.posts.all();

	return json({ posts });
}

export default function Page() {
	const { posts } = useLoaderData<typeof loader>();

	return (
		<>
			<h1 className="mb-4 font-handwriting text-3xl text-zinc-800">Posts 📝</h1>
			<ul className="space-y-2">
				{posts.map((post) => (
					<li key={post.slug}>
						<Link to={`/posts/${post.slug}`} className="flex justify-between">
							<span className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
								{post.entry.title}
							</span>
							<span className="tabular-nums text-zinc-400">
								{formatPostDate(post.entry.publishedDate!)}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

const postDateFormatter = new Intl.DateTimeFormat("en-GB", {
	dateStyle: "medium",
});

function formatPostDate(date: string) {
	const dateString = new Date(date);

	return postDateFormatter.format(dateString);
}
