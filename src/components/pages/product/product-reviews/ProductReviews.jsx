"use client";

import Rating from "./Rating";

export default function ProductReviews({ data }) {
	return (
		<div id="reviews" className="bg-accent-dark w-[100%] text-standard-light">
			<div>
				<h1>Reviews</h1>
				<Rating rating={data.rating} isLight={true} />
			</div>
			<div>Review list</div>
		</div>
	);
}
