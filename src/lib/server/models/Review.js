import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const reviewSchema = new Schema({
	orderId: {
		type: Schema.Types.ObjectId,
		ref: "Order",
	},
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	date: { type: Date, default: Date.now },
	description: { type: String, required: true },
});

const Review = models.Review || model("Review", reviewSchema);

export default Review;
