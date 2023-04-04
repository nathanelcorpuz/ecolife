import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const reviewSchema = new Schema({
	orderId: { type: Schema.Types.ObjectId, ref: "Order" },
	productId: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	rating: { type: Number, required: true },
	date: { type: Date, default: Date.now },
	comment: { type: String, required: true },
	isDeleted: { type: Boolean, default: false },
});

const Review = models.Review || model("Review", reviewSchema);

export default Review;
