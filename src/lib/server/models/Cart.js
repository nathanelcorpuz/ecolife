import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const cartItemSchema = new Schema({
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
	cartItems: [cartItemSchema],
});

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart;
