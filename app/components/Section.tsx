import React from "react";

export function Section({
	title,
	children,
}: {
	title?: string;
	children: React.ReactNode;
}) {
	return (
		<div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mx-0">
			{title ? <h1 className="font-bold text-xl">{title}</h1> : null}
			{children}
		</div>
	);
}
