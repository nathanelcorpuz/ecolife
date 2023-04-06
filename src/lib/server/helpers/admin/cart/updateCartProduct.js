import Cart from "@/lib/server/models/Cart";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";

export default async function (req, res) {
	try {
		const { userEmail } = req.query;
		const { productId, quantity, options } = req.body;
		const profile = await ProfileInfo.findOne({ email: userEmail });
		const user = await User.findById(profile.userId);
		const cart = await Cart.findById(user.cartId);

		if (quantity === 0) {
			cart.products = cart.products.filter(
				(product) => !product.productId.equals(productId)
			);
			await cart.save();
			res.status(200).json({ success: true, message: "Product removed" });
			return;
		}

		const product = cart.products.find((product) =>
			product.productId.equals(productId)
		);

		product.quantity = quantity;
		product.options = [];

		for (const option of options) {
			product.options.push(option);
		}

		await cart.save();
		res.status(200).json({ success: true, message: "Quantity updated" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
