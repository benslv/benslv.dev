import { Await } from "@remix-run/react";
import type { LastFMUserGetRecentTracksResponse } from "lastfm-ts-api";
import { Suspense } from "react";

export function NowPlaying({
	currentTrackPromise,
}: {
	currentTrackPromise: Promise<
		LastFMUserGetRecentTracksResponse["recenttracks"]["track"][number] | null
	>;
}) {
	return (
		<div className="flex w-fit items-center gap-x-2 rounded-full border bg-white p-1 pr-3">
			<Suspense
				fallback={
					<>
						<div className="h-6 w-6 animate-pulse rounded-full border bg-zinc-400" />
						<p className="text-sm">loading...</p>
					</>
				}>
				<Await resolve={currentTrackPromise}>
					{(currentTrack) => {
						if (!currentTrack) {
							return (
								<>
									<img src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg&w=24&h=24" />
									<p className="text-sm">Nothing playing</p>
								</>
							);
						}

						return (
							<>
								<img
									src={currentTrack.image[0]["#text"]}
									className="h-6 w-6 animate-spin-slow rounded-full border bg-white"
								/>
								<p className="max-w-80 overflow-hidden text-ellipsis whitespace-nowrap text-nowrap text-sm">
									{currentTrack.name} - {currentTrack.artist["#text"]}
								</p>
							</>
						);
					}}
				</Await>
			</Suspense>
		</div>
	);
}
