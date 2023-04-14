"use client";

import Image from "next/image";
import ecoFriendlyIcon from "../../../../../public/assets/eco-friendly-icon.png";
import happyCustomersIcon from "../../../../../public/assets/happy-customers-icon.png";
import wasteReducedIcon from "../../../../../public/assets/waste-reduced-icon.png";

const stats = [
	{
		icon: ecoFriendlyIcon,
		title: "15,000+",
		subtitle: "Eco-friendly products sold",
	},
	{
		icon: happyCustomersIcon,
		title: "7,500+",
		subtitle: "Happy customers worldwide",
	},
	{
		icon: wasteReducedIcon,
		title: "2,000+",
		subtitle: "Tons of plastic waste reduced",
	},
];

const Stats = () => {
	return (
		<section className="flex justify-center gap-56 py-52">
			{stats.map((stat) => (
				<div className="flex gap-3 items-center">
					<Image src={stat.icon} width={70} height="auto" />
					<div className="flex flex-col gap-2">
						<h2 className="text-3xl text-accent-dark font-bold">
							{stat.title}
						</h2>
						<p className="text-lg text-accent-dark-300">{stat.subtitle}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Stats;
