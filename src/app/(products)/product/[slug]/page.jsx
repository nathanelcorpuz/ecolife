"use server";

import Product from "@/components/pages/product/Product";

// save image ids in db

const getProduct = (slug) => {
	// sample query product by slug from db
	if (slug === "ecosavers-silicone-food-storage-bags") {
		return {
			title: "EcoSavers Silicone Food Storage Bags",
			price: 500,
			rating: 4.33,
			numOfReviews: 117,
			inStock: true,
			description:
				"Introducing our EcoSavers Silicone Food Storage Bags - the ultimate solution for eco-friendly food storage. Replace single-use plastic bags with these durable, reusable, and leak-proof silicone bags. Ideal for storing snacks, leftovers, and meal prep ingredients, these bags are a must-have for a sustainable kitchen.",
			choices: [
				{
					title: "Color",
					options: [
						{
							value: "blue",
							label: "Blue",
						},
						{
							value: "green",
							label: "Green",
						},
						{
							value: "red",
							label: "Red",
						},
					],
				},
				{
					title: "Size",
					options: [
						{
							value: "small",
							label: "Small",
						},
						{
							value: "medium",
							label: "Medium",
						},
						{
							value: "large",
							label: "Large",
						},
					],
				},
			],
			images: [
				{
					uuid: "product-1",
					url: "https://example.com",
				},
				{
					uuid: "product-2",
					url: "https://example.com",
				},
				{
					uuid: "product-3",
					url: "https://example.com",
				},
				{
					uuid: "product-4",
					url: "https://example.com",
				},
			],
		};
	}
};

export default async function Page({ params }) {
	// sample fetch product api (includes reviews + related products)
	const data = getProduct(params.slug);
	return <Product data={data} />;
}
