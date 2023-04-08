import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import jwt from "jsonwebtoken";
import createTokenPair from "@/lib/server/services/createTokenPair";

export default async function handler(req, res) {
	// receive token from link sent to email
	await connectMongo();

	const { token } = req.query;

	const { userId } = jwt.verify(token, process.env.REGISTER_TOKEN_SECRET);

	const user = await User.findByIdAndUpdate(userId, {
		isVerified: true,
	});

	await createTokenPair(user._id, res);

	res.status(200).json({ success: true });
	// redirect to home page thats logged in
}
