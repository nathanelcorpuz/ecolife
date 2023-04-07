import jwt from "jsonwebtoken";

export default function (req) {
	return jwt.verify(
		req.headers.authorization.slice(7),
		process.env.ACCESS_TOKEN_SECRET
	);
}
