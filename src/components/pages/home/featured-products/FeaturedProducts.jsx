"use client";

import Button from "@/components/common/buttons/Button";
import ProductCard from "@/components/common/cards/ProductCard";

const FeaturedProducts = () => {
	return (
		<section className="flex flex-col py-52 gap-24 items-center bg-accent-light-100">
			<div className="flex flex-col gap-2 text-center">
				<h2 className="text-5xl text-accent-dark font-bold">
					Featured Products
				</h2>
				<p className="text-base text-standard-balanced">
					Curated eco-friendly essentials for your everyday life
				</p>
			</div>
			<div className="flex flex-wrap justify-start gap-x-24">
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
			<Button size="lg">Explore More</Button>
		</section>
	);
};

export default FeaturedProducts;
