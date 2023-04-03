import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const productSchema = new Schema({
	optionIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Option",
		},
	],
	categoryId: {
		type: Schema.Types.ObjectId,
		ref: "Category",
	},
	title: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	salePrice: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	isActive: { type: Boolean, default: false },
	isDeleted: { type: Boolean, default: false },
	imageUrls: [String],
	reviewIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	],
});

const Product = models.Product || model("Product", productSchema);

export default Product;
