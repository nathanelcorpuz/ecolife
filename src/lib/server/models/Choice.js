import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const optionSchema = new Schema({
	value: { type: String, required: true },
	label: { type: String, required: true },
});

const choiceSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	title: { type: String, required: true },
	options: [optionSchema],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

const Choice = models.Choice || model("Choice", choiceSchema);

export default Choice;
