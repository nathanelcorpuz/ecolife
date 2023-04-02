import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const subCategorySchema = new Schema({
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
});

const SubCategory =
	models.SubCategory || model("SubCategory", subCategorySchema);

export default SubCategory;
