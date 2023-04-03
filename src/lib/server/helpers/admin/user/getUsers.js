import getSingleUser from "@/lib/server/utils/getSingleUser";

export default async function (req, res) {
	try {
		if (req.query.userEmails.length === 1) {
			const userData = await getSingleUser(req.query.userEmails[0]);
			res.status(200).json({ ...userData });
		} else {
			const users = await Promise.all(
				req.query.userEmails.map(async (email) => {
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
