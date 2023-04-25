import { NextResponse } from "next/server";
import verifyRegisterToken from "./lib/middleware/verifyRegisterToken";

/**
 *
 * @param {NextRequest} request
 */

export async function middleware(request) {
	if (request.nextUrl.pathname.startsWith("/register/verify")) {
		return verifyRegisterToken(request);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/register/verify/:path*"],
};
