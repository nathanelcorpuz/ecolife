import { serialize } from "cookie";

export default function (res) {
	const serializedAT = serialize("adminAccessToken", null, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: -1,
		path: "/",
	});

	res.setHeader("Set-Cookie", serializedAT);
}
