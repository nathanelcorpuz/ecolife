"use client";

import ShopByCategoryCard from "./ShopByCategoryCard";
import kitchenImg from "../../../../../public/assets/category/category-kitchen.jpg";
import personalCareImg from "../../../../../public/assets/category/category-personal-care.jpg";
import fashionImg from "../../../../../public/assets/category/category-fashion.jpg";

const categories = [
	{
		title: "Kitchen",
		imgSrc: kitchenImg,
		description:
			"Explore our range of eco-friendly fashion essentials, from reusable containers to natural cleaning supplies",
	},
	{
		title: "Personal Care",
		imgSrc: personalCareImg,
		description:
			"Pamper yourself with our selection of natural skincare and sustainable dental care products",
	},
	{
		title: "Fashion",
		imgSrc: fashionImg,
		description:
			"Stay stylish and sustainable with our collection of ethical clothing and accessories",
	},
];

const ShopByCategory = () => {
	return (
		<section className="pb-48 pt-12 flex flex-col gap-16">
			<h1 className="text-center text-accent-dark text-6xl font-bold">
				Shop by Category
			</h1>
			<div className="flex gap-32 justify-center">
				{categories.map((category) => (
					<ShopByCategoryCard key={category.title} {...category} />
				))}
			</div>
		</section>
	);
};

export default ShopByCategory;
