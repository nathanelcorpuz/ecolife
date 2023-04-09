import ProfileInfo from "@/lib/server/models/ProfileInfo";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAccessToken from "@/lib/server/services/verifyAccessToken";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		return res.status(405).json({ success: false });
	}

	try {
		const verification = verifyAccessToken(req, res);

		if (!verification.isSuccess) {
			throw new Error(verification.message);
		}

		await connectMongo();

		const { userId } = verification;

		const fullName = `${req.body.firstName} ${req.body.lastName}`;

		await ProfileInfo.findOneAndUpdate({ userId }, { ...req.body, fullName });

		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false });
	}
}
