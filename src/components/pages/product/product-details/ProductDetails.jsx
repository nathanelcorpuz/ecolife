"use client";

import Dropdown from "@/components/common/inputs/dropdown/Dropdown";
import { useState } from "react";
import ProductChoices from "./ProductChoices";

const roundPrice = (price) => {
	return (Math.round(price * 100) / 100).toFixed(2);
};

export default function ProductDetails({ data, choices, setChoices }) {
	return (
		<section className="flex flex-col gap-6">
			<h1 className="text-5xl font-bold">{data.title}</h1>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-1">
					<p className="text-3xl text-accent-balanced">
						₱{roundPrice(data.price)}
					</p>
					<p className="text-sm line-through text-standard-light-300">
						₱{roundPrice(data.price * 2)}
					</p>
				</div>
				<p className="italic text-accent-balanced">
					{data.inStock && "In stock"}
				</p>
			</div>
			<ProductChoices
				fetchedChoices={data.choices}
				choices={choices}
				setChoices={setChoices}
			/>
			<p>{data.description}</p>
		</section>
	);
}
