import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const choiceSchema = new Schema({
	title: String,
	value: String,
});

const categorySchema = new Schema({
	id: Schema.Types.ObjectId,
	title: String,
	subCategory: {
		id: Schema.Types.ObjectId,
		title: String,
	},
});

const productSchema = new Schema({
	id: Schema.Types.ObjectId,
	choices: [choiceSchema],
	category: categorySchema,
	quantity: Number,
	title: String,
	price: Number,
	salePrice: Number,
	stock: Number,
	description: String,
	imageUrls: [String],
});

const paymentMethodSchema = new Schema({
	title: String,
	active: Boolean,
});

const paymentInformationSchema = new Schema({
	cardLast4: String,
	cardInitials: String,
});

const shippingMethodSchema = new Schema({
	id: Schema.Types.ObjectId,
	title: String,
	fee: Number,
	etaDays: Number,
	description: String,
});

const shippingInformationSchema = new Schema({
	shippingMethod: shippingMethodSchema,
	name: String,
	address: String,
	city: String,
	state: String,
	postalCode: String,
	country: String,
	contactNumber: String,
});

const breakdownSchema = new Schema({
	subtotal: Number,
	tax: Number,
	shippingFee: Number,
});

const orderSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	profileInfo: {
		name: String,
		contactNumber: String,
		email: String,
	},
	paymentMethod: paymentMethodSchema,
	paymentInformation: paymentInformationSchema,
	shippingInformation: shippingInformationSchema,
	products: [productSchema],
	breakdown: breakdownSchema,
	reviewId: {
		type: Schema.Types.ObjectId,
		ref: "Review",
	},
	dateCreated: { type: Date, default: Date.now },
});

const Order = models.Order || model("Order", orderSchema);

export default Order;
