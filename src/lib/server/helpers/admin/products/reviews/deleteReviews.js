import Product from "@/lib/server/models/Product";
import Review from "@/lib/server/models/Review";

export default async function (req, res) {
	try {
		const { productId, reviewIds } = req.query;

		const product = await Product.findById(productId);

		if (!product || product.isDeleted) throw new Error("Product not found");

		await Review.updateMany({ _id: { $in: reviewIds } }, { isDeleted: true });

		res.status(200).json({ message: "Reviews deleted" });
	} catch (error) {
		res.status(400).json(error.message);
	}
}
