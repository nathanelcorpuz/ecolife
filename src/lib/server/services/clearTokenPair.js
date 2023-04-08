import { serialize } from "cookie";

export default function (res) {
	const serializedAT = serialize("accessToken", null, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: -1,
		path: "/",
	});

	const serializedRT = serialize("refreshToken", null, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: -1,
		path: "/",
	});

	res.setHeader("Set-Cookie", [serializedAT, serializedRT]);
}
