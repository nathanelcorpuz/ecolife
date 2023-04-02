// profileInfo.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const profileInfoSchema = new Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true,
	},
	contactNumber: String,
});

const ProfileInfo =
	models.ProfileInfo || model("ProfileInfo", profileInfoSchema);

export default ProfileInfo;
