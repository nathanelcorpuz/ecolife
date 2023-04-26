import { NextRequest, NextResponse } from "next/server";

// try again tomorrow

/**
 *
 * @param {NextRequest} request
 */

export async function middleware(request) {
	console.log("\n\n middleware runs \n\n");
	return NextResponse.next();
}

export const config = {
	matcher: ["/cart/:path*", "/checkout/:path*", "/profile/:path*"],
};
