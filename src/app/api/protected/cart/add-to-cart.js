import Cart from "@/lib/server/models/Cart";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAccessToken from "@/lib/server/services/verifyAccessToken";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ success: false });
	}
	try {
		const verification = verifyAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();

		const { userId } = verification;

		const { product } = req.body;

		const user = await User.findById(userId);

		await Cart.findByIdAndUpdate(user.cartId, { $push: { products: product } });

		return res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false });
	}
}
