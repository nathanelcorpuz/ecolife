"use server";

import Product from "@/components/pages/product/Product";

export default function Page({
	params = "ecosavers-silicone-food-storage-bags",
}) {
	const data = {
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
	};
	return <Product />;
}
