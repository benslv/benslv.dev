// app/routes/posts.$slug.tsx
import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData, useRouteError } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import * as v from "valibot";

import { Container } from "~/components/Container";
import { Prose } from "~/components/Prose";
import { getPostContent } from "~/models/posts.server";

import "~/styles/starry-night.css";

export async function loader({ params }: LoaderFunctionArgs) {
	const slug = v.parse(v.string(), params.slug);

	const { frontmatter, code } = await getPostContent(slug);

	return { frontmatter, code };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
	{
		title: data?.frontmatter.title ?? "",
		description: data?.frontmatter.description ?? "",
	},
	{ name: "description", content: data?.frontmatter.description ?? "" },
];

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
		<Container>
			<Prose>
				<h1>Post Not Found ⁉️</h1>
				<p>
					There doesn't seem to be a post with that title. Maybe double-check
					the URL is correct?
				</p>
				<Link to=".." relative="path">
					View All Posts
				</Link>
			</Prose>
		</Container>
	);
}
