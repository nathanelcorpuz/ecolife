import { NextRequest } from "next/server";
import useRefreshToken from "./lib/server/utils/useRefreshToken";

/**
 *
 * @param {NextRequest} request
 */

export async function middleware(request) {
	return await useRefreshToken(request);
}

export const config = {
	matcher: ["/cart/:path*", "/checkout/:path*", "/profile/:path*"],
};
