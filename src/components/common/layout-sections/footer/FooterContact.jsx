import React from "react";
import FooterSectionContainer from "./FooterSectionContainer";

const FooterContact = () => {
	return (
		<FooterSectionContainer>
			<h2 className="text-standard-balanced text-xl font-bold">Contact</h2>
			<ul className="flex flex-col gap-4">
				<li>
					{"("}555{")"}-123-4567
				</li>
				<li>info@eco-shop.com</li>
				<li>123 Main St, Anytown, USA 12345</li>
			</ul>
		</FooterSectionContainer>
	);
};

export default FooterContact;
