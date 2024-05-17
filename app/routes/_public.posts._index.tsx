import { createReader } from "@keystatic/core/reader";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import keystaticConfig from "../../keystatic.config";

import fs from "fs";
import path from "path";

export async function loader() {
	// 1. Create a reader
	const reader = createReader(process.cwd(), keystaticConfig);

	console.log(fs.readdirSync(path.join(process.cwd(), "app", "content/posts")));

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
						<Link
							to={`/posts/${post.slug}`}
							className="flex justify-between gap-x-2">
							<span className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
								{post.entry.title}
							</span>
							<span className="text-nowrap tabular-nums text-zinc-400">
								{new Date(post.entry.publishedDate!).toLocaleString("en-GB", {
									dateStyle: "medium",
								})}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
