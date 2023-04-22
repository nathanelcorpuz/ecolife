"use client";

import DeleteIcon from "@/components/common/icons/DeleteIcon";
import CartProductDetails from "./CartProductDetails";
import CartQuantity from "./CartQuantity";

export default function ({ product }) {
	const { price, quantity } = product;
	return (
		<tr className="border-b-[1px] border-b-standard-light-200">
			<th className="py-12">
				<CartProductDetails product={product} />
			</th>
			<th className="py-12 px-24">
				<p className="text-lg font-normal text-standard-balanced">₱{price}</p>
			</th>
			<th className="py-12 px-24">
				<CartQuantity quantity={quantity} />
			</th>
			<th className="py-12 px-24">
				<p className="text-lg font-bold">₱{quantity * price}</p>
			</th>
			<th className="py-12 ps-24">
				<button className="p-2 opacity-20 hover:bg-standard-light-300 rounded-full transition-all duration-300">
					<DeleteIcon />
				</button>
			</th>
		</tr>
	);
}
