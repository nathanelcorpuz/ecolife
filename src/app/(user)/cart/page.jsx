"use server";

import Cart from "@/components/pages/cart/Cart";

const getCart = async () => {
	const fakeFetch = () =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					data: [
						{
							id: 1,
							name: "Product 1",
							price: 100,
							quantity: 1,
							choices: [
								{
									title: "Size",
									value: "Large",
								},
								{
									title: "Color",
									value: "Red",
								},
							],
						},
						{
							id: 2,
							name: "Product 2",
							price: 200,
							quantity: 2,
							choices: [
								{
									title: "Size",
									value: "Small",
								},
								{
									title: "Color",
									value: "Blue",
								},
							],
						},
					],
				});
			}, 1500);
		});
	return await fakeFetch();
};

export default async function Page() {
	const { data } = await getCart();
	return <Cart data={data} />;
}
