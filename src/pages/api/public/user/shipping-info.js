import ShippingInfo from "@/lib/server/models/ShippingInfo";
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

		await ShippingInfo.findOneAndUpdate({ userId }, { ...req.body });

		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false });
	}
}
