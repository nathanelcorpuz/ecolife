import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const paymentMethodSchema = new Schema({
	title: String,
	isActive: Boolean,
});

const PaymentMethod =
	models.PaymentMethod || model("PaymentMethod", paymentMethodSchema);

export default PaymentMethod;
