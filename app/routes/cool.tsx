import { Container } from "~/components/Container";

// 	const sitesWithFavicon = sites.map((site) => ({
// 		slug: site.slug,
// 		entry: {
// 			...site.entry,
// 			favicon: `https://s2.googleusercontent.com/s2/favicons?domain=${site.entry.url}&sz=16`,
// 		},
// 	}));

// 	return { sites: sitesWithFavicon };
// }

export default function Page() {
	// const { sites } = useLoaderData<typeof loader>();
	return (
		<Container>
			<h1 className="font-serif mb-4 text-3xl text-zinc-800">Cool Sites 😎</h1>
			<p>
				A bunch of sites that I think are cool for one reason or another. It
				could be that I've enjoyed the articles an author has written, or maybe
				I really like their site design!
			</p>
			{/* <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
				{sites.map(({ entry, slug }) => (
					<SiteCard key={slug} {...entry} />
				))}
			</div> */}
		</Container>
	);
}
