// app/routes/posts.$slug.tsx
import { createReader } from "@keystatic/core/reader";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";
import rehypePrism from "rehype-prism-plus";

import { DefaultLayout } from "~/components/DefaultLayout";
import keystaticConfig from "../../keystatic.config";

import "~/styles/prism-one-light.css";

export async function loader({ params }: LoaderFunctionArgs) {
	const reader = createReader(process.cwd(), keystaticConfig);
	const slug = params.slug;
	if (!slug) throw json("Not Found", { status: 404 });
	const post = await reader.collections.posts.read(
		slug,
		// Retrieve the content data directly, instead
		// of getting an async `content()` function
		{ resolveLinkedFiles: true },
	);
	if (!post) throw json("Not Found", { status: 404 });

	const { code } = await bundleMDX({
		source: post.body,
		mdxOptions(options) {
			options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];

			return options;
		},
	});

	return json({ post, code });
}

export default function Post() {
	const { post, code } = useLoaderData<typeof loader>();

	const RenderedMDX = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<DefaultLayout>
			<div className="prose-blockquote: prose prose-headings:font-handwriting prose-headings:font-medium prose-h1:mb-4 prose-h1:text-3xl prose-h2:mb-2 prose-h2:mt-6 prose-h2:text-2xl prose-h3:mt-4 prose-p:mb-1 prose-p:mt-2 prose-blockquote:-rotate-[0.5deg] prose-blockquote:rounded prose-blockquote:border prose-blockquote:border-l-4 prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:text-zinc-500 prose-pre:my-4 prose-pre:border prose-inline-code:rounded prose-inline-code:bg-blue-100 prose-inline-code:py-1 prose-inline-code:font-normal prose-inline-code:text-blue-500">
				<h1>{post.title}</h1>
				<RenderedMDX />
			</div>
		</DefaultLayout>
	);
}
