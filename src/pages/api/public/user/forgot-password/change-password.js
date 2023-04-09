import User from "@/lib/server/models/User";
import jwt from "jsonwebtoken";
import bcryt from "bcrypt";
import connectMongo from "@/lib/server/services/connectMongo";
import ProfileInfo from "@/lib/server/models/ProfileInfo";

const SECRET = process.env.FORGOT_PASSWORD_SECRET;
const SALT = +process.env.SALT;

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		return res.status(405).json({ success: false });
	}

	try {
		const { token, password, newPassword } = req.body;

		const decoded = jwt.verify(token, SECRET);

		const { email } = decoded;

		await connectMongo();

		const profile = await ProfileInfo.findOne({ email });

		const user = await User.findById(profile.userId);

		const isPwValid = await bcryt.compare(password, user.password);

		if (!isPwValid) throw new Error("Invalid password");

		const hashedPassword = await bcryt.hash(newPassword, SALT);

		await user.updateOne({ password: hashedPassword });

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false });
	}
}
