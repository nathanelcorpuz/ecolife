import { NextResponse } from "next/server";
import verifyRegisterToken from "./lib/middleware/verifyRegisterToken";

/**
 *
 * @param {NextRequest} request
 */

export async function middleware(request) {
	// needed to handle email verification since client side routing is used
	if (request.nextUrl.pathname.startsWith("/register/verify")) {
		return verifyRegisterToken(request);
	}

	// handle auth of protected routes

	if (request.nextUrl.pathname.startsWith("/login/api")) {
		console.log("LOGIN MIDDLEWARE");
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/register/verify/:path*",
		"/cart",
		"/checkout/:path*",
		"/profile/:path*",
	],
};

/*
	protected routes
	- cart
	- checkout
	- profile
 */
