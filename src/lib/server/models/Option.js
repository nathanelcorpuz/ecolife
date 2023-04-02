import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const optionSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	title: String,
	valueStrings: [String],
});

const Option = models.Option || model("Option", optionSchema);

export default Option;
