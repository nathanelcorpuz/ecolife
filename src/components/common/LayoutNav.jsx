"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sampleRoutes = [
	{
		name: "Route one",
		href: "/checkout/route-one",
	},
	{
		name: "Route two",
		href: "/checkout/route-two",
	},
	{
		name: "Route three",
		href: "/checkout/route-three",
	},
	{
		name: "Route four",
		href: "/checkout/route-four",
	},
];

export default function LayoutNav({ routes = sampleRoutes }) {
	const pathname = usePathname();

	const activeClass =
		"text-accent-balanced border-b-4 border-b-accent-balanced";

	return (
		<nav>
			<ul className="flex items-center">
				{routes.map((route) => (
					<li key={route.href}>
						<Link
							className={`font-bold w-[350px] h-[50px] grid place-content-center hover:bg-accent-light-green rounded transition-all rounded-b-none rounded-br-none border-b-4  ${
								pathname === route.href && activeClass
							}`}
							href={route.href}
						>
							{route.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
