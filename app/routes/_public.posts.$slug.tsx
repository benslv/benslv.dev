// app/routes/posts.$slug.tsx
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData, useRouteError } from "@remix-run/react";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import path from "path";
import { useMemo } from "react";
import rehypePrism from "rehype-prism-plus";
import { fileURLToPath } from "url";
import { Container } from "~/components/Container";

import { Prose } from "~/components/Prose";
import "~/styles/prism-one-light.css";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loader({ params }: LoaderFunctionArgs) {
	const slug = params.slug!;
	const fileName = `${slug}.mdx`;
	const filePath = path.join(__dirname, "..", "content", "posts", fileName);

	if (!fs.existsSync(filePath)) {
		throw json("Not Found", { status: 404 });
	}

	const file = fs.readFileSync(filePath, "utf-8");

	const { code, frontmatter } = await bundleMDX({
		source: file,
		mdxOptions(options) {
			options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];
			return options;
		},
	});
	return { frontmatter, code };
}

export default function Post() {
	const { frontmatter, code } = useLoaderData<typeof loader>();

	const RenderedMDX = useMemo(() => getMDXComponent(code), [code]);

	return (
		<Container>
			<Prose>
				<h1>{frontmatter.title}</h1>
				<RenderedMDX />
			</Prose>
		</Container>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	return (
		<Prose>
			<h1>Post Not Found ⁉️</h1>
			<p>
				There doesn't seem to be a post with that title. Maybe double-check the
				URL is correct?
			</p>
			<Link to=".." relative="path">
				View All Posts
			</Link>
		</Prose>
	);
}
