import jwt from "jsonwebtoken";

export default function (req, res) {
	try {
		const { accessToken } = req.cookies;
		return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
	} catch (error) {
		console.log(error);
		return error.message;
	}
}
