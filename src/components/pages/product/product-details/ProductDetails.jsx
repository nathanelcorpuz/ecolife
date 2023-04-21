"use client";

import ProductChoices from "./ProductChoices";
import Rating from "../product-reviews/Rating";

const roundPrice = (price) => {
	return (Math.round(price * 100) / 100).toFixed(2);
};

export default function ProductDetails({ data, choices, setChoices }) {
	return (
		<section className="flex flex-col gap-8">
			<h1 className="text-5xl font-bold">{data.title}</h1>
			<div className="flex items-center gap-4">
				<Rating rating={data.rating} isLight={false} />
				<a
					className="italic font-bold underline text-accent-balanced hover:text-accent-dark transition-all"
					href="#reviews"
				>
					{data.numOfReviews} reviews
				</a>
			</div>
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

			<button className="bg-accent-balanced text-standard-light font-bold text-3xl py-8 hover:scale-[1.02] transition-all rounded">
				Add to cart
			</button>
		</section>
	);
}
