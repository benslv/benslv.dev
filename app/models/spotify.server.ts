const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export async function getAccessToken() {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token,
			client_id,
		}),
	});

	const data = await response.json();

	console.log(data);

	return data;
}

const CURRENT_TRACK_ENDPOINT =
	"https://api.spotify.com/v1/me/player/currently-playing?market=GB";

export async function getCurrentTrack() {
	const { access_token } = await getAccessToken();

	return fetch(CURRENT_TRACK_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Content-Type": "application/json",
		},
	});
}
