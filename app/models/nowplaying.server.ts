import { LastFMUser } from "lastfm-ts-api";

export async function getNowPlaying() {
	const me = new LastFMUser(process.env.LASTFM_API_KEY!);

	const recent = await me.getRecentTracks({
		user: "benslv",
		limit: 10,
	});

	const currentTrack = recent.recenttracks.track.find(
		(track) => track["@attr"]?.nowplaying,
	);

	return currentTrack ?? null;
}
