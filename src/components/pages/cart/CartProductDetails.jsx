"use client";

import Checkbox from "@/components/common/inputs/Checkbox";
import Image from "next/image";
import img from "../../../../public/assets/products/product-1.jpg";
import Link from "next/link";
import ChoiceDisplay from "@/components/common/ChoiceDisplay";

export default function CartProductDetails({ product }) {
	return (
		<div className="flex gap-24">
			<Checkbox label="" />
			<div className="flex gap-4">
				<Image src={img} width={80} height={20} />
				<div className="flex flex-col items-start">
					<h1 className="text-lg font-bold underline underline-offset-4 hover:text-accent-balanced transition-all">
						<Link
							target="_blank"
							href="/product/ecosavers-silicone-food-storage-bags"
						>
							{product.title}
						</Link>
					</h1>
					<p>
						{/* format choices array to Color: Blue, Size: Medium */}
						{product.choices.map((choice, index) => (
							<ChoiceDisplay
								key={choice.title}
								choice={choice}
								product={product}
								index={index}
							/>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}
