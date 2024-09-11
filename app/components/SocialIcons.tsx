import { Link } from "@remix-run/react";
import GitHub from "./icons/GitHub";
import Goodreads from "./icons/Goodreads";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

export function SocialIcons() {
	return (
		<div className="flex w-max items-center justify-between gap-x-4 text-zinc-400">
			<Link
				to="https://linkedin.com/in/ben-silverman"
				target="_blank"
				className="transition-colors hover:text-zinc-500"
				rel="noreferrer">
				<LinkedIn />
			</Link>
			<Link
				to="https://github.com/benslv"
				target="_blank"
				className="transition-colors hover:text-zinc-500"
				rel="noreferrer">
				<GitHub />
			</Link>
			<Link
				to="https://twitter.com/bensilverman_"
				target="_blank"
				className="transition-colors hover:text-zinc-500"
				rel="noreferrer">
				<Twitter />
			</Link>
			<Link
				to="https://www.goodreads.com/benslv"
				target="_blank"
				className="transition-colors hover:text-zinc-500"
				rel="noreferrer">
				<Goodreads />
			</Link>
		</div>
	);
}
