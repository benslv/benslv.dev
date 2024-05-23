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
		<div className="rounded-md border bg-white p-2 px-3 transition-colors hover:bg-zinc-50">
			<Link to={url} target="_blank">
				<div className="flex items-center gap-x-2">
					<img src={favicon} width={16} height={16} />
					<h2 className="text-nowrap font-medium">{author}</h2>
				</div>
				<p className="flex-nowrap text-sm text-zinc-400">
					{new URL(url).hostname}
				</p>
			</Link>
		</div>
	);
}
