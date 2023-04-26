/**
 *
 * @param {NextRequest} request
 */

import bcrypt from "bcrypt";
import User from "@/lib/server/models/User";
import { NextRequest, NextResponse } from "next/server";
import generateTokenPair from "@/lib/server/utils/generateTokenPair";
import connectMongo from "@/lib/server/services/connectMongo";

export async function POST(request) {
	try {
		const { email, password } = await request.json();

		await connectMongo();

		const user = await User.findOne({ email });

		if (!user.isVerified) throw new Error("Email not verified");

		await bcrypt.compare(password, user.password);

		return await generateTokenPair(email);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ success: false, message: error.message });
	}
}
