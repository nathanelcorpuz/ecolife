import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { serialize } from "cookie";

const SECRET = process.env.ADMIN_ACCESS_TOKEN_SECRET;
const EXPIRATION = +process.env.ADMIN_ACCESS_TOKEN_EXPIRATION_MINUTES * 60;

export default function (userId, res) {
	const adminAccessToken = jwt.sign({ userId }, SECRET, {
		expiresIn: EXPIRATION,
	});
	const serializedAT = serialize("adminAccessToken", adminAccessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: EXPIRATION,
		path: "/",
	});
	res.setHeader("Set-Cookie", serializedAT);
}
