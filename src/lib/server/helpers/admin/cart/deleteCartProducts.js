import Cart from "@/lib/server/models/Cart";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";

export default async function (req, res) {
	try {
		const { email, productIds } = req.query;

		const productIdsArray = productIds.split(",");

		const profile = await ProfileInfo.findOne({ email });
		const user = await User.findById(profile.userId);
		const cart = await Cart.findById(user.cartId);

		await cart.updateOne({
			$pull: { products: { productId: { $in: productIdsArray } } },
		});

		res.status(200).json({ message: "Products deleted from cart" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
