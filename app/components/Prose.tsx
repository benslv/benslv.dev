export function Prose({ children }: { children: React.ReactNode }) {
	return (
		<div className="prose prose-headings:tracking-tight prose-h2:mb-2 prose-h2:mt-6 prose-h3:mt-4 prose-a:font-medium prose-a:text-blue-500 prose-a:decoration-blue-300 prose-a:decoration-2 prose-a:underline-offset-2 prose-blockquote:rounded prose-blockquote:border prose-blockquote:border-l-4 prose-blockquote:bg-gray-50 prose-blockquote:px-2 prose-blockquote:text-zinc-500 prose-li:my-0 prose-img:mx-auto prose-img:rounded-md prose-inline-code:rounded prose-inline-code:border prose-inline-code:bg-gray-100 prose-inline-code:px-1 prose-inline-code:py-1 prose-inline-code:font-normal prose-inline-code:text-gray-600 prose-inline-code:before:content-[''] prose-inline-code:after:content-['']">
			{children}
		</div>
	);
}
