"use client";

import ProductDetails from "./product-details/ProductDetails";
import ProductImages from "./product-images/ProductImages";
import { useState } from "react";

export default function Product({ data }) {
	const [choices, setChoices] = useState({});
	return (
		<section className="py-20 flex flex-col items-center">
			<div className="max-w-[1600px] flex justify-center gap-12">
				<ProductImages images={data.images} />
				<ProductDetails data={data} choices={choices} setChoices={setChoices} />
			</div>
		</section>
	);
}
