import { Link } from "@remix-run/react";

interface Props {
	to: string;
	children: React.ReactNode;
}

export function TextLink({ to, children }: Props) {
	return (
		<Link
			to={to}
			className="font-bold text-green-500 underline decoration-green-200 decoration-2 transition-colors hover:text-green-600 hover:decoration-green-300">
			{children}
		</Link>
	);
}
