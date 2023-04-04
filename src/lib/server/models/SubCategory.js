import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const subCategorySchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, default: "" },
	categoryId: {
		type: Schema.Types.ObjectId,
		ref: "Category",
	},
	productIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],
	isDeleted: { type: Boolean, default: false },
});

const SubCategory =
	models.SubCategory || model("SubCategory", subCategorySchema);

export default SubCategory;
