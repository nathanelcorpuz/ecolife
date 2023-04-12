import Order from "@/lib/server/models/Order";
import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		res.status(400).json({ message: "Invalid request method" });
		return;
	}

	try {
		const verification = verifyAdminAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		await connectMongo();
		const { orderId } = req.query;
		const order = await Order.findById(orderId);
		res.status(200).json({ order });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}
