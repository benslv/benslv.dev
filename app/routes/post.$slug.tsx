import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { bundleMDX } from "mdx-bundler";
import { z } from "zod";

import { getPostSource } from "~/models/blog.server";

export async function loader({ params }: LoaderArgs) {
	const slug = z.string().parse(params.slug);

	const source = getPostSource(slug);

	const post = await bundleMDX({
		source,
	});

	return { post: null, source };
}

export default function Page() {
	const { post, source } = useLoaderData<typeof loader>();

	// const Component = useMemo(() => getMDXComponent(post.code), [post.code]);

	return (
		<div className="bg-white mx-auto mt-8 flex w-full max-w-6xl rounded-xl border p-4 flex-col space-y-6">
			<p>HellO!</p>
			{/* <h1>{post.title}</h1>
			<Component /> */}
			{source}
		</div>
	);
}
