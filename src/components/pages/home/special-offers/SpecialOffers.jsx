"use client";

import Button from "@/components/common/buttons/Button";
import SpecialOfferCard from "./SpecialOfferCard";

const SpecialOffers = () => {
	return (
		<section className="flex flex-col gap-24 items-center py-40">
			<div className="flex flex-col gap-4 text-center">
				<h2 className="text-6xl text-accent-dark font-bold">Special Offers</h2>
				<p className="text-base text-standard-balanced">
					Enjoy great savings on your favorite eco-friendly items
				</p>
			</div>
			<div className="flex gap-24">
				<SpecialOfferCard
					upperTag="Limited Time Offer!"
					title="15% off"
					subtitle="Your first order"
					lowerTag="Use code ECOLIFE15"
				/>
				<SpecialOfferCard
					upperTag="Forever Guarantee!"
					title="Free Shipping"
					subtitle="On orders over $50"
					lowerTag="Order today!"
				/>
			</div>
			<Button size="lg">Browse Products</Button>
		</section>
	);
};

export default SpecialOffers;
