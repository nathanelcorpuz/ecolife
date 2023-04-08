import sendVerificationEmail from "@/lib/server/helpers/public/sendVerificationEmail";
import Cart from "@/lib/server/models/Cart";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import ShippingInfo from "@/lib/server/models/ShippingInfo";
import User from "@/lib/server/models/User";
import connectMongo from "@/lib/server/services/connectMongo";
import bcrypt from "bcrypt";

const SALT = +process.env.SALT;

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).json({ message: "Method not allowed" });
		return;
	}

	try {
		await connectMongo();
		// receive email and password from req.body
		const { email, password } = req.body;

		// apply bcrypt to password
		const hashedPassword = await bcrypt.hash(password, SALT);

		// create a new user with email and password
		const newUser = new User({ email, password: hashedPassword });

		// create and save shipping info
		const newShippingInfo = new ShippingInfo({ userId: newUser._id });
		await newShippingInfo.save();

		// create and save profile info
		const newProfileInfo = new ProfileInfo({ userId: newUser._id, email });
		await newProfileInfo.save();

		// create and save cart info
		const newCart = new Cart({ userId: newUser._id });
		await newCart.save();

		// save new docs to user
		newUser.shippingInfoId = newShippingInfo._id;
		newUser.profileInfoId = newProfileInfo._id;
		newUser.cartId = newCart._id;

		// save the new user to the database
		await newUser.save();

		// send verification email to user
		await sendVerificationEmail(email, newUser._id);

		// return the new user without the password
		const user = await User.findById(newUser._id).select("-password");

		res.status(200).json({ user });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
		return;
	}
}
