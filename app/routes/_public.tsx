import { Link, Outlet } from "@remix-run/react";
import { SocialIcons } from "~/components/SocialIcons";

export default function PublicLayout() {
	return (
		<div className="mx-4 my-2 max-w-screen-sm md:mx-auto">
			<div className="mb-8 flex items-center justify-between">
				<nav>
					<ul className="flex gap-x-4 text-sm font-medium uppercase text-zinc-400">
						<li>
							<Link to="/" className="transition-colors hover:text-zinc-500">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/posts"
								className="transition-colors hover:text-zinc-500">
								Posts
							</Link>
						</li>
					</ul>
				</nav>
				<SocialIcons />
			</div>
			<Outlet />
		</div>
	);
}
