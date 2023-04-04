import Order from "@/lib/server/models/Order";
import Product from "@/lib/server/models/Product";
import Review from "@/lib/server/models/Review";
import User from "@/lib/server/models/User";

export default async function (req, res) {
	try {
		const { productId } = req.query;
		const { orderId, userId } = req.body;

		const [product, user, order] = await Promise.all([
			Product.findById(productId),
			User.findById(userId),
			orderId ? Order.findById(orderId) : null,
		]);

		if (!product || product.isDeleted) {
			throw new Error("Product not found");
		}

		if (!user || user.isDeleted) {
			throw new Error("User not found");
		}

		if (orderId && (!order || order.isDeleted)) {
			throw new Error("Order not found");
		}

		const review = new Review(req.body);

		await review.save();

		await Promise.all([
			product.updateOne({ $push: { reviewIds: review._id } }),
			user.updateOne({ $push: { reviewIds: review._id } }),
			orderId && order.updateOne({ $push: { reviewIds: review._id } }),
		]);

		res.status(200).json({ message: "Review created" });
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
