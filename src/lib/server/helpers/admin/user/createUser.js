import Cart from "@/lib/server/models/Cart";
import ProfileInfo from "@/lib/server/models/ProfileInfo";
import ShippingInfo from "@/lib/server/models/ShippingInfo";
import User from "@/lib/server/models/User";

export default async function (req, res) {
	const { firstName, lastName, email, password, contactNumber } = req.body;

	const newProfileInfoObj = {
		firstName,
		lastName,
		fullName: `${firstName} ${lastName}`,
		email,
		contactNumber,
	};

	const newProfileInfo = new ProfileInfo(newProfileInfoObj);

	const newUserObj = {
		profileInfoId: newProfileInfo._id,
		password,
	};

	const newUser = new User(newUserObj);

	const newShippingInfo = new ShippingInfo({ userId: newUser._id });

	const newCart = new Cart({ userId: newUser._id });

	newUser.cartId = newCart._id;

	newUser.shippingInfoId = newShippingInfo._id;

	newProfileInfo.userId = newUser._id;

	const savePromises = [
		newProfileInfo.save(),
		newShippingInfo.save(),
		newUser.save(),
		newCart.save(),
	];

	try {
		await Promise.all(savePromises)
			.then((savedDocs) => {
				res.status(200).json(savedDocs);
			})
			.catch((error) => {
				console.error("Error saving documents:", error);
				throw new Error(error);
			});
	} catch (error) {
		res.status(400).json(error.message);
	}
	return;
}
