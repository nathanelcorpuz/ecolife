import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import generateTokenPair from "@/lib/server/utils/generateTokenPair";

const REGISTRATION_SECRET = process.env.REGISTER_TOKEN_SECRET;

/**
 *
 * @param {NextRequest} request
 */

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const token = searchParams.get("token");

	try {
		const { email } = jwt.verify(token, REGISTRATION_SECRET);

		return generateTokenPair(email);
	} catch (error) {
		console.log("\n\nerror:");
		console.log(error);
		return NextResponse.json({ success: false, message: "invalid token" });
	}
}
