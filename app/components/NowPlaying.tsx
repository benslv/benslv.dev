import { Await } from "@remix-run/react";
import type { LastFMBooleanNumber } from "lastfm-ts-api";
import { Suspense } from "react";

type LastFmTrack = {
	artist: {
		mbid: string;
		"#text": string;
	};
	streamable: LastFMBooleanNumber;
	image: Array<{
		"#text": string;
		size: string;
	}>;
	mbid: string;
	album: {
		mbid: string;
		"#text": string;
	};
	name: string;
	url: string;
	date: {
		uts: string;
		"#text": string;
	};
	"@attr"?: {
		nowplaying: "true";
	};
};

export function NowPlaying({
	currentTrackPromise,
}: {
	currentTrackPromise: Promise<LastFmTrack | null>;
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
								<p className="text-sm">
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
