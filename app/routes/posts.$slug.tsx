// app/routes/posts.$slug.tsx
import { createReader } from "@keystatic/core/reader";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";

import { DefaultLayout } from "~/components/DefaultLayout";
import keystaticConfig from "../../keystatic.config";

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
	});

	return json({ post, code });
}

export default function Post() {
	const { post, code } = useLoaderData<typeof loader>();

	const RenderedMDX = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<DefaultLayout>
			<h1>{post.title}</h1>
			<RenderedMDX />
		</DefaultLayout>
	);
}
