"use client";

import Button from "@/components/common/buttons/Button";
import ProductCard from "@/components/common/cards/ProductCard";

const Category = ({ title, products }) => {
	return (
		<main className="flex flex-col p-40 pt-24 items-center gap-12">
			<section className="flex flex-col gap-4 items-center">
				<h1 className="text-6xl font-bold text-accent-dark">{title}</h1>
				<p className="text-lg text-standard-balanced">
					Our customers love these eco-friendly favorites
				</p>
			</section>
			<section className="flex flex-wrap gap-24 justify-center">
				{products.map((product) => (
					<ProductCard key={product.id} />
				))}
			</section>
			<Button size="lg">Load More</Button>
		</main>
	);
};

export default Category;
