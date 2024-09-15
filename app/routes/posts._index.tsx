import { Link, useLoaderData } from "@remix-run/react";

import { Container } from "~/components/Container";
import { getAllPostEntries } from "~/models/posts.server";

export async function loader() {
	return { posts: getAllPostEntries() };
}

export default function Page() {
	const { posts } = useLoaderData<typeof loader>();

	return (
		<Container>
			<h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-800">
				Posts
			</h1>
			<ul className="space-y-2">
				{posts.map((post) => (
					<li key={post.slug} className="flex justify-between gap-x-2">
						<Link
							to={`/posts/${post.slug}`}
							prefetch="intent"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							<span className="">{post.title}</span>
						</Link>
						<span className="text-nowrap tabular-nums text-zinc-400">
							{new Date(post.publishedDate!).toLocaleString("en-GB", {
								dateStyle: "medium",
							})}
						</span>
					</li>
				))}
			</ul>
		</Container>
	);
}
