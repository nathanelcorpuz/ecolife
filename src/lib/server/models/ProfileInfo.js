import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const profileInfoSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" },
	fullName: { type: String, default: "" },
	email: {
		type: String,
		required: true,
		unique: true,
	},
	contactNumber: { type: String, default: "" },
	dateCreated: { type: Date, default: Date.now },
});

const ProfileInfo =
	models.ProfileInfo || model("ProfileInfo", profileInfoSchema);

export default ProfileInfo;
