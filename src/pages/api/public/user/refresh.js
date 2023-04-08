import RefreshToken from "@/lib/server/models/RefreshToken";
import clearTokenPair from "@/lib/server/services/clearTokenPair";
import connectMongo from "@/lib/server/services/connectMongo";
import createTokenPair from "@/lib/server/services/createTokenPair";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

export default async function handler(req, res) {
	try {
		await connectMongo();
		// get access token and refresh token from cookies
		const { accessToken, refreshToken } = req.cookies;

		// verify and increment usage of RT
		const { userId } = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

		const refreshTokenDoc = await RefreshToken.findOneAndUpdate(
			{ userId, isValid: true },
			{ $inc: { numOfTimesUsed: 1 } }
		);

		// if AT is not expired, unauthorized user is using RT manually to get new AT
		try {
			const decodedToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
			const { userId } = decodedToken;
			await RefreshToken.updateMany({ userId }, { isValid: false });
			clearTokenPair(res);
			return res
				.status(500)
				.json({ success: false, message: "Unauthorized access" });
		} catch (error) {
			console.log(error);
		}

		// Validate RT
		const validRefreshToken = await bcrypt.compare(
			refreshToken,
			refreshTokenDoc.token
		);

		// if RT valid, create new AT and RT
		if (validRefreshToken) {
			await createTokenPair(userId, res);
		}

		// if RT invalid, invalidate all RTs
		if (!validRefreshToken) {
			await RefreshToken.updateMany(
				{ userId: decoded.userId },
				{ isValid: false }
			);
			clearTokenPair(res);
			throw new Error("Unauthorized access");
		}

		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error" });
	}
}
