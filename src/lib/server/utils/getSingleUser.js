import Cart from "../models/Cart";
import Order from "../models/Order";
import ProfileInfo from "../models/ProfileInfo";
import Review from "../models/Review";
import ShippingInfo from "../models/ShippingInfo";
import User from "../models/User";

export default async function (email) {
	try {
		const profileInfo = await ProfileInfo.findOne({ email });

		const user = await User.findById(profileInfo.userId).select("-password");

		const shippingInfo = await ShippingInfo.findById(user.shippingInfoId);

		const cart = await Cart.findById(user.cartId);

		const reviews = await Review.find({ userId: user._id });

		const orders = await Order.find({ userId: user._id });

		return { user, profileInfo, shippingInfo, cart, reviews, orders };
	} catch (error) {
		throw new Error(error);
	}
}
