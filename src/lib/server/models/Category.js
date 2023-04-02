import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const categorySchema = new Schema({
	title: String,
	subcategoryId: {
		type: Schema.Types.ObjectId,
		ref: "SubCategory",
	},
	productIds: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
