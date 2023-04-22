import { cartProducts } from "./cartProducts";

export default async function getCartProducts() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return new Promise((resolve) => resolve(cartProducts));
}
