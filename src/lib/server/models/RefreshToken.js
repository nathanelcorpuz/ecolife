import "server-only";

import { Schema, model, models } from "mongoose";

const refreshTokenSchema = new Schema({
	token: { type: String, required: true, unique: true },
	isValid: { type: Boolean, default: true },
	userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
	numOfTimesUsed: { type: Number, default: 0 },
	dateCreated: { type: Date, default: Date.now },
});

const RefreshToken =
	models.RefreshToken || model("RefreshToken", refreshTokenSchema);

export default RefreshToken;
