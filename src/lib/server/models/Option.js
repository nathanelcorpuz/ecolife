import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const optionSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	title: { type: String, required: true },
	values: [{ type: String, required: true }],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

const Option = models.Option || model("Option", optionSchema);

export default Option;
