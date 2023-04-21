// GPT-4 assisted component

import React from "react";
import { v4 as uuidv4 } from "uuid";
import Star from "./Star";

const Rating = ({ rating = 3.67, isLight = false }) => {
	const fullStars = Math.floor(rating);
	const partialStar = (rating % 1).toFixed(2);
	const emptyStars = 5 - Math.ceil(rating);

	return (
		<div className="flex items-center">
			{/* render full stars */}
			{[...Array(fullStars)].map(() => (
				<Star key={uuidv4()} fillPercentage={100} isLight={isLight} />
			))}
			{/* render the partial star */}
			{partialStar > 0 && (
				<Star fillPercentage={partialStar * 100} isLight={isLight} />
			)}
			{/* render empty stars */}
			{[...Array(emptyStars)].map(() => (
				<Star key={uuidv4()} fillPercentage={0} isLight={isLight} />
			))}
		</div>
	);
};

export default Rating;
