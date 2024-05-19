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

	if (!currentTrack) {
		return { isPlaying: false as const };
	}

	return { isPlaying: true as const, currentTrack };
}

export function CurrentTrackPlayer() {
	const fetcher = useFetcher<typeof loader>();
	const data = fetcher.data;

	useEffect(() => {
		fetcher.submit({}, { method: "get", action: "/resources/now-playing" });
	}, []);

	return (
		<div className="flex w-fit items-center gap-x-2 rounded-full border bg-white p-1 pr-3">
			{!data || fetcher.state === "loading" ? (
				<>
					<div className="h-6 w-6 animate-pulse rounded-full border bg-zinc-400" />
					<p className="text-sm">loading...</p>
				</>
			) : data.isPlaying ? (
				<>
					<img
						src={data.currentTrack.image[0]["#text"]}
						className="h-6 w-6 animate-spin-slow rounded-full border bg-white"
					/>
					<p className="text-sm">
						{data.currentTrack.name} - {data.currentTrack.artist["#text"]}
					</p>
				</>
			) : (
				<>
					<img src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg&w=24&h=24" />
					<p className="text-sm">Nothing playing</p>
				</>
			)}
		</div>
	);
}
