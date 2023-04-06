import connectMongo from "@/lib/server/services/connectMongo";
import Product from "@/lib/server/models/Product";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		res.status(405).json({ message: "Method not allowed" });
	}

	try {
		await connectMongo();

		const products = await Product.find({ type: "bestseller" }).limit(3);

		res.status(200).json({ products });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
}
