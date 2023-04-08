import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import RefreshToken from "../models/RefreshToken";
import { serialize } from "cookie";

const AT_SECRET = process.env.ACCESS_TOKEN_SECRET;
const AT_EXPIRATION = +process.env.ACCESS_TOKEN_EXPIRATION_MINUTES * 60;
const RT_SECRET = process.env.REFRESH_TOKEN_SECRET;
const RT_EXPIRATION = +process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60;
const SALT = +process.env.SALT;

export default async function (userId, res) {
	// always invalidate all previous refresh tokens before creating new ones
	await RefreshToken.updateMany({ userId }, { isValid: false });
	const accessToken = jwt.sign({ userId }, AT_SECRET, {
		expiresIn: AT_EXPIRATION,
	});
	const refreshToken = jwt.sign({ userId }, RT_SECRET, {
		expiresIn: RT_EXPIRATION,
	});
	const hashedRefreshToken = await bcrypt.hash(refreshToken, SALT);
	await RefreshToken.create({ token: hashedRefreshToken, userId });
	const serializedAT = serialize("accessToken", accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: AT_EXPIRATION,
		path: "/",
	});
	const serializedRT = serialize("refreshToken", refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: RT_EXPIRATION,
		path: "/",
	});
	res.setHeader("Set-Cookie", [serializedAT, serializedRT]);
}
