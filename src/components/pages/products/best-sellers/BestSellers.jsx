"use client";

import Button from "@/components/common/buttons/Button";
import ProductCard from "@/components/common/cards/ProductCard";

const BestSellers = () => {
	return (
		<section className="flex flex-col gap-16 items-center py-40">
			<div className="flex flex-col text-center gap-4">
				<h1 className="text-6xl font-bold text-accent-dark">Bestsellers</h1>
				<p className="text-standard-balanced ">
					Our customers love these eco-friendly favorites
				</p>
			</div>
			<div className="flex gap-8">
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
			<Button size="lg">Explore</Button>
		</section>
	);
};

export default BestSellers;
