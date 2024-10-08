import { Link } from "@remix-run/react";
import { SocialIcons } from "./SocialIcons";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-4 my-2 max-w-screen-sm md:mx-auto">
			<div className="mb-8 flex items-center justify-between">
				<nav>
					<ul className="flex gap-x-4 text-sm font-medium uppercase text-gray-400">
						<li>
							<Link to="/" className="transition-colors hover:text-gray-500">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/posts"
								className="transition-colors hover:text-gray-500">
								Posts
							</Link>
						</li>
					</ul>
				</nav>
				<SocialIcons />
			</div>
			{children}
		</div>
	);
}
