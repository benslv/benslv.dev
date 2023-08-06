import { Link, useLoaderData } from "@remix-run/react";

import { Section } from "~/components/Section";
import jobs from "~/content/jobs";
import projects from "~/content/projects";
import { getAllPosts } from "~/models/blog.server";

export async function loader() {
	const posts = getAllPosts();

	return { posts };
}

export default function Index() {
	const { posts } = useLoaderData<typeof loader>();
	return (
		<div className="mx-auto mt-8 flex w-full max-w-xl flex-col space-y-6">
			<div className="flex items-center space-x-6">
				<img
					src="/images/profile.jpg"
					alt="profile"
					className="h-36 w-36 self-center rounded-full border border-gray-200 shadow-sm"
				/>
				<div>
					<h1 className="text-2xl font-bold text-gray-900">
						Ben Silverman
					</h1>
					<p className="text-lg text-gray-600">
						Software Developer based in London{" "}
						<img
							src="https://emojicdn.elk.sh/🇬🇧"
							width={24}
							height={24}
							className="h-6 w-6"
							alt="UK flag emoji"
						/>
					</p>
				</div>
			</div>
			<Section>
				<div className="flex flex-col space-y-4">
					{jobs.map((job, index) => {
						return (
							<div key={index} className="flex space-x-4">
								<img
									src={job.image}
									width={48}
									height={48}
									alt=""
									className="h-12 w-12 rounded-full"
								/>
								<div>
									<h3 className="mb-1 font-bold text-gray-900">
										{job.role} at{" "}
										<a
											href={job.link}
											target="_blank"
											rel="noreferrer"
											className="text-blue-500 underline decoration-blue-500/50 decoration-2 transition-colors hover:text-blue-400 hover:decoration-blue-500/50"
										>
											{job.company}
										</a>
									</h3>
									<p className="text-sm text-gray-400 font-bold">
										{job.start}-{job.end}
									</p>
									<p className="text-gray-700">
										{job.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</Section>
			<h1 className="font-bold text-xl">My Work</h1>
			<div className="grid grid-cols-4 gap-8 justify-center">
				{projects.map(({ name, href, src, alt }) => {
					return (
						<div key={name}>
							<a href={href} target="_blank" rel="noreferrer">
								<img
									src={src}
									alt={alt}
									className="rounded-2xl shadow shadow-gray-400/40 mb-2"
									draggable="false"
								/>
							</a>
						</div>
					);
				})}
				<div>
					<a
						href="https://github.com/benslv"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/projects/github.png"
							alt="Github logo"
							className="p-8 bg-gray-900 rounded-2xl shadow shadow-gray-400/40 mb-2"
							draggable="false"
						/>
					</a>
				</div>
			</div>
			<Section>
				<div className="flex flex-col gap-y-2">
					{posts.map((post) => {
						return (
							<div key={post.slug}>
								<Link to={`post/${post.slug}`}>
									<h2 className="text-blue-500 font-bold text-lg transition-colors hover:text-blue-400">
										{post.title}
									</h2>
									<p className="text-gray-700">
										{post.description}
									</p>
								</Link>
							</div>
						);
					})}
				</div>
			</Section>
		</div>
	);
}
