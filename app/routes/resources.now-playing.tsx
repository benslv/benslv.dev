import { useFetcher } from "@remix-run/react";
import { LastFMUser } from "lastfm-ts-api";
import { useEffect } from "react";

export async function loader() {
	const me = new LastFMUser(process.env.LASTFM_API_KEY!);

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

	// Super simple auto refresh
	useEffect(() => {
		const interval = setInterval(
			() => {
				fetcher.submit({}, { method: "get", action: "/resources/now-playing" });
			},
			3 * 60 * 60 * 1000,
		);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative flex h-32 w-32 items-center gap-x-2 overflow-hidden rounded-xl border-white bg-white shadow">
			{!data || fetcher.state === "loading" ? (
				<div className="h-full w-full animate-pulse bg-zinc-300" />
			) : data.isPlaying ? (
				<>
					<img
						className="absolute inset-0 z-0"
						src={data.currentTrack.image[2]["#text"]}
					/>
					<div className="z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-zinc-950 p-3 text-white">
						<p
							className="overflow-hidden text-ellipsis whitespace-nowrap drop-shadow"
							title={data.currentTrack.name}>
							{data.currentTrack.name}
						</p>
						<p
							className="text-xs font-medium uppercase drop-shadow"
							title={data.currentTrack.artist["#text"]}>
							{data.currentTrack.artist["#text"]}
						</p>
					</div>
				</>
			) : (
				<>
					<img
						className="absolute inset-0 z-0 h-32 w-32 bg-[#1ed760]"
						src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg&w=128&h=128"
					/>
					<div className="z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-zinc-950 p-3 text-white">
						<p className="text-xs font-medium uppercase drop-shadow">
							Nothing playing
						</p>
					</div>
				</>
			)}
		</div>
	);
}
