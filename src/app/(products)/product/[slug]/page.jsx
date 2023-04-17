"use server";

import Product from "@/components/pages/product/Product";
import productImg1 from "../../../../../public/assets/products/product-1.jpg";
import productImg2 from "../../../../../public/assets/products/product-2.jpg";
import productImg3 from "../../../../../public/assets/products/product-3.jpg";
import productImg4 from "../../../../../public/assets/products/product-4.jpg";
import productImg5 from "../../../../../public/assets/products/product-5.jpg";

export default async function Page({ params }) {
	// sample fetch product api (includes reviews + related products)
	let data;
	if (params.slug === "ecosavers-silicone-food-storage-bags") {
		data = {
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
			images: [productImg1, productImg2, productImg3, productImg4, productImg5],
		};
	}
	return <Product data={data} />;
}
