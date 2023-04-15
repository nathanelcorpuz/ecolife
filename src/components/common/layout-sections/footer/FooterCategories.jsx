"use client";

import React from "react";
import FooterSectionContainer from "./FooterSectionContainer";

const FooterCategories = () => {
	return (
		<FooterSectionContainer>
			<h2 className="text-standard-balanced text-xl font-bold">Categories</h2>
			<ul className="flex flex-col gap-4">
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href="/category/kitchen"
					>
						Kitchen
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href="/category/personal-care"
					>
						Personal Care
					</a>
				</li>
				<li>
					<a
						className="ps-0 p-2 transition-all font-normal hover:text-accent-balanced"
						href="/category/fashion"
					>
						Fashion
					</a>
				</li>
			</ul>
		</FooterSectionContainer>
	);
};

export default FooterCategories;
