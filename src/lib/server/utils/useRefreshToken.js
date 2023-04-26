/**
 *
 * @param {NextRequest} request
 * @returns
 */

import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

const ACCESS_TOKEN_EXPIRATION =
	+process.env.ACCESS_TOKEN_EXPIRATION_MINUTES * 60;

const REFRESH_TOKEN_EXPIRATION =
	+process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60;

export default async function useRefreshToken(request) {
	const accessToken = request.cookies.get("accessToken");
	const refreshToken = request.cookies.get("refreshToken");

	if (!accessToken && refreshToken) {
		const refreshTokenResponse = await fetch(
			"http://localhost:3000/api/refresh-token",
			{
				method: "GET",
				cache: "no-store",
				headers: {
					"Set-Cookie": `refreshToken=${refreshToken.value}; HttpOnly; SameSite=Strict`,
				},
			}
		);

		const result = await refreshTokenResponse.json();

		if (result.success) {
			const responseCookies = refreshTokenResponse.headers
				.get("Set-Cookie")
				.split(",")
				.map((cookie) => cookie.trim());

			const accessToken = cookie.parse(responseCookies[0]).accessToken;
			const refreshToken = cookie.parse(responseCookies[1]).refreshToken;
			const nextResponse = NextResponse.next();

			nextResponse.cookies.set("accessToken", accessToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: ACCESS_TOKEN_EXPIRATION,
				path: "/",
			});

			nextResponse.cookies.set("refreshToken", refreshToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: REFRESH_TOKEN_EXPIRATION,
				path: "/",
			});

			return nextResponse;
		} else {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	if (!accessToken && !refreshToken) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
}
