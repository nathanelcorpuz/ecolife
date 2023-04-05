import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const productsSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	quantity: Number,
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
