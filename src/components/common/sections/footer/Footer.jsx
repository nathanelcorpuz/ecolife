import Logo from "../../Logo";
import FacebookIcon from "../../socials/FacebookIcon";
import InstagramIcon from "../../socials/InstagramIcon";
import TwitterIcon from "../../socials/TwitterIcon";
import FooterContact from "./FooterContact";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterResources from "./FooterResources";
import FooterSocials from "./FooterSocials";
import GitHubIcon from "./GitHubIcon";

const Footer = () => {
	return (
		<footer className="pt-12 pb-6 bg-accent-light-100 flex flex-col justify-between gap-60 items-center">
			<div className="flex justify-evenly self-stretch">
				<FooterSocials />
				<FooterQuickLinks />
				<FooterResources />
				<FooterContact />
			</div>
			<div className="flex flex-col gap-4 items-center">
				<p className="text-standard-balanced text-base">
					© 2023 Eco-Shop. All rights reserved.
				</p>
				<small className="italic">A passion project by Nathanel Corpuz</small>
				<a href="https://github.com/nathanelcorpuz/ecolife" target="_blank">
					<GitHubIcon />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
