import User from "@/lib/server/models/User";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import ShippingInfo from "@/lib/server/models/ShippingInfo";
import Cart from "@/lib/server/models/Cart";

export default async function (req, res) {
	try {
		const email = req.query.userEmails[0];

		const profileInfo = await ProfileInfo.findOne({ email });

		const user = await User.findById(profileInfo.userId);

		await Cart.findByIdAndDelete(user.cartId);

		await ProfileInfo.findByIdAndDelete(user.profileInfoId);

		await ShippingInfo.findByIdAndDelete(user.shippingInfoId);

		await User.findByIdAndDelete(user._id);

		res.status(200).json({ message: "User deleted successfully." });
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
