import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const paymentMethodSchema = new Schema({
	title: String,
	isActive: Boolean,
	dateCreated: { type: Date, default: Date.now },
});

const PaymentMethod =
	models.PaymentMethod || model("PaymentMethod", paymentMethodSchema);

export default PaymentMethod;
