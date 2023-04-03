import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
	cartId: {
		type: Schema.Types.ObjectId,
		ref: "Cart",
		required: true,
	},
	profileInfoId: {
		type: Schema.Types.ObjectId,
		ref: "ProfileInfo",
		required: true,
	},
	shippingInfoId: {
		type: Schema.Types.ObjectId,
		ref: "ShippingInfo",
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["customer", "admin"],
		default: "customer",
	},
	orderIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Order",
		},
	],
	reviewIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	],
});

const User = models.User || model("User", userSchema);

export default User;
