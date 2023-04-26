/**
 *
 * @param {NextRequest} request
 */

import { NextRequest, NextResponse } from "next/server";

export function GET(request) {
	// check if incoming request has valid token
	const accessToken = request.cookies.get("sample");

	console.log("\n\n accessToken");
	console.log(accessToken);

	return NextResponse.json({ accessToken });
}
