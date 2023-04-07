import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.ACCESS_TOKEN_SECRET;
const EXPIRATION = +process.env.ACCESS_TOKEN_EXPIRATION_MINUTES;

export default async function handler(req, res) {
	try {
		await connectMongo();

		const { email, password } = req.body;

		const profileInfo = await ProfileInfo.findOne({ email });

		const user = await User.findById(profileInfo.userId);

		const pwValid = await bcrypt.compare(password, user.password);

		if (!pwValid) throw new Error("Incorrect password");

		if (!user.isVerified) {
			throw new Error(
				"Please verify your account by clicking on the link in your inbox / spam folder"
			);
		}

		const token = jwt.sign({ userId: user._id }, SECRET, {
			expiresIn: EXPIRATION,
		});

		res.status(200).json({ token });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
}