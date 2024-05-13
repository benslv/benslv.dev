import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Github, Linkedin, Twitter } from "iconoir-react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Ben Silverman" },
		{ name: "description", content: "Ben Silverman's personal site." },
	];
};

export default function Index() {
	return (
		<div className="m-8 flex flex-col gap-4">
			<div className="w-fit rounded-md border bg-white p-8">
				<p className="mb-2">👋</p>
				<h2 className="text-2xl font-medium text-zinc-800">Ben Silverman</h2>
				<p>
					Software Engineer at{" "}
					<a
						href="https://wbd.com"
						target="_blank"
						className="text-blue-500 underline decoration-blue-300 underline-offset-2">
						Warner Bros. Discovery
					</a>
				</p>
				<div className="mt-4 flex flex-col gap-y-2">
					<Link
						to="/about"
						className="underline decoration-zinc-300 underline-offset-2">
						about
					</Link>
					<Link
						to="/posts"
						className="underline decoration-zinc-300 underline-offset-2">
						posts
					</Link>
					<Link
						to="/projects"
						className="underline decoration-zinc-300 underline-offset-2">
						projects
					</Link>
				</div>
			</div>
			<div className="flex gap-x-4">
				<div className="relative w-fit rounded-md bg-[#333333] p-4 transition-colors hover:bg-[#222222]">
					<Link
						to="https://github.com/benslv"
						target="_blank"
						className="before:absolute before:inset-0">
						<Github color="#ffffff" />
					</Link>
				</div>
				<div className="relative w-fit rounded-md bg-[#0a66c2] p-4 transition-colors hover:bg-[#0959aa]">
					<Link
						to="https://linkedin.com/in/ben-silverman"
						target="_blank"
						className="before:absolute before:inset-0">
						<Linkedin color="#ffffff" />
					</Link>
				</div>
				<div className="relative w-fit rounded-md bg-[#1da1f2] p-4 transition-colors hover:bg-[#0d8bd9]">
					<Link
						to="https://twitter.com/bensilverman_"
						target="_blank"
						className="before:absolute before:inset-0">
						<Twitter color="#ffffff" />
					</Link>
				</div>
			</div>
		</div>
	);
}
