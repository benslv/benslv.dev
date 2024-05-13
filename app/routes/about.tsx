import { TextLink } from "~/components/TextLink";

export function Page() {
	return (
		<>
			<section>
				<h2 className="text-xl font-medium text-zinc-900">Experience</h2>
				<div className="flex flex-col gap-y-2">
					<div>
						<span className="text-sm text-zinc-500">2022-present</span>
						<h3 className="font-medium">
							Software Engineer II at{" "}
							<TextLink to="https://wbd.com">Warner Bros. Discovery</TextLink>
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
							<TextLink to="https://arm.com">Arm Ltd.</TextLink>
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
					<TextLink to="https://github.com/benslv">Github</TextLink>.
				</p>
				<ul className="mt-2 list-inside list-disc">
					<li>
						<TextLink to="https://insync.rocks">Insync</TextLink>
						<span>
							, a Spotify-enabled smart playlist maker, based on your listening
							history and the artists you love!
						</span>
					</li>
					<li>
						<TextLink to="https://lettuce.watch">Lettucewatch</TextLink>
						<span>
							, a realtime social application for movie nights with friends and
							family.
						</span>
					</li>
					<li>
						<TextLink to="https://countable.cc">Countable</TextLink>
						<span>
							, a robust Discord bot to help you manage counting channels in
							your server.
						</span>
					</li>
				</ul>
			</section>
		</>
	);
}
