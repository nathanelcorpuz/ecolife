"use client";

import Button from "@/components/common/buttons/Button";
import Rating from "./Rating";
import Review from "./Review";

export default function ProductReviews({ data }) {
	const buttonClass =
		"text-accent-light-green-300 bg-accent-dark border border-accent-light-green-300 rounded hover:bg-accent-light-green-300 hover:text-standard-dark transition-all p-4";
	return (
		<div
			id="reviews"
			className="bg-accent-dark w-[100%] text-standard-light flex justify-center py-24"
		>
			<div className="flex gap-24 w-[1600px]">
				<div className="flex flex-col gap-4 w-[max-content] whitespace-nowrap">
					<div className="flex gap-4 items-center">
						<h1 className="text-7xl font-bold text-accent-light-green-300">
							{data.rating}
						</h1>
						<div className="flex flex-col gap-2">
							<Rating rating={data.rating} isLight={true} />
							<p className="text-standard-balanced italic">
								{data.numOfReviews} reviews
							</p>
						</div>
					</div>
					<Button className={`${buttonClass} font-bold text-lg`}>
						Write a review
					</Button>
				</div>
				<div className="w-[80%] flex flex-col gap-8">
					<div className="w-[100%] flex flex-col gap-8">
						{data.reviews.map((review) => (
							<Review key={review.description} review={review} />
						))}
					</div>
					<Button
						light
						className={`${buttonClass} font-bold px-8`}
						style={{ alignSelf: "start" }}
					>
						Load more
					</Button>
				</div>
			</div>
		</div>
	);
}
