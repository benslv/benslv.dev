import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: {
		kind: "github",
		repo: "benslv/benslv.dev",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "content/posts/*",
			entryLayout: "content",
			format: { contentField: "body" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				publishedDate: fields.date({
					label: "Published Date",
					defaultValue: { kind: "today" },
				}),
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
