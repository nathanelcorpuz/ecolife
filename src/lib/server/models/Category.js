import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const categorySchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, default: "" },
	subcategoryIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "SubCategory",
		},
	],
	productIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],
	isDeleted: { type: Boolean, default: false },
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
