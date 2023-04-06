import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const shippingMethodSchema = new Schema({
	title: String,
	fee: Number,
	etaDays: Number,
	description: String,
	isActive: Boolean,
	dateCreated: { type: Date, default: Date.now },
});

const ShippingMethod =
	models.ShippingMethod || model("ShippingMethod", shippingMethodSchema);

export default ShippingMethod;
