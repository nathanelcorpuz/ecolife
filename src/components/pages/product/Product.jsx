"use client";

import ProductDetails from "./product-details/ProductDetails";
import ProductImages from "./product-images/ProductImages";
import { useState } from "react";
import ProductReviews from "./product-reviews/ProductReviews";
import ProductCard from "@/components/common/cards/ProductCard";

export default function Product({ data }) {
	const [choices, setChoices] = useState({});
	return (
		<section className="flex flex-col items-center">
			<div className="max-w-[1600px] flex justify-center gap-12 pt-20 pb-36">
				<ProductImages images={data.images} />
				<ProductDetails data={data} choices={choices} setChoices={setChoices} />
			</div>
			<ProductReviews data={data} />
			<div className="flex flex-col gap-16 py-36">
				<h1 className="text-4xl font-bold">You may also like</h1>
				<div className="flex gap-24">
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</section>
	);
}
