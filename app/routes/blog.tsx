import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
	return {};
}

export default function Page() {
	return (
		<div className="prose">
			<Outlet />
		</div>
	);
}
