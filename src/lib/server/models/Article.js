import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const sectionSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
});

const headingSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	author: { type: String, required: true },
});

const articleSchema = new Schema({
	heading: headingSchema,
	sections: [sectionSchema],
	slug: { type: String, required: true },
	tags: [String],
	type: {
		type: String,
		enum: ["featured", "popular", "normal"],
		required: true,
	},
	isDraft: { type: Boolean, default: true },
	isDeleted: { type: Boolean, default: false },
	datePublished: { type: Date, default: null },
});

const Article = models.Article || model("Article", articleSchema);

export default Article;
