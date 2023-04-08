import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import createTokenPair from "@/lib/server/services/createTokenPair";
import bcrypt from "bcrypt";

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

		await createTokenPair(user._id, res);

		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
}
