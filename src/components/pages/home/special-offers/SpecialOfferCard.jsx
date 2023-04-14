"use client";

import Image from "next/image";
import productImg from "../../../../../public/assets/products/product-1.jpg";

const SpecialOfferCard = ({
	upperTag = "Sample tag",
	title = "Sample title",
	subtitle = "Sample subtitle",
	lowerTag = "Sample lower tag",
}) => {
	return (
		<section
			className="
			flex flex-col items-center p-8 rounded 
			justify-between w-[550px] h-[550px] relative
			border border-standard-light cursor-pointer
			transition-all duration-700
			hover:scale-[1.05] hover:shadow-2xl
			"
		>
			<Image
				src={productImg}
				alt="test"
				fill
				className="
				absolute z-[-2] top-0 right-0 bottom-0 left-0 
				object-cover object-top rounded
				"
			/>
			<div
				className="
				absolute top-0 right-0 bottom-0 left-0 
				bg-accent-dark opacity-[0.8] z-[-1]
				"
			/>
			<p className="self-start text-standard-balanced italic">{upperTag}</p>
			<div className="flex flex-col gap-4 text-center">
				<h2 className="text-5xl font-bold text-accent-light">{title}</h2>
				<p className="text-lg text-accent-light-300">{subtitle}</p>
			</div>
			<p className="self-end text-standard-light font-bold">{lowerTag}</p>
		</section>
	);
};

export default SpecialOfferCard;
