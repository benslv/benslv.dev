import { json } from "@remix-run/node";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import rehypeStarryNight from "rehype-starry-night";
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

const POSTS_PATH = path.join(process.cwd(), "app", "content", "posts");

export function getAllPostEntries(): Entry[] {
	const rawPosts = import.meta.glob("../content/posts/*.mdx", { eager: true });

	const posts = Object.entries(rawPosts).map<Entry>((post) => {
		const slug = v.parse(
			v.string(),
			post[0].split("/").at(-1)?.replace(".mdx", ""),
		);

		const frontmatter = v.parse(FrontmatterSchema, post[1]).frontmatter;

		return { slug, ...frontmatter };
	});

	const sortedAndPublished = posts
		.filter((post) => post.published || process.env.SHOW_DRAFT_POSTS)
		.sort((a, b) => b.publishedDate!.getTime() - a.publishedDate!.getTime());

	return sortedAndPublished;
}

export async function getPostContent(slug: string) {
	const fileName = `${slug}.mdx`;
	const filePath = path.join(POSTS_PATH, fileName);

	if (!fs.existsSync(filePath)) {
		throw json("Not Found", { status: 404 });
	}

	const file = fs.readFileSync(filePath, "utf-8");

	const { code, frontmatter } = await bundleMDX({
		source: file,
		mdxOptions(options) {
			options.rehypePlugins = [
				...(options.rehypePlugins ?? []),
				rehypeStarryNight,
			];
			return options;
		},
	});

	return { code, frontmatter };
}
