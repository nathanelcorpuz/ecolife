// shippingInfo.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const shippingInfoSchema = new Schema({
	name: String,
	address: String,
	city: String,
	state: String,
	postalCode: String,
	country: String,
	contactNumber: String,
});

const ShippingInfo =
	models.ShippingInfo || model("ShippingInfo", shippingInfoSchema);

export default ShippingInfo;
