import { json, type LoaderFunction } from "@remix-run/node";
import { getCurrentTrack } from "~/models/spotify.server";

export const loader: LoaderFunction = async () => {
	return json(getCurrentTrack());
};
