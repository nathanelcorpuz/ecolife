"use client";

import CardContainer from "./CardContainer";
import CardImage from "./CardImage";
import productImg1 from "../../../../public/assets/products/product-1.jpg";
import productImg2 from "../../../../public/assets/products/product-2.jpg";
import productImg3 from "../../../../public/assets/products/product-3.jpg";
import productImg4 from "../../../../public/assets/products/product-4.jpg";
import productImg5 from "../../../../public/assets/products/product-5.jpg";
import productImg6 from "../../../../public/assets/products/product-6.jpg";
import productImg7 from "../../../../public/assets/products/product-7.jpg";
import productImg8 from "../../../../public/assets/products/product-8.jpg";
import productImg9 from "../../../../public/assets/products/product-9.jpg";
import productImg10 from "../../../../public/assets/products/product-10.jpg";
import productImg11 from "../../../../public/assets/products/product-11.jpg";
import AddToCartIcon from "./AddToCartIcon";

const ProductCard = ({ size }) => {
	const randomizedImg = Math.floor(Math.random() * 11) + 1;

	const getRandomImg = () => {
		switch (randomizedImg) {
			case 1:
				return productImg1;
			case 2:
				return productImg2;
			case 3:
				return productImg3;
			case 4:
				return productImg4;
			case 5:
				return productImg5;
			case 6:
				return productImg6;
			case 7:
				return productImg7;
			case 8:
				return productImg8;
			case 9:
				return productImg9;
			case 10:
				return productImg10;
			case 11:
				return productImg11;
			default:
				return productImg1;
		}
	};

	if (size === "sm") {
		return (
			<CardContainer size={size}>
				<CardImage size={size} src={getRandomImg()} />
				<div className="flex flex-col gap-3 p-4 pt-0">
					<h2 className="text-standard-dark text-base">
						EcoSavers Silicone Food Storage Bags
					</h2>
					<p className="text-standard-balanced text-sm">
						Kitchen - Reusable containers
					</p>
					<div className="flex items-center justify-between">
						<p className="text-accent-balanced text-xl font-bold">₱500</p>
						<AddToCartIcon />
					</div>
				</div>
			</CardContainer>
		);
	}

	return (
		<CardContainer size={size}>
			<CardImage size={size} src={getRandomImg()} />
			<div className="flex flex-col gap-3 p-4 pt-0">
				<h2 className="text-standard-dark text-xl">
					EcoSavers Silicone Food Storage Bags
				</h2>
				<p className="text-standard-balanced text-sm">
					Kitchen - Reusable containers
				</p>
				<div className="flex items-center justify-between">
					<p className="text-accent-balanced text-xl font-bold">₱500</p>
					<AddToCartIcon />
				</div>
			</div>
		</CardContainer>
	);
};

export default ProductCard;
