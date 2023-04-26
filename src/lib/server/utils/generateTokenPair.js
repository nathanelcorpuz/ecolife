import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import connectMongo from "../services/connectMongo";
import RefreshToken from "../models/RefreshToken";
import setHttpOnlyCookies from "./setHttpOnlyCookies";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRATION =
	+process.env.ACCESS_TOKEN_EXPIRATION_MINUTES * 60;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const REFRESH_TOKEN_EXPIRATION =
	+process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60;

const signTokens = async (email) => {
	// find and update user to verified if decode is successful
	const user = await User.findOneAndUpdate({ email }, { isVerified: true });

	// create access token
	const accessToken = jwt.sign({ email: user.email }, ACCESS_TOKEN_SECRET, {
		expiresIn: ACCESS_TOKEN_EXPIRATION,
	});

	// create refresh token
	const refreshToken = jwt.sign({ email: user.email }, REFRESH_TOKEN_SECRET, {
		expiresIn: REFRESH_TOKEN_EXPIRATION,
	});

	// hash refresh token
	const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

	// save hashed refresh token in db
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
