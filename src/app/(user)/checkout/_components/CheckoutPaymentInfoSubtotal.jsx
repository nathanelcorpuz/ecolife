"use server";

import getCartProducts from "@/lib/client/utils/test/getCartProducts";
import Subtotal from "../payment-information/_components/Subtotal";
import ComputationWrapper from "../payment-information/_components/ComputationWrapper";

export default async function CheckoutPaymentInfoSubtotal() {
	const { data: cartProducts } = await getCartProducts();

	const subtotal = cartProducts.reduce((acc, curr) => {
		return acc + curr.price * curr.quantity;
	}, 0);

	return (
		<ComputationWrapper>
			<p>Subtotal</p>
			<Subtotal subtotal={subtotal} />
		</ComputationWrapper>
	);
}
