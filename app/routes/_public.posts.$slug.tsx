// app/routes/posts.$slug.tsx
import { Link, useRouteError } from "@remix-run/react";

import { Prose } from "~/components/Prose";
import "~/styles/prism-one-light.css";

// export async function loader({ params }: LoaderFunctionArgs) {
// 	const reader = getReader();
// 	const slug = params.slug;
// 	if (!slug) throw json("Not Found", { status: 404 });
// 	const post = await reader.collections.posts.read(
// 		slug,
// 		// Retrieve the content data directly, instead
// 		// of getting an async `content()` function
// 		{ resolveLinkedFiles: true },
// 	);
// 	if (!post) throw json("Not Found", { status: 404 });

// 	const { code } = await bundleMDX({
// 		source: post.body,
// 		mdxOptions(options) {
// 			options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];

// 			return options;
// 		},
// 	});

// 	return json({ post, code });
// }

export default function Post() {
	// const { post, code } = useLoaderData<typeof loader>();

	// const RenderedMDX = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<Prose>
			<p>Title</p>
			{/* <h1>{post.title}</h1> */}
			{/* <RenderedMDX /> */}
		</Prose>
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
