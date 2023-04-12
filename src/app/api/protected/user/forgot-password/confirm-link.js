import jwt from "jsonwebtoken";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import ProfileInfo from "@/lib/server/models/ProfileInfo";

const SECRET = process.env.FORGOT_PASSWORD_SECRET;

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ success: false });
	}

	try {
		const { token } = req.query;

		const decoded = jwt.verify(token, SECRET);

		console.log("\n\ndecoded");
		console.log(decoded);

		const { email } = decoded;

		await connectMongo();

		console.log("\n\nemail");
		console.log(email);

		const profile = await ProfileInfo.findOne({ email });

		if (!profile) {
			return res.status(400).json({ success: false });
		}

		res.status(200).json({ success: true });

		// uncomment code below once frontend is ready
		// return res.redirect("http://localhost:3000/change-password/" + token);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false });
	}
}
