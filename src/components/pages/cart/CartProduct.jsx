"use client";

import CartProductDetails from "./CartProductDetails";
import CartQuantity from "./CartQuantity";

export default function ({ product }) {
	const { price, quantity } = product;
	return (
		<tr className="border-b-[1px] border-b-standard-light-200">
			<th className="p-4">
				<CartProductDetails product={product} />
			</th>
			<th className="p-4 px-24">₱{price}</th>
			<th className="p-4 px-24">
				<CartQuantity quantity={quantity} />
			</th>
			<th className="p-4 px-24">₱{quantity * price}</th>
			<th className="p-4 px-24">Delete button</th>
		</tr>
	);
}
