"use server";

import Product from "@/components/pages/product/Product";
import productImg1 from "../../../../../public/assets/products/product-1.jpg";
import productImg2 from "../../../../../public/assets/products/product-2.jpg";
import productImg3 from "../../../../../public/assets/products/product-3.jpg";
import productImg4 from "../../../../../public/assets/products/product-4.jpg";
import productImg5 from "../../../../../public/assets/products/product-5.jpg";

// save image ids in db

const getProduct = (slug) => {
	// sample query product by slug from db
	if (slug === "ecosavers-silicone-food-storage-bags") {
		return {
			title: "EcoSavers Silicone Food Storage Bags",
			description:
				"Introducing our EcoSavers Silicone Food Storage Bags - the ultimate solution for eco-friendly food storage. Replace single-use plastic bags with these durable, reusable, and leak-proof silicone bags. Ideal for storing snacks, leftovers, and meal prep ingredients, these bags are a must-have for a sustainable kitchen.",
			options: [
				{
					title: "Color",
					value: "Blue",
				},
				{
					title: "Size",
					value: "Small",
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
				{
					uuid: "product-5",
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
