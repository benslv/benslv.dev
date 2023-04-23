const work = [
	{
		role: "Currently",
		company: "Warner Bros. Discovery",
		description:
			"Sunt culpa eu officia laboris voluptate magna qui do. Aliquip reprehenderit exercitation exercitation ipsum. Laborum labore officia reprehenderit eiusmod nostrud esse non cupidatat eu fugiat excepteur.",
		image: "/images/wbd.png",
		link: "https://wbd.com/",
	},
	{
		role: "Previously",
		company: "Arm Ltd.",
		description:
			"Sunt culpa eu officia laboris voluptate magna qui do. Voluptate aliqua duis culpa cupidatat pariatur aliqua aliquip exercitation.",
		image: "/images/arm.png",
		link: "https://arm.com/",
	},
];

export default function Index() {
	return (
		<div className="mx-auto flex max-w-xl flex-col space-y-8">
			<div>
				<h2 className="mb-2 ml-4 text-xl">Work</h2>
				<div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
					<div className="flex flex-col space-y-4">
						{work.map((job, index) => {
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
										<h3 className="font-bold text-gray-900">
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
										<p className="text-gray-700">
											{job.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
