import { json } from "@remix-run/node";
import { Container } from "~/components/Container";

export async function loader() {
	return json(null, { status: 404 });
}

export default function Page() {
	return (
		<Container>
			<h1>Page not found.</h1>
		</Container>
	);
}
