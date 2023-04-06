import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const optionsSchema = new Schema({
	optionId: {
		type: Schema.Types.ObjectId,
		ref: "Option",
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

const productsSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	quantity: { type: Number, default: 1 },
	options: [optionsSchema],
});

const cartSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	products: [productsSchema],
});

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
