import fs from "fs";
import matter from "gray-matter";
import path from "path";
import z from "zod";

export const postSchema = z.object({
	date: z.string(),
	title: z.string(),
	description: z.string(),
	published: z.coerce.boolean(),
	tags: z.array(z.string()),
	slug: z.string().nonempty(),
	content: z.string(),
});

type Post = z.infer<typeof postSchema>;

export function getAllPosts() {
	const cwd = process.cwd();
	const postsFolder = path.join(cwd, "app", "content", "posts");

	const postUrls = fs.readdirSync(postsFolder);

	const posts: Post[] = postUrls
		.map((slug) => {
			const filePath = path.join(postsFolder, slug);
			const file = fs.readFileSync(filePath, { encoding: "utf-8" });

			const { data, content } = matter(file, { excerpt: true });

			return postSchema.parse({
				...data,
				content,
				slug: slug.replace(".mdx", ""),
			});
		})
		.filter((data) => !!data.published);

	return posts;
}

export function getPostSource(slug: string) {
	const cwd = process.cwd();
	const postsFolder = path.join(cwd, "app", "content", "posts");

	const postPath = path.join(postsFolder, slug + ".mdx");

	const postData = fs.readFileSync(postPath, { encoding: "utf-8" });

	return postData;
}
