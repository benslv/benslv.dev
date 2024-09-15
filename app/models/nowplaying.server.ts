import { LastFMUser } from "lastfm-ts-api";

export async function getNowPlaying() {
	if (!process.env.LASTFM_API_KEY) {
		console.warn("Missing Last.fm API key.");
		return null;
	}

	const me = new LastFMUser(process.env.LASTFM_API_KEY);

	const recent = await me.getRecentTracks({
		user: "benslv",
		limit: 10,
	});

	const currentTrack = recent.recenttracks.track.find(
		(track) => track["@attr"]?.nowplaying,
	);

	return currentTrack ?? null;
}
