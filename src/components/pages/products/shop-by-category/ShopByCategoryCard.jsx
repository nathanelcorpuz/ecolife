"use client";

import Image from "next/image";
import defaultImg from "../../../../../public/assets/category/category-fashion.jpg";

const ShopByCategoryCard = ({
	title = "Title",
	imgSrc = defaultImg,
	description = "Explore our range of eco-friendly kitchen essentials, from reusable containers to natural cleaning supplies",
}) => {
	return (
		<section className="flex flex-col gap-4 items-center cursor-pointer text-center w-[400px] hover:scale-[1.03] hover:shadow-lg transition-all duration-500 p-5 rounded">
			<h2 className="text-3xl text-standard-dark font-bold">{title}</h2>
			<div className="w-[400px] h-[300px] relative">
				<Image
					fill
					className="object-cover object-center absolute"
					alt="test"
					src={imgSrc}
				/>
			</div>
			<p className="text-lg text-standard-balanced">{description}</p>
		</section>
	);
};

export default ShopByCategoryCard;
