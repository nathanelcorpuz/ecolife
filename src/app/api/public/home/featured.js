import Product from "@/lib/server/models/Product";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ success: false });
	}
	try {
		await connectMongo();
		const featuredProducts = await Product.find({ type: "featured" }).limit(3);
		return res.status(200).json({ success: true, featuredProducts });
	} catch (error) {
		return res.status(500).json({ success: false });
	}
}
