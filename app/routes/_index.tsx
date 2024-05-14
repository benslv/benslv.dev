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
				<p className="mb-2 text-xl">👋</p>
				<h1 className="text-xl font-medium text-zinc-800">Hi, I'm Ben!</h1>
				<p>
					I'm a software engineer at{" "}
					<Link
						to="https://wbd.com"
						target="_blank"
						className="text-blue-700 underline decoration-blue-300 decoration-2 underline-offset-2">
						Warner Bros. Discovery
					</Link>
					, currently focused on developing our flagship streaming platform,{" "}
					<Link
						to="https://max.com"
						target="_blank"
						className="text-blue-700 underline decoration-blue-300 decoration-2 underline-offset-2">
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
						className="text-blue-700 underline decoration-blue-300 decoration-2 underline-offset-2">
						reading
					</Link>
					, or playing my saxophone in my local band!
				</p>
			</section>
			<section>
				<h2 className="text-lg font-medium text-zinc-800">Experience</h2>
				<ul className="mt-2 list-disc space-y-2 pl-4 marker:text-zinc-300">
					<li>
						<Link
							to="https://wbd.com"
							target="_blank"
							className="text-zinc-800 underline decoration-zinc-800 underline-offset-2">
							Warner Bros. Discovery
						</Link>{" "}
						<span className="text-sm text-zinc-500">
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
							className="text-zinc-800 underline decoration-zinc-800 underline-offset-2">
							Arm Ltd.
						</Link>{" "}
						<span className="text-sm text-zinc-500">
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
		</div>
		// <div className="mx-auto flex w-fit flex-col gap-4 rounded-md border bg-white p-8">
		// 	<p className="mb-2">👋</p>
		// 	<h2 className="text-2xl font-medium text-zinc-800">Ben Silverman</h2>
		// 	<p>
		// 		Software Engineer at{" "}
		// 		<a
		// 			href="https://wbd.com"
		// 			target="_blank"
		// 			className="text-blue-500 underline decoration-blue-300 underline-offset-2">
		// 			Warner Bros. Discovery
		// 		</a>
		// 	</p>
		// 	<div className="mt-4 flex flex-col gap-y-2">
		// 		<Link
		// 			to="/about"
		// 			className="underline decoration-zinc-300 underline-offset-2">
		// 			about
		// 		</Link>
		// 		<Link
		// 			to="/posts"
		// 			className="underline decoration-zinc-300 underline-offset-2">
		// 			posts
		// 		</Link>
		// 		<Link
		// 			to="/projects"
		// 			className="underline decoration-zinc-300 underline-offset-2">
		// 			projects
		// 		</Link>
		// 	</div>
		// 	<div className="flex gap-x-4">
		// 		<div className="relative w-fit rounded-md bg-[#333333] p-4 transition-colors hover:bg-[#222222]">
		// 			<Link
		// 				to="https://github.com/benslv"
		// 				target="_blank"
		// 				className="before:absolute before:inset-0">
		// 				<Github color="#ffffff" />
		// 			</Link>
		// 		</div>
		// 		<div className="relative w-fit rounded-md bg-[#0a66c2] p-4 transition-colors hover:bg-[#0959aa]">
		// 			<Link
		// 				to="https://linkedin.com/in/ben-silverman"
		// 				target="_blank"
		// 				className="before:absolute before:inset-0">
		// 				<Linkedin color="#ffffff" />
		// 			</Link>
		// 		</div>
		// 		<div className="relative w-fit rounded-md bg-[#1da1f2] p-4 transition-colors hover:bg-[#0d8bd9]">
		// 			<Link
		// 				to="https://twitter.com/bensilverman_"
		// 				target="_blank"
		// 				className="before:absolute before:inset-0">
		// 				<Twitter color="#ffffff" />
		// 			</Link>
		// 		</div>
		// 	</div>
		// </div>
	);
}
