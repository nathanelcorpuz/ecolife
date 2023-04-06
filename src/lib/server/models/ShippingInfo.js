// shippingInfo.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const shippingInfoSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	name: {
		type: String,
		default: "",
	},
	address: {
		type: String,
		default: "",
	},
	city: {
		type: String,
		default: "",
	},
	state: {
		type: String,
		default: "",
	},
	postalCode: {
		type: String,
		default: "",
	},
	country: {
		type: String,
		default: "",
	},
	contactNumber: {
		type: String,
		default: "",
	},
	dateCreated: { type: Date, default: Date.now },
});

const ShippingInfo =
	models.ShippingInfo || model("ShippingInfo", shippingInfoSchema);

export default ShippingInfo;
