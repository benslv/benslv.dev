import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Ben Silverman" },
		{ name: "description", content: "Ben Silverman's personal site." },
	];
};

export default function Index() {
	return (
		<div className="mx-auto flex max-w-2xl flex-col gap-y-4">
			<div className="my-8 flex items-center justify-center gap-x-4">
				<img
					src="https://pbs.twimg.com/profile_images/1383143052202631174/Tvn3Fj5I_200x200.jpg"
					width={64}
					height={64}
					className="h-16 w-16 rounded-full"
				/>
				<div>
					<h1 className="text-3xl font-bold text-gray-900">Ben Silverman</h1>
					<h2 className="text-xl">
						Software Engineer II at{" "}
						<a
							href="https://wbd.com/"
							target="_blank"
							className="text-green-500 underline decoration-green-100 decoration-4 transition-colors hover:text-green-600 hover:decoration-green-200">
							Warner Bros. Discovery
						</a>
					</h2>
				</div>
			</div>
			<section>
				<h2 className="text-xl font-medium text-gray-900">Stuff I've Made</h2>
				<ul>
					<li>
						<p>
							🎧{" "}
							<a
								href="https://insync.rocks"
								target="_blank"
								className="font-medium underline decoration-gray-300 decoration-2">
								Insync
							</a>
							, a Spotify-enabled smart playlist maker, based on your listening
							history and the artists you love!
						</p>
					</li>
					<li>
						<p>
							🥬{" "}
							<a
								href="https://lettuce.watch"
								target="_blank"
								className="font-medium underline decoration-gray-300 decoration-2">
								Lettucewatch
							</a>
							, a realtime social application for movie nights with friends and
							family.
						</p>
					</li>
					<li>
						🤖{" "}
						<a
							href="https://countable.cc"
							className="font-medium underline decoration-gray-300 decoration-2">
							Countable
						</a>
						, a robust Discord bot to help you manage counting channels in your
						server.
					</li>
				</ul>
			</section>
			<section>
				<h2 className="text-xl font-medium text-gray-900">My Experience</h2>
				<ul className="list-outside list-disc pl-4">
					<li>
						Currently at{" "}
						<a
							href="https://wbd.com"
							target="_blank"
							className="font-medium underline decoration-gray-300 decoration-2">
							WBD
						</a>
						, developing{" "}
						<a
							href="https://max.com"
							target="_blank"
							className="font-medium underline decoration-gray-300 decoration-2">
							Max
						</a>{" "}
						for TVs and games consoles with Solid and LightningJS.
					</li>
					<li>
						Previously interned at{" "}
						<a
							href="https://arm.com"
							target="_blank"
							className="font-medium underline decoration-gray-300 decoration-2">
							Arm
						</a>
						, creating React applications for the Arm Developer platform.
					</li>
				</ul>
			</section>
		</div>
	);
}
