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
		<section className="flex flex-col items-center p-8 rounded justify-between w-[400px] h-[400px] relative">
			<Image src={productImg} className="absolute z-0" />
			<p className="self-start">{upperTag}</p>
			<div className="flex flex-col gap-4">
				<h2 className="text-4xl">{title}</h2>
				<p className="text-sm">{subtitle}</p>
			</div>
			<p className="self-end">{lowerTag}</p>
		</section>
	);
};

export default SpecialOfferCard;
