import Cart from "@/lib/server/models/Cart";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ success: false });
	}
	try {
		await connectMongo();
		const { userId, product } = req.body;

		// get user
		const user = await User.findById(userId);
		// get cart from user id and push product to cart
		await Cart.findByIdAndUpdate(user.cartId, { $push: { products: product } });

		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(500).json({ success: false });
	}
}
