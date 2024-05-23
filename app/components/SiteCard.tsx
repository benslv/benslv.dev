import type { Entry } from "@keystatic/core/reader";
import { Link } from "@remix-run/react";
import type keystaticConfig from "keystatic.config";

type SiteCardProps = Entry<
	(typeof keystaticConfig)["collections"]["blogroll"]
> & {
	favicon: string;
};

export function SiteCard({ url, author, favicon }: SiteCardProps) {
	return (
		<Link
			to={url}
			target="_blank"
			className="rounded-md border border-zinc-200 border-opacity-0 p-2 px-3 transition-all duration-200 hover:scale-105 hover:border-opacity-100 hover:bg-zinc-50">
			<div className="flex items-center gap-x-2">
				<img src={favicon} width={16} height={16} />
				<h2 className="text-nowrap font-medium">{author}</h2>
			</div>
			<p className="flex-nowrap text-sm text-zinc-400">
				{new URL(url).hostname}
			</p>
		</Link>
	);
}
