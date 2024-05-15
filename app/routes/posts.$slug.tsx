// app/routes/posts.$slug.tsx
import { createReader } from "@keystatic/core/reader";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { DocumentRenderer } from "@keystatic/core/renderer";
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

	return json({ post });
}

export default function Post() {
	const { post } = useLoaderData<typeof loader>();
	return (
		<DefaultLayout>
			<h1>{post.title}</h1>
			<DocumentRenderer document={post.body} />
		</DefaultLayout>
	);
}
