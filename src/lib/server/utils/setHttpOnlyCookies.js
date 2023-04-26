import cookie from "cookie";

const ACCESS_TOKEN_EXPIRATION =
	+process.env.ACCESS_TOKEN_EXPIRATION_MINUTES * 60;
const REFRESH_TOKEN_EXPIRATION =
	+process.env.REFRESH_TOKEN_EXPIRATION_MINUTES * 60;

export default function setHttpOnlyCookies({ accessToken, refreshToken }) {
	const accessTokenCookie = cookie.serialize("accessToken", accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: ACCESS_TOKEN_EXPIRATION,
		path: "/",
	});

	const refreshTokenCookie = cookie.serialize("refreshToken", refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: REFRESH_TOKEN_EXPIRATION,
		path: "/",
	});

	return [accessTokenCookie, refreshTokenCookie];
}
