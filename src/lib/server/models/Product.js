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
	title: String,
	price: Number,
	salePrice: Number,
	stock: Number,
	description: String,
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
