import Product from "@/lib/server/models/Product";
import Review from "@/lib/server/models/Review";

export default async function (req, res) {
	try {
		const { productId, reviewIds } = req.query;

		const product = await Product.findById(productId);

		if (!product || product.isDeleted) throw new Error("Product not found");

		if (!reviewIds) {
			const reviews = await Review.find({ productId: product._id });
			res.status(200).json(reviews);
			return;
		}

		if (reviewIds.length === 1) {
			const review = await Review.findById(reviewIds[0]);
			res.status(200).json(review);
			return;
		}

		const reviews = await Review.find({ _id: { $in: reviewIds } });

		res.status(200).json(reviews);
	} catch (error) {
		res.status(400).json(error.message);
	}
}
