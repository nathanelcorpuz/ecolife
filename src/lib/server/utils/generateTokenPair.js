import bcrypt from "bcrypt";
import User from "../models/User";
import connectMongo from "../services/connectMongo";
import RefreshToken from "../models/RefreshToken";
import setHttpOnlyCookies from "./setHttpOnlyCookies";
import { signAccessToken, signRefreshToken } from "./tokenMethods";

const signTokens = async (email) => {
	const user = await User.findOneAndUpdate({ email }, { isVerified: true });

	const accessToken = signAccessToken(user.email);

	const refreshToken = signRefreshToken(user.email);

	const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

	await RefreshToken.create({ token: hashedRefreshToken, userId: user._id });

	return { accessToken, refreshToken };
};

export default async function generateTokenPair(email) {
	await connectMongo();

	const { accessToken, refreshToken } = await signTokens(email);

	const cookies = setHttpOnlyCookies({ accessToken, refreshToken });

	return new Response(JSON.stringify({ success: true }), {
		status: 200,
		headers: { "Set-Cookie": cookies },
	});
}
