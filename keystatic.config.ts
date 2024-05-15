import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: {
		kind: "github",
		repo: {
			owner: "benslv",
			name: "benslv.dev",
		},
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "app/content/posts/*",
			format: { contentField: "body" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				publishedDate: fields.date({ label: "Published Date" }),
				published: fields.checkbox({ label: "Published" }),
				description: fields.text({ label: "Description" }),
				tags: fields.array(fields.text({ label: "Tag" })),
				body: fields.mdx({
					label: "Body",
				}),
			},
		}),
	},
});
