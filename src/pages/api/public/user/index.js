import Cart from "@/lib/server/models/Cart";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import ShippingInfo from "@/lib/server/models/ShippingInfo";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAccessToken from "@/lib/server/services/verifyAccessToken";

export default async function handler(req, res) {
	try {
		const decodedToken = verifyAccessToken(req, res);

		if (decodedToken === "jwt expired") {
			throw new Error("access expired");
		}

		const { userId } = decodedToken;

		await connectMongo();

		const user = await User.findById(userId);

		const profileInfo = await ProfileInfo.findById(user.profileInfoId);

		const shippingInfo = await ShippingInfo.findById(user.shippingInfoId);

		const cart = await Cart.findById(user.cartId);

		res.json({ profileInfo, shippingInfo, cart });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
}
