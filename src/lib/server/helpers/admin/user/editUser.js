import ProfileInfo from "@/lib/server/models/ProfileInfo";
import ShippingInfo from "@/lib/server/models/ShippingInfo";
import User from "@/lib/server/models/User";

export default async function (req, res) {
    try {
		const profileInfo = await ProfileInfo.findOneAndUpdate(
			{
				email: req.query.userEmails[0],
			},
			req.body.newProfileInfo
		);

		const user = await User.findById(profileInfo.userId);

		const shippingInfo = await ShippingInfo.findByIdAndUpdate(
			user.shippingInfoId,
			req.body.newShippingInfo
		);

		res.status(200).json({ user, profileInfo, shippingInfo });
	} catch (error) {
		res.status(400).json(error);
	}
}
