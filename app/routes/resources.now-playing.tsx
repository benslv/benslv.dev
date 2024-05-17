import { useFetcher } from "@remix-run/react";
import { LastFMUser } from "lastfm-ts-api";
import { useEffect } from "react";

export async function loader() {
	const me = new LastFMUser("2893cab5bb7c151f1f23d5fd9f054934");

	const recent = await me.getRecentTracks({
		user: "benslv",
		limit: 10,
	});

	const currentTrack = recent.recenttracks.track.find(
		(track) => track["@attr"]?.nowplaying,
	);

	return { currentTrack };
}

export function CurrentTrackPlayer() {
	const fetcher = useFetcher<typeof loader>();
	const currentTrack = fetcher.data?.currentTrack;

	useEffect(() => {
		fetcher.submit({}, { method: "get", action: "/resources/now-playing" });
	}, []);

	return (
		<div className="flex w-fit items-center gap-x-2 rounded-full border bg-white p-1 pr-3">
			{currentTrack ? (
				<>
					<img
						src={currentTrack.image[0]["#text"]}
						className="animate-spin-slow h-6 w-6 rounded-full border bg-white"
					/>
					<p className="text-sm">
						{currentTrack.name} - {currentTrack.artist["#text"]}
					</p>
				</>
			) : (
				<>
					<div className="h-6 w-6 animate-pulse rounded-full border bg-zinc-400" />
					<p className="text-sm">loading...</p>
				</>
			)}
		</div>
	);
}
