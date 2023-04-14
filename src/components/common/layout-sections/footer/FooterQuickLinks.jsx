import React from "react";
import FooterSectionContainer from "./FooterSectionContainer";

const FooterQuickLinks = () => {
	return (
		<FooterSectionContainer>
			<h2 className="text-standard-balanced text-xl font-bold">Quick Links</h2>
			<ul className="flex flex-col gap-4">
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						Home
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						Products
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						About
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						Contact
					</a>
				</li>
			</ul>
		</FooterSectionContainer>
	);
};

export default FooterQuickLinks;
