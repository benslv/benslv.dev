import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Ben Silverman" },
		{ name: "description", content: "Ben Silverman's personal site." },
	];
};

export default function Index() {
	return (
		<div className="flex flex-col gap-y-4">
			<section>
				<h1 className="mb-4 font-handwriting text-3xl text-zinc-800">
					Hi, I'm Ben! 👋
				</h1>
				<p>
					I'm a software engineer at{" "}
					<Link
						to="https://wbd.com"
						target="_blank"
						className="font-medium text-blue-500 underline decoration-blue-300 decoration-2 underline-offset-2">
						Warner Bros. Discovery
					</Link>
					, currently focused on developing our flagship streaming platform,{" "}
					<Link
						to="https://max.com"
						target="_blank"
						className="font-medium text-blue-500 underline decoration-blue-300 decoration-2 underline-offset-2">
						Max
					</Link>
					.
				</p>
			</section>
			<hr />
			<section>
				<p>
					I'm passionate about all things frontend, and love the opportunities
					it provides to intersect development with design. If I'm not at my
					computer, you can probably find me at the gym,{" "}
					<Link
						to="https://goodreads.com/benslv"
						target="_blank"
						className="font-medium text-blue-500 underline decoration-blue-300 decoration-2 underline-offset-2">
						reading
					</Link>
					, or playing my saxophone in my local band! 🎷
				</p>
			</section>
			<section>
				<h2 className="mt-2 font-handwriting text-2xl font-medium text-zinc-800">
					Experience
				</h2>
				<ul className="ml-4 mt-2 list-disc space-y-2 marker:text-zinc-300">
					<li>
						<Link
							to="https://wbd.com"
							target="_blank"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							Warner Bros. Discovery
						</Link>{" "}
						<span className="text-sm text-zinc-400">
							(sept. 2022 &#8212; present)
						</span>
						<p>
							Software Engineer II, developing high-performance, cross-platform
							applications for Max with Solid and LightningJS.
						</p>
					</li>
					<li>
						<Link
							to="https://arm.com"
							target="_blank"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							Arm Ltd.
						</Link>{" "}
						<span className="text-sm text-zinc-400">
							(sept. 2020 &#8212; sept. 2021)
						</span>
						<p>
							Enterprise IT Intern, implementing a component-driven architecture
							in React for Arm Developer Community, and writing backend Azure
							policies to introduce new functionality to Arm Account.
						</p>
					</li>
				</ul>
			</section>
			<section>
				<h2 className="mt-2 font-handwriting text-2xl font-medium text-zinc-800">
					Projects
				</h2>
				<ul className="ml-6 mt-2 space-y-2 marker:text-zinc-300">
					<li className="before:-ml-6 before:mr-2 before:content-['🎶']">
						<Link
							to="https://insync.rocks"
							target="_blank"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							insync
						</Link>
						, a smart Spotify playlist generator.
					</li>
					<li className="before:-ml-6 before:mr-2 before:content-['🥬']">
						<Link
							to="https://lettuce.watch"
							target="_blank"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							Lettucewatch
						</Link>
						, a real-time, collaborative movie picker for groups.
					</li>
					<li className="before:-ml-6 before:mr-2 before:content-['🤖']">
						<Link
							to="https://countable.cc"
							target="_blank"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							Countable
						</Link>
						, a small, robust Discord bot to support and manage a counting
						channel in your server.
					</li>
					<li className="before:-ml-6 before:mr-2 before:content-['😸']">
						<Link
							to="https://www.npmjs.com/package/jsfycat"
							target="_blank"
							className="text-zinc-800 underline decoration-zinc-300 decoration-2 underline-offset-2">
							Jsfycat
						</Link>
						, a Node.js wrapper for Gfycat&#39;s API.
					</li>
				</ul>
			</section>
		</div>
	);
}
