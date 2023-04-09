import Cart from "@/lib/server/models/Cart";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		res.status(405).json({ message: "Method not allowed" });
		return;
	}

	try {
		await connectMongo();

		const { cartId, productId, quantity } = req.body;

		const cart = await Cart.findById(cartId);

		if (quantity === 0) {
			cart.products = cart.products.filter(
				(product) => product.productId.toString() !== productId
			);
			await cart.save();
			res.status(200).json({ message: "Cart updated", cart });
			return;
		}

		cart.products = cart.products.map((product) => {
			if (product.productId.toString() === productId) {
				product.quantity = quantity;
			}
			return product;
		});

		await cart.save();

		res.status(200).json({ message: "Cart updated", cart });
	} catch (error) {
		res.status(500).json({ message: "Internal server error" });
		return;
	}
}
