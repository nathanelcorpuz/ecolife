import { NextResponse } from "next/server";

export default async function verifyRegisterToken(request) {
	const segments = request.nextUrl.pathname.split("/");
	const token = segments[segments.length - 1];

	const fetchResponse = await fetch(
		`http://localhost:3000/register/api/verify?token=${token}`,
		{
			method: "GET",
			cache: "no-store",
		}
	);

	const cookies = fetchResponse.headers.get("set-cookie");

	if (fetchResponse.status !== 200 || !cookies) {
		return NextResponse.redirect("http://localhost:3000/register/error");
	}

	const sanitizedCookies = cookies.split(",").map((cookie) => cookie.trim());

	const response = NextResponse.next({
		status: fetchResponse.status,
		headers: {
			"set-cookie": sanitizedCookies,
		},
	});

	return response;
}
