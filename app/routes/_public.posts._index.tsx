import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getReader } from "~/models/reader.server";

export async function loader() {
	const posts = await getReader().collections.posts.all();

	const publishedPosts = posts
		.filter((post) => post.entry.published || process.env.SHOW_DRAFT_POSTS)
		.sort((a, b) => {
			return (
				new Date(b.entry.publishedDate!).getTime() -
				new Date(a.entry.publishedDate!).getTime()
			);
		});

	return json({ posts: publishedPosts });
}

export default function Page() {
	const { posts } = useLoaderData<typeof loader>();

	return (
		<>
			<h1 className="mb-4 font-handwriting text-3xl text-zinc-800">Posts 📝</h1>
			<ul className="space-y-2">
				{posts.map((post) => (
					<li key={post.slug} className="flex justify-between gap-x-2">
						<Link
							to={`/posts/${post.slug}`}
							prefetch="intent"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							<span className="">{post.entry.title}</span>
						</Link>
						<span className="text-nowrap tabular-nums text-zinc-400">
							{new Date(post.entry.publishedDate!).toLocaleString("en-GB", {
								dateStyle: "medium",
							})}
						</span>
					</li>
				))}
			</ul>
		</>
	);
}
