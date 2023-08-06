/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	// When running locally in development mode, we use the built in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	ignoredRouteFiles: ["**/.*"],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "api/index.js",
	// publicPath: "/build/",
	serverModuleFormat: "esm",
	serverDependenciesToBundle: ["mdx-bundler"],
	future: {
		v2_dev: true,
		v2_errorBoundary: true,
		v2_headers: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
};
