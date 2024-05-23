import { createReader } from "@keystatic/core/reader";
import fs from "fs";
import keystaticConfig from "keystatic.config";
import path from "path";

export function getReader() {
	// Sneaky hack to get Vercel to play nice with Keystatic.
	console.log(fs.readdirSync(path.join(process.cwd(), "app", "content")));

	return createReader(process.cwd(), keystaticConfig);
}
