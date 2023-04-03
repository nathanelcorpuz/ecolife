import User from "@/lib/server/models/User";
import ProfileInfo from "@/lib/server/models/ProfileInfo";

export default async function (req, res) {
	try {
		await Promise.all(
			req.query.userEmails.map(async (email) => {
				const profileInfo = await ProfileInfo.findOne({ email });
				await User.findByIdAndUpdate(profileInfo.userId, { isDeleted: true });
			})
		);
		res.status(200).json({ message: "User deleted successfully." });
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
