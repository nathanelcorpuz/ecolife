import Cart from "../../models/Cart";

export default async function (req, res) {
	try {
		const { cartId, productIds: ids } = req.query;

		const productIds = ids.split(",");

		const cart = await Cart.findById(cartId);

		cart.products = cart.products.filter(
			(product) => !productIds.includes(product.productId.toString())
		);

		await cart.save();

		res.status(200).json({ message: "Cart products deleted" });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
		return;
	}
}
