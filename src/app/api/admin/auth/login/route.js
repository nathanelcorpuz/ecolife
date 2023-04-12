import ProfileInfo from "@/lib/server/models/ProfileInfo";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import createAdminAccessToken from "@/lib/server/services/createAdminAccessToken";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).json({ message: "Method not allowed" });
		return;
	}

	try {
		await connectMongo();

		const { email, password } = req.body;

		const profileInfo = await ProfileInfo.findOne({ email });

		const user = await User.findById(profileInfo.userId);

		if (user.role !== "admin") {
			res.status(401).json({ message: "Unauthorized" });
			return;
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			res.status(401).json({ message: "Unauthorized" });
			return;
		}

		createAdminAccessToken(user._id, res);

		res.status(200).json({ message: "Admin user logged in" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
}
