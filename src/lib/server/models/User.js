import "server-only";
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
	cartId: {
		type: Schema.Types.ObjectId,
		ref: "Cart",
		required: false, // change to true later
	},
	profileInfoId: {
		type: Schema.Types.ObjectId,
		ref: "ProfileInfo",
		required: false, // change to true later
	},
	shippingInfoId: {
		type: Schema.Types.ObjectId,
		ref: "ShippingInfo",
		required: false, // change to true later
	},
	email: {
		type: String,
		required: true,
		unique: true,
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
	isDeleted: {
		type: Boolean,
		default: false,
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
	dateCreated: { type: Date, default: Date.now },
	isVerified: { type: Boolean, default: false },
});

const User = models.User || model("User", userSchema);

export default User;
