/**
 *
 * @param {NextRequest} request
 */

import invalidateRefreshTokens from "@/lib/server/utils/invalidateRefreshTokens";
import setHttpOnlyCookies from "@/lib/server/utils/setHttpOnlyCookies";
import {
	signAccessToken,
	signRefreshToken,
	verifyRefreshToken,
} from "@/lib/server/utils/tokenMethods";
import { NextRequest } from "next/server";
import cookie from "cookie";

export async function GET(request) {
	const { refreshToken } = cookie.parse(request.headers.get("set-cookie"));

	const { email } = verifyRefreshToken(refreshToken);

	const newAccessToken = signAccessToken(email);

	await invalidateRefreshTokens(email);

	const newRefreshToken = signRefreshToken(email);

	const cookies = setHttpOnlyCookies({
		accessToken: newAccessToken,
		refreshToken: newRefreshToken,
	});

	return new Response(JSON.stringify({ success: true }), {
		status: 200,
		headers: {
			"Set-Cookie": cookies,
		},
	});
}
