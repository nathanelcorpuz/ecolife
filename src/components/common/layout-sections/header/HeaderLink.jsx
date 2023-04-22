"use client";

import Link from "next/link";

const HeaderLink = ({ children, ...props }) => {
	return (
		<Link
			{...props}
			className="text-standard-dark hover:text-accent-balanced transition-all p-2 hover:bg-standard-light-200 rounded"
		>
			{children}
		</Link>
	);
};

export default HeaderLink;
