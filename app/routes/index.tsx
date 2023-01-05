import { GitHub, OpenNewWindow } from "iconoir-react";

export default function Index() {
	return (
		<div className="flex flex-col space-y-8">
			<section>
				<h1 className="text-lg font-bold">Ben Silverman</h1>
				<p>Software Developer @ Warner Bros. Discovery</p>
			</section>
			<section>
				<h1 className="mb-2 uppercase text-emerald-300">About Me</h1>
				<p>All things web dev. </p>
				<p>
					I love the creative process&mdash;designing, building,
					refining&mdash;and strive to produce things that others want
					to use. Currently working on{" "}
					<a
						href="https://lettuce.watch"
						target="_blank"
						rel="noopener noreferrer"
						className="px-1 transition-colors rounded bg-opacity-20 text-emerald-300 hover:text-emerald-200 hover:bg-opacity-30 bg-emerald-500"
					>
						Lettucewatch.
					</a>
				</p>
				<br />
				<p>
					You can find me on{" "}
					<a
						href="https://twitter.com/bensilverman_"
						target="_blank"
						rel="noreferrer"
						className="px-1 transition-colors rounded bg-opacity-20 text-emerald-300 hover:text-emerald-200 hover:bg-opacity-30 bg-emerald-500"
					>
						Twitter
					</a>{" "}
					and{" "}
					<a
						href="https://github.com/benslv/"
						target="_blank"
						rel="noreferrer"
						className="px-1 transition-colors rounded bg-opacity-20 text-emerald-300 hover:text-emerald-200 hover:bg-opacity-30 bg-emerald-500"
					>
						GitHub
					</a>
					, or even send me an email!
				</p>
			</section>
			<section>
				<h1 className="mb-2 uppercase text-emerald-300">Experience</h1>
				<div className="flex flex-col -mx-4 overflow-hidden border border-gray-700 sm:rounded-lg ">
					<div className="flex flex-col px-4 py-2 bg-gray-800 sm:space-x-4 sm:items-center sm:flex-row">
						<p className="text-sm italic text-gray-400 sm:w-2/12">
							2022-present
						</p>
						<div className="sm:w-max">
							<h2 className="font-bold">
								Warner Bros. Discovery
							</h2>
							<p className="text-gray-200 ">
								Developing highly-optimised frontend software
								for connected devices using Solid & LightningJS.
							</p>
						</div>
					</div>
					<div className="flex flex-col px-4 py-2 bg-gray-800 sm:space-x-4 sm:items-center sm:flex-row">
						<p className="text-sm italic text-gray-400 sm:w-2/12">
							2020-2021
						</p>
						<div className="sm:w-max">
							<h2 className="font-bold">Arm Ltd.</h2>
							<p className="text-gray-200 ">
								React SPA development & Azure policy management.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h1 className="mb-2 uppercase text-emerald-300">My Work</h1>
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col -mx-4 space-y-4 sm:space-x-4 sm:space-y-0 sm:flex-row">
						<div className="px-4 py-2 border-gray-700 border-dashed sm:border sm:rounded-lg">
							<h2 className="font-bold">Lettucewatch</h2>
							<p>
								Real-time Tinder-style swiping to help you
								decide what movie to watch next!
							</p>
							<div className="flex space-x-2 sm:justify-end">
								<a
									href="https://github.com/benslv/lettucewatch"
									target="_blank"
									rel="noreferrer"
								>
									<GitHub
										className="mt-2 font-bold transition-colors text-emerald-300 hover:text-white"
										fontSize={14}
									/>
								</a>
								<a
									href="https://lettuce.watch"
									target="_blank"
									rel="noreferrer"
									className="mt-2 font-bold transition-colors text-emerald-300 hover:text-white"
								>
									<OpenNewWindow fontSize={14} />
								</a>
							</div>
						</div>
						<div className="px-4 py-2 border-gray-700 border-dashed sm:border sm:rounded-lg">
							<h2 className="font-bold">Countable</h2>
							<p>
								A small, robust Discord bot to support and
								manage a counting channel in your server.{" "}
							</p>
							<div className="flex space-x-2 sm:justify-end">
								<a
									href="https://github.com/benslv/countable"
									target="_blank"
									rel="noreferrer"
									className="mt-2 font-bold transition-colors text-emerald-300 hover:text-white"
								>
									<GitHub fontSize={14} />
								</a>
								<a
									href="https://countable.cc"
									target="_blank"
									rel="noreferrer"
									className="mt-2 font-bold transition-colors text-emerald-300 hover:text-white"
								>
									<OpenNewWindow fontSize={14} />
								</a>
							</div>
						</div>
						<div className="px-4 py-2 border-gray-700 border-dashed sm:border sm:rounded-lg">
							<h2 className="font-bold">Jsfycat</h2>
							<p>
								Node.js wrapper for the Gfycat API, with support
								for <code>async/await</code>.
							</p>
							<div className="flex sm:justify-end">
								<a
									href="https://github.com/benslv/jsfycat"
									target="_blank"
									rel="noreferrer"
								>
									<GitHub
										className="mt-2 font-bold transition-colors text-emerald-300 hover:text-white"
										fontSize={14}
									/>
								</a>
							</div>
						</div>
					</div>
					<p className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg sm:border-none sm:bg-inherit">
						Check out all of these projects (and more) over on my{" "}
						<a
							href="https://github.com/benslv"
							target="_blank"
							rel="noreferrer"
							className="px-1 transition-colors rounded bg-opacity-20 text-emerald-300 hover:text-emerald-200 hover:bg-opacity-30 bg-emerald-500"
						>
							GitHub
						</a>{" "}
						page!
					</p>
				</div>
			</section>
		</div>
	);
}
