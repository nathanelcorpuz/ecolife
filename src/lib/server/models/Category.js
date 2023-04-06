import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const categorySchema = new Schema({
	title: { type: String, required: true },
	slug: { type: String, required: true, unique: true, lowercase: true },
	description: { type: String, default: "" },
	subCategoryIds: [{ type: Schema.Types.ObjectId, ref: "SubCategory" }],
	productIds: [{ type: Schema.Types.ObjectId, ref: "Product" }],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
