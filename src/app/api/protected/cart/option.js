import Cart from "@/lib/server/models/Cart";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAccessToken from "@/lib/server/services/verifyAccessToken";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		res.status(405).json({ message: "Method not allowed" });
		return;
	}

	try {
		const verification = verifyAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();

		const { cartId, productId, optionId, value } = req.body;

		const cart = await Cart.findById(cartId);

		const product = cart.products.find(
			(product) => product.productId.toString() === productId
		);

		const option = product.options.find(
			(option) => option.optionId.toString() === optionId
		);

		option.value = value;

		await cart.save();

		res.status(200).json({ message: "Cart updated", cart });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
		return;
	}
}
