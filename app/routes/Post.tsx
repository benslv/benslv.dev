import { DocumentRenderer } from "@keystatic/core/renderer";
import { useLoaderData } from "@remix-run/react";
import { loader } from "./posts.$slug";

export default function Post() {
	const { post } = useLoaderData<typeof loader>();
	return (
		<DefaultLayout>
			<h1>{post.title}</h1>
			<DocumentRenderer document={post.content} />
		</DefaultLayout>
	);
}
