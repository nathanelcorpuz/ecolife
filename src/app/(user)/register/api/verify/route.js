// Official logic below

import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/server/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import connectMongo from "@/lib/server/services/connectMongo";
import RefreshToken from "@/lib/server/models/RefreshToken";
import cookie from "cookie";

const REGISTRATION_SECRET = process.env.REGISTER_TOKEN_SECRET;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRATION =
	+process.env.ACCESS_TOKEN_EXPIRATION_MINUTES * 60;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const REFRESH_TOKEN_EXPIRATION =
	+process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60;

/**
 *
 * @param {NextRequest} request
 */

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const token = searchParams.get("token");

	try {
		const decodedToken = jwt.verify(token, REGISTRATION_SECRET);

		await connectMongo();

		// find and update user to verified if decode is successful
		const user = await User.findOneAndUpdate(
			{ email: decodedToken.email },
			{ isVerified: true }
		);

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

		const accessTokenCookie = cookie.serialize("accessToken", accessToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: ACCESS_TOKEN_EXPIRATION,
			path: "/",
		});

		const refreshTokenCookie = cookie.serialize("refreshToken", refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: REFRESH_TOKEN_EXPIRATION,
			path: "/",
		});

		return new Response(
			{ success: true },
			{
				status: 200,
				headers: {
					"Set-Cookie": [accessTokenCookie, refreshTokenCookie],
				},
			}
		);
	} catch (error) {
		console.log("\n\nerror:");
		console.log(error);
		return NextResponse.json({ success: false, message: "invalid token" });
	}
}
