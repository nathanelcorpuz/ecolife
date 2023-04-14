"use client";

import SpecialOfferCard from "./SpecialOfferCard";

const SpecialOffers = () => {
	return (
		<section className="flex flex-col gap-24 items-center py-40">
			<div className="flex flex-col gap-4 text-center">
				<h2 className="text-5xl text-accent-dark font-bold">Special Offers</h2>
				<p cname="text-base text-standard-balanced">
					Enjoy great savings on your favorite eco-friendly items
				</p>
			</div>
			<div className="flex gap-24">
				<SpecialOfferCard />
				<SpecialOfferCard />
			</div>
		</section>
	);
};

export default SpecialOffers;
