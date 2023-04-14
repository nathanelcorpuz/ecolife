import React from "react";
import FooterSectionContainer from "./FooterSectionContainer";

const FooterResources = () => {
	return (
		<FooterSectionContainer>
			<h2 className="text-standard-balanced text-xl font-bold">Resources</h2>
			<ul className="flex flex-col gap-4">
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						Blog
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						Shipping & Returns
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href=""
					>
						Terms & Conditions
					</a>
				</li>
			</ul>
		</FooterSectionContainer>
	);
};

export default FooterResources;
