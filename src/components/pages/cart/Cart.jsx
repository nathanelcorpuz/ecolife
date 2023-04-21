"use client";

import CartProduct from "./CartProduct";

export default function Cart({ products }) {
	return (
		<section>
			<h1 className="text-6xl text-center">Your Shopping Cart</h1>
			<p>Review your items before checking out</p>
			<table>
				<thead>
					<tr>
						<th className="text-standard-balanced p-4">Product</th>
						<th className="text-standard-balanced p-4">Price</th>
						<th className="text-standard-balanced p-4">Quantity</th>
						<th className="text-standard-balanced p-4">Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<CartProduct key={product.id} product={product} />
					))}
				</tbody>
			</table>
		</section>
	);
}
