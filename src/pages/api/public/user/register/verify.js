import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
	// receive token from link sent to email
	await connectMongo();

	const { token } = req.query;

	const { email } = jwt.verify(token, process.env.REGISTER_TOKEN_SECRET);

	const profile = await ProfileInfo.findOne({ email });

	await User.findByIdAndUpdate(profile.userId, { isVerified: true });

	const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: +process.env.ACCESS_TOKEN_EXPIRATION_MINUTES,
	});

	res.status(200).json({ accessToken });
}
