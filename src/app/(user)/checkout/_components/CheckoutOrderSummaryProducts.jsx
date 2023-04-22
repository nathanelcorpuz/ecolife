"use server";

import CheckoutOrderSummaryProduct from "./CheckoutOrderSummaryProduct";

const getCartProducts = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return new Promise((resolve) => {
		resolve({
			data: [
				{
					id: 1,
					title: "Product 1",
					choices: [
						{
							id: 1,
							title: "Size",
							value: "Large",
						},
						{
							id: 2,
							title: "Color",
							value: "Red",
						},
					],
					price: 100,
					quantity: 4,
				},
				{
					id: 2,
					title: "Product 2",
					choices: [
						{
							id: 1,
							title: "Size",
							value: "Small",
						},
						{
							id: 2,
							title: "Color",
							value: "Blue",
						},
					],
					price: 140,
					quantity: 7,
				},
			],
		});
	});
};

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
