import jwt from "jsonwebtoken";

export default function (req) {
	try {
		const decodedToken = jwt.verify(
			req.cookies.accessToken,
			process.env.ADMIN_ACCESS_TOKEN_SECRET
		);
		return {
			isSuccess: true,
			userId: decodedToken.userId,
		};
	} catch (error) {
		console.log(error);
		if (error.message === "jwt expired") {
			return {
				isSuccess: false,
				message: "access expired",
			};
		}
		return {
			isSuccess: false,
			message: "invalid access token",
		};
	}
}
