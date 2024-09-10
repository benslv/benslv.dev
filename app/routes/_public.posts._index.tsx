// import { getReader } from "~/models/reader.server";

import { Link, useLoaderData } from "@remix-run/react";
import * as v from "valibot";

const FrontmatterSchema = v.object({
	frontmatter: v.object({
		title: v.string(),
		published: v.boolean(),
		publishedDate: v.optional(
			v.pipe(
				v.string(),
				v.transform((input) => new Date(input)),
			),
		),
	}),
});

type Frontmatter = v.InferOutput<typeof FrontmatterSchema>["frontmatter"];

type Entry = Frontmatter & { slug: string };

export async function loader() {
	const rawPosts = import.meta.glob("../content/posts/*.mdx", { eager: true });

	const posts = Object.entries(rawPosts).reduce((acc, post) => {
		const slug = v.parse(
			v.string(),
			post[0].split("/").at(-1)?.replace(".mdx", ""),
		);

		const frontmatter = v.parse(FrontmatterSchema, post[1]).frontmatter;

		acc.push({ slug, ...frontmatter });

		return acc;
	}, [] as Entry[]);

	const sortedAndPublished = posts
		.filter((post) => post.published || process.env.SHOW_DRAFT_POSTS)
		.sort((a, b) => b.publishedDate!.getTime() - a.publishedDate!.getTime());

	return { posts: sortedAndPublished };
}

export default function Page() {
	const { posts } = useLoaderData<typeof loader>();

	return (
		<>
			<h1 className="mb-4  text-3xl text-zinc-800">Posts 📝</h1>
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
		</>
	);
}
