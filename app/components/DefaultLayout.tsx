import { SocialIcons } from "./SocialIcons";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-4 my-2 max-w-screen-sm md:mx-auto">
			<SocialIcons />
			{children}
		</div>
	);
}
