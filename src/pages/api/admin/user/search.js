import User from "@/lib/server/models/User";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		res.status(400).json({ message: "Invalid request method" });
		return;
	}
	try {
		await connectMongo();
		const { name, contactNumber } = req.query;
		let profiles = [];
		if (name) {
			profiles = await ProfileInfo.find({
				fullName: { $regex: name, $options: "i" },
			});
		} else if (contactNumber) {
			profiles = await ProfileInfo.find({
				contactNumber: { $regex: contactNumber, $options: "i" },
			});
		} else {
			res.status(400).json({ message: "Invalid query parameter" });
			return;
		}
		res.status(200).json({ profiles });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}
