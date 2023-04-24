import User from "@/lib/server/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectMongo from "@/lib/server/services/connectMongo";

const SALT = +process.env.SALT;

export async function POST(request) {
	const { email, password } = await request.json();

	await connectMongo();

	// encrypt password
	// save in db
	// send verification email

	const hashedPassword = await bcrypt.hash(password, SALT);

	const user = new User({ email, password: hashedPassword });

	await user.save();

	return NextResponse.json({ message: "success" });
}
