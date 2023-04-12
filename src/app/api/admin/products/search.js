import Product from "@/lib/server/models/Product";
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
		const { keywords } = req.query;

		if (!keywords) {
			res.status(400).json({ message: "Invalid query parameter" });
			return;
		}

		const products = await Product.find({
			$or: [
				{ title: { $regex: keywords, $options: "i" } },
				{ description: { $regex: keywords, $options: "i" } },
			],
		});

		res.status(200).json({ products });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}
