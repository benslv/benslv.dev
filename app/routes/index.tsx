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
						rel="noopener noreferrer"
						className="px-1 transition-colors rounded bg-opacity-20 text-emerald-300 hover:text-emerald-200 hover:bg-opacity-30 bg-emerald-500"
					>
						Twitter
					</a>{" "}
					and{" "}
					<a
						href="https://github.com/benslv/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-1 transition-colors rounded bg-opacity-20 text-emerald-300 hover:text-emerald-200 hover:bg-opacity-30 bg-emerald-500"
					>
						GitHub
					</a>
					, or even send me an email!
				</p>
			</section>
			<section>
				<h1 className="mb-2 uppercase text-emerald-300">Experience</h1>
				<div className="flex flex-col -mx-4 overflow-hidden sm:rounded-lg">
					<div className="flex flex-col px-4 py-2 bg-gray-800 sm:space-x-4 sm:items-center sm:flex-row">
						<p className="text-sm italic sm:w-2/12">2022-present</p>
						<div className="sm:w-max">
							<p className="font-bold">Warner Bros. Discovery</p>
							<p className="text-gray-200 ">
								Developing highly-optimised frontend software
								for connected devices.
							</p>
						</div>
					</div>
					<div className="flex flex-col px-4 py-2 bg-gray-800 sm:space-x-4 sm:items-center sm:flex-row">
						<p className="text-sm italic sm:w-2/12">2020-2021</p>
						<div className="sm:w-max">
							<p className="font-bold">Arm Ltd.</p>
							<p className="text-gray-200 ">
								React SPA development & Azure policy management.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h1 className="mb-2 uppercase text-emerald-300">My Work</h1>
			</section>
		</div>
	);
}
