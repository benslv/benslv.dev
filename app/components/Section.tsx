import React from "react";

export function Section({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:mx-0">
			{children}
		</div>
	);
}
