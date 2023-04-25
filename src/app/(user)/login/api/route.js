/**
 *
 * @param {NextRequest} request
 */

import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
	const { email, password } = await request.json();

	return NextResponse.json({ success: true, message: "user created" });
}
