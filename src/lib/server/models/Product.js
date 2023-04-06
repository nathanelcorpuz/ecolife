import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const productSchema = new Schema({
	type: [
		{
			type: String,
			enum: ["normal", "featured", "bestseller"],
			default: "normal",
		},
	],
	optionIds: [{ type: Schema.Types.ObjectId, ref: "Option" }],
	categoryIds: [{ type: Schema.Types.ObjectId, ref: "Category" }],
	subCategoryIds: [{ type: Schema.Types.ObjectId, ref: "SubCategory" }],
	title: { type: String, required: true },
	slug: { type: String, required: true },
	price: { type: Number, required: true },
	salePrice: { type: Number, required: true },
	stock: { type: Number, required: true },
	description: { type: String, required: true },
	isActive: { type: Boolean, default: false },
	isDeleted: { type: Boolean, default: false },
	imageUrls: [String],
	reviewIds: [{ type: Schema.Types.ObjectId, ref: "Review" }],
	dateCreated: { type: Date, default: Date.now },
});

const Product = models.Product || model("Product", productSchema);

export default Product;
