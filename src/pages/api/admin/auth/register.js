import Cart from "@/lib/server/models/Cart";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import ShippingInfo from "@/lib/server/models/ShippingInfo";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).json({ message: "Method not allowed" });
		return;
	}

	try {
		const verification = verifyAdminAccessToken(req);
		await connectMongo();

		if (!verification.isSuccess) {
			res.status(401).json({ message: verification.message });
			return;
		}

		const { userId } = verification;

		const { email, password } = req.body;

		const adminUser = await User.findById(userId);

		if (adminUser.role !== "admin") {
			res.status(401).json({ message: "Unauthorized" });
			return;
		}

		const hashedPassword = await bcrypt.hash(password, +process.env.SALT);

		const user = new User({
			isVerified: true,
			password: hashedPassword,
			role: "admin",
		});

		const cart = new Cart({ userId: user._id });
		const profileInfo = new ProfileInfo({ userId: user._id, email });
		const shippingInfo = new ShippingInfo({ userId: user._id });

		user.cartId = cart._id;
		user.profileInfoId = profileInfo._id;
		user.shippingInfoId = shippingInfo._id;

		await Promise.all([
			user.save(),
			cart.save(),
			profileInfo.save(),
			shippingInfo.save(),
		]);

		res.status(201).json({ message: "Admin user created" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
}
