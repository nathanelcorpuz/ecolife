import Link from "next/link";

export default function PolicyLinks() {
	return (
		<div className="flex gap-5">
			<Link
				className="underline underline-offset-4 text-accent-balanced p-2 rounded w-[fit-content]  hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
				href="/"
			>
				Terms
			</Link>
			<Link
				className="underline underline-offset-4 text-accent-balanced p-2 rounded w-[fit-content]  hover:text-accent-dark-300 hover:bg-standard-light-200 transition-all"
				href="/"
			>
				Privacy
			</Link>
		</div>
	);
}
