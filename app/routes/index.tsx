import { motion } from "framer-motion";

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
			<div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mx-0">
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
									<p className="text-gray-700">
										{job.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="grid grid-cols-3 gap-x-8">
				<div className="flex w-full select-none items-center justify-center overflow-hidden rounded-2xl  bg-white shadow-lg shadow-green-500/50 sm:mx-0">
					<img
						src="/images/projects/insync.jpg"
						alt="Insync logo"
						draggable="false"
					/>
				</div>
				<div className="flex w-full select-none items-center justify-center overflow-hidden rounded-2xl  shadow-red-300/50 bg-white shadow-lg sm:mx-0">
					<img
						src="/images/projects/lettucewatch.jpg"
						alt="Lettucewatch logo"
						draggable="false"
					/>
				</div>
				<div className="flex w-full select-none bg-gray-900 h-full items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-gray-600/60 sm:mx-0">
					<img
						src="/images/projects/github.png"
						alt="Github logo"
						className="p-8"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	);
}
