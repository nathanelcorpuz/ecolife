import { NextResponse, NextRequest } from "next/server";
import User from "@/lib/server/models/User";
import Cart from "@/lib/server/models/Cart";
import bcrypt from "bcrypt";
import connectMongo from "@/lib/server/services/connectMongo";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import ShippingInfo from "@/lib/server/models/ShippingInfo";
import sendVerificationEmail from "@/lib/server/utils/sendVerificationEmail";

/**
 *
 * @param {NextRequest} request
 */

const SALT = +process.env.SALT;

export async function POST(request) {
	const { email, password } = await request.json();

	await connectMongo();

	const hashedPassword = await bcrypt.hash(password, SALT);

	const user = new User({ email, password: hashedPassword });

	const userId = user._id;

	const cart = new Cart({ userId });

	const profileInfo = new ProfileInfo({ email, userId });

	const shippingInfo = new ShippingInfo({ userId });

	await Promise.all([
		user.save(),
		cart.save(),
		profileInfo.save(),
		shippingInfo.save(),
	]);

	await sendVerificationEmail(email);

	return NextResponse.json({ success: true, message: "user created" });
}
