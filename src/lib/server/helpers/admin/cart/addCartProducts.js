import Cart from "@/lib/server/models/Cart";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";

export default async function (req, res) {
	try {
		const { userEmail } = req.query;
		const profile = await ProfileInfo.findOne({ email: userEmail });
		const user = await User.findById(profile.userId);
		await Cart.findByIdAndUpdate(user.cartId, {
			$push: { products: req.body },
		});
		res.status(200).json({ message: "Products added to cart" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
