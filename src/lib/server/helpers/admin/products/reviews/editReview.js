import Product from "@/lib/server/models/Product";
import Review from "@/lib/server/models/Review";

export default async function (req, res) {
	try {
		const { productId, reviewIds } = req.query;

		const reviewId = reviewIds[0];

		const product = await Product.findById(productId);

		if (!product || product.isDeleted) throw new Error("Product not found");

		const review = await Review.findById(reviewId);

		if (!review || review.isDeleted) throw new Error("Review not found");

		await review.updateOne(req.body);

		res.status(200).json({ message: "Review edited" });
	} catch (error) {
		res.status(400).json(error.message);
	}
}
