import { useFetcher } from "@remix-run/react";
import { LastFMUser } from "lastfm-ts-api";
import { useEffect } from "react";

export async function loader() {
	const me = new LastFMUser("2893cab5bb7c151f1f23d5fd9f054934");

	const recent = await me.getRecentTracks({
		user: "benslv",
		limit: 10,
	});

	const recentTrack = recent.recenttracks.track;

	console.log(recentTrack);

	return { recent };
}

export function CurrentTrackPlayer() {
	const fetcher = useFetcher<typeof loader>();

	useEffect(() => {
		fetcher.submit({}, { method: "get", action: "/resources/now-playing" });
	}, []);

	return fetcher.data ? (
		<div className="h-8 w-16 bg-red-500">
			{fetcher.data.recent.recenttracks.track[0].name}
		</div>
	) : (
		<div className="h-8 w-16 bg-blue-500"></div>
	);
}
