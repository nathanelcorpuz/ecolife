import Product from "@/lib/server/models/Product";
import Review from "@/lib/server/models/Review";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		await connectMongo();

		const { slug } = req.query;

		const product = await Product.findOne({ slug });

		const reviews = await Review.find({ productId: product._id });

		const related = await Product.find({
			_id: { $ne: product._id },
			categoryIds: { $in: product.categoryIds },
		}).limit(3);

		res.status(200).json({ product, reviews, related });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}
