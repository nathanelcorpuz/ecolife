import React from "react";
import Logo from "../../Logo";
import FacebookIcon from "../../socials/FacebookIcon";
import InstagramIcon from "../../socials/InstagramIcon";
import TwitterIcon from "../../socials/TwitterIcon";
import FooterSectionContainer from "./FooterSectionContainer";

const FooterSocials = () => {
	return (
		<FooterSectionContainer>
			<div className="flex flex-col gap-4">
				<Logo />
				<p className="text-standard-balanced text-lg">
					Your haven for eco-friendly products designed to help you lead a more
					sustainable lifestyle.
				</p>
			</div>
			<div className="flex gap-6 items-center">
				<a href="https://facebook.com" target="_blank">
					<FacebookIcon />
				</a>
				<a href="https://instagram.com" target="_blank">
					<InstagramIcon />
				</a>
				<a href="https://twitter.com" target="_blank">
					<TwitterIcon />
				</a>
			</div>
		</FooterSectionContainer>
	);
};

export default FooterSocials;
