import Category from "@/lib/server/models/Category";
import Product from "@/lib/server/models/Product";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		res.status(405).json({ success: false });
		return;
	}
	try {
		await connectMongo();
		const { slug, skip = 0 } = req.query;

		const category = await Category.findOne({ slug });

		const products = await Product.find({
			categoryIds: { $in: [category._id] },
		})
			.sort({ dateCreated: -1 })
			.skip(parseInt(skip))
			.limit(6);

		res.status(200).json({ success: true, category, products });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
