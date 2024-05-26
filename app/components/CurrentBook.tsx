import type { Book } from "@library-pals/isbn";

export const CurrentBook = ({ book }: { book: Book }) => {
	return (
		<div className="relative flex h-32 w-32 items-center gap-x-2 overflow-hidden rounded-xl border-white bg-white shadow">
			<img className="absolute inset-0 z-0" src={book.thumbnail} />
			<div className="z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-zinc-950 p-3 text-white">
				<p
					className="overflow-hidden text-ellipsis whitespace-nowrap drop-shadow"
					title={book.title}>
					{book.title}
				</p>
				<p className="text-xs font-medium uppercase drop-shadow" title="">
					{book.authors[0]}
				</p>
			</div>
		</div>
	);
};
