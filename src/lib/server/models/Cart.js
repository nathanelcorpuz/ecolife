import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const optionsSchema = new Schema({
	choiceId: {
		type: Schema.Types.ObjectId,
		ref: "Choice",
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	value: {
		type: String,
		required: true,
	},
});

const productSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	quantity: { type: Number, default: 1 },
	options: [optionsSchema],
	dateCreated: { type: Date, default: Date.now },
});

const cartSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	products: [productSchema],
	dateCreated: { type: Date, default: Date.now },
});

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
