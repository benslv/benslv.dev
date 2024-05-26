import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
	storage: {
		kind: "github",
		repo: "benslv/benslv.dev",
	},
	singletons: {
		reading: singleton({
			label: "Currently reading",
			schema: {
				ISBN: fields.text({ label: "ISBN" }),
			},
		}),
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "app/content/posts/*",
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
		blogroll: collection({
			label: "Blogroll",
			slugField: "author",
			path: "app/content/blogroll/*",
			schema: {
				url: fields.text({ label: "URL" }),
				author: fields.slug({ name: { label: "Author" } }),
				reason: fields.text({
					label: "Reason",
					description: "Why are you sharing this site?",
				}),
			},
		}),
	},
});
