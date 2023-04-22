"use server";

import CheckoutOrderSummaryProduct from "./CheckoutOrderSummaryProduct";
import getCartProducts from "@/lib/client/utils/test/getCartProducts";

export default async function CheckoutOrderSummaryProducts() {
	const { data: cartProducts } = await getCartProducts();

	return (
		<div>
			{cartProducts.map((product) => (
				<CheckoutOrderSummaryProduct key={product.id} product={product} />
			))}
			<div className="flex gap-12 items-center pt-8 justify-end">
				<p className="text-4xl text-standard-balanced">Subtotal</p>
				<p className="text-4xl font-bold text-accent-balanced">
					₱
					{cartProducts.reduce(
						(total, product) => total + product.price * product.quantity,
						0
					)}
				</p>
			</div>
		</div>
	);
}
