import RefreshToken from "@/lib/server/models/RefreshToken";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
	// receive token from link sent to email
	await connectMongo();

	const { token } = req.query;

	const { userId } = jwt.verify(token, process.env.REGISTER_TOKEN_SECRET);

	const user = await User.findByIdAndUpdate(userId, {
		isVerified: true,
	});

	const accessToken = jwt.sign(
		{ userId: user._id },
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: +process.env.ACCESS_TOKEN_EXPIRATION_MINUTES,
		}
	);

	const refreshToken = jwt.sign(
		{ userId: user._id },
		process.env.REFRESH_TOKEN_SECRET,
		{
			expiresIn: process.env.REFRESH_TOKEN_EXPIRATION_MINUTES,
		}
	);

	const hashedRefreshToken = await bcrypt.hash(refreshToken, +process.env.SALT);

	await RefreshToken.create({ token: hashedRefreshToken, userId: user._id });

	res.status(200).json({ accessToken, refreshToken });
}
