import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Ben Silverman" },
		{ name: "description", content: "Ben Silverman's personal site." },
	];
};

export default function Index() {
	return (
		<div className="mx-auto mt-28 flex max-w-2xl flex-col gap-y-4">
			<h1 className="text-5xl font-bold text-zinc-800">👋 Hi, I'm Ben!</h1>
			<h2 className="text-xl">
				I'm a software engineer from London, currently working at{" "}
				<a
					href="https://wbd.com/"
					className="text-green-500 underline decoration-green-200 decoration-4 transition-colors hover:text-green-600 hover:decoration-green-300">
					Warner Bros. Discovery.
				</a>
			</h2>

			<section>
				<h2 className="text-xl font-medium text-zinc-900">My Experience</h2>
				<div className="flex flex-col gap-y-2">
					<div>
						<span className="text-sm text-zinc-500">2022-present</span>
						<h3 className="font-medium">
							Software Engineer II at{" "}
							<a
								href="https://wbd.com"
								className="text-green-500 underline decoration-green-200 decoration-2 transition-colors hover:text-green-600 hover:decoration-green-300">
								Warner Bros. Discovery
							</a>
						</h3>
						<p>
							I'm a developer on the Connected Device team, responsible for
							developing Max, our flagship streaming application, for smart TVs,
							set-top boxes, and games consoles.
						</p>
					</div>
					<div>
						<span className="text-sm text-zinc-500">2020-2021</span>
						<h3 className="font-medium">
							Enterprise IT Intern at{" "}
							<a
								href="https://arm.com"
								className="text-green-500 underline decoration-green-200 decoration-2 transition-colors hover:text-green-600 hover:decoration-green-300">
								Arm Ltd.
							</a>
						</h3>
						<p>
							I secured a position at Arm for my placement year during
							university, engaged across both backend and frontend during this
							time. I worked on various projects in these areas, with my
							favourite being the implementation of a new component-driven
							development process for our Arm Developer 2.0 React applications.
						</p>
					</div>
				</div>
			</section>
			<section>
				<h2 className="text-xl font-medium text-zinc-900">Side Projects</h2>
				<p>
					I'm currently focused on frontend development, specifically working on
					various React projects. I love the satisfaction of creating genuinely
					useful apps and services for people to use, and the journey through
					conceptualisation, design, and development is something I find
					incredibly rewarding!
				</p>
				<p>
					Below are some of my most recent projects. You can check out
					everything I've made over on my{" "}
					<a
						href="https://github.com/benslv"
						className="underline decoration-zinc-300 decoration-2 transition-colors hover:decoration-zinc-400">
						Github
					</a>
					.
				</p>
				<ul className="mt-2 list-inside list-disc">
					<li className="text-green-600">
						<a
							href="https://insync.rocks"
							className="font-medium underline decoration-green-300 decoration-2 transition-colors hover:text-green-700 hover:decoration-green-400">
							Insync
						</a>
						<span className="text-zinc-700">
							, a Spotify-enabled smart playlist maker, based on your listening
							history and the artists you love!
						</span>
					</li>
					<li className="text-amber-600">
						<a
							href="https://lettuce.watch"
							className="font-medium underline decoration-amber-300 decoration-2 transition-colors hover:text-amber-700 hover:decoration-amber-400">
							Lettucewatch
						</a>
						<span className="text-zinc-700">
							, a realtime social application for movie nights with friends and
							family.
						</span>
					</li>
					<li className="text-indigo-600">
						<a
							href="https://countable.cc"
							className="font-medium underline decoration-indigo-300 decoration-2 transition-colors hover:text-indigo-700 hover:decoration-indigo-400">
							Countable
						</a>
						<span className="text-zinc-700">
							, a robust Discord bot to help you manage counting channels in
							your server.
						</span>
					</li>
				</ul>
			</section>
		</div>
	);
}
