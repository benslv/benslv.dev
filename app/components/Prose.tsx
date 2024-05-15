export function Prose({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="prose-blockquote: prose prose-headings:font-handwriting prose-headings:font-medium prose-h1:mb-4 prose-h1:text-3xl prose-h2:mb-2 prose-h2:mt-6 prose-h2:text-2xl prose-h3:mt-4 prose-p:mb-1 prose-p:mt-2 prose-a:font-normal prose-a:text-zinc-800 prose-a:underline prose-a:decoration-zinc-300 prose-a:decoration-2 prose-a:underline-offset-2 prose-blockquote:-rotate-[0.5deg] prose-blockquote:rounded prose-blockquote:border prose-blockquote:border-l-4 prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:text-zinc-500 prose-pre:my-4 prose-pre:border prose-inline-code:rounded prose-inline-code:bg-blue-100 prose-inline-code:py-1 prose-inline-code:font-normal prose-inline-code:text-blue-500
  ">
			{children}
		</div>
	);
}
