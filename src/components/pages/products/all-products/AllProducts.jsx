"use client";

import FilterControls from "./filter-controls/FilterControls";
import ProductTiles from "./ProductTiles";

const AllProducts = () => {
	return (
		<section className="flex flex-col gap-16 bg-accent-light items-start py-52 ps-48">
			<div className="flex flex-col gap-4">
				<h1 className="text-6xl text-accent-dark font-bold">All Products</h1>
				<p className="text-lg text-standard-balanced">
					Find the perfect eco-friendly items for your home, wardrobe, and
					lifestyle
				</p>
			</div>
			<div className="flex gap-24">
				<FilterControls />
				<ProductTiles />
			</div>
		</section>
	);
};

export default AllProducts;
