import RefreshToken from "@/lib/server/models/RefreshToken";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAccessToken from "@/lib/server/services/verifyAccessToken";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		const verification = verifyAccessToken(req);

		if (!verification) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		await connectMongo();

		const { password, newPassword } = req.body;

		const user = await User.findById(verification.userId);

		await bcrypt.compare(password, user.password);

		const hashedNewPassword = await bcrypt.hash(newPassword, +process.env.SALT);

		await User.findByIdAndUpdate(verification.userId, {
			password: hashedNewPassword,
		});

		await RefreshToken.updateMany(
			{ userId: verification.userId },
			{ $set: { isValid: false } }
		);

		return res.status(200).json({ message: "Password changed" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
