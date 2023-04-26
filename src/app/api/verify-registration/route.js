import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import generateTokenPair from "@/lib/server/utils/generateTokenPair";

const REGISTRATION_SECRET = process.env.REGISTER_TOKEN_SECRET;

/**
 *
 * @param {NextRequest} request
 */

export async function PUT(request) {
	const { token } = await request.json();

	try {
		const { email } = jwt.verify(token, REGISTRATION_SECRET);

		return await generateTokenPair(email);
	} catch (error) {
		console.log("\n\nerror:");
		console.log(error);
		return NextResponse.json({ success: false, message: "invalid token" });
	}
}
