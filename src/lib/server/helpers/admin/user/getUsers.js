import User from "@/lib/server/models/User";
import getSingleUser from "@/lib/server/utils/getSingleUser";

export default async function (req, res) {
	try {
		const { userEmails } = req.query;
		if (!userEmails) {
			const users = await User.find({}).select("-password");
			res.status(200).json(users);
			return;
		}
		if (userEmails.length === 1) {
			const userData = await getSingleUser(userEmails[0]);
			res.status(200).json({ ...userData });
			return;
		} else {
			const users = await Promise.all(
				userEmails.map(async (email) => {
					const user = await getSingleUser(email);
					return { email, user };
				})
			);
			res.status(200).json(users);
		}
	} catch (error) {
		console.error(error);
		res.status(400).json(error);
	}
}
