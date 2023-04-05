import { faker } from "@faker-js/faker"; // for testing
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

	// for testing
	const newShippingInfoObj = {
		userId: newUser._id, // the only thing needed for production
		name: `TEST${faker.name.fullName()}`,
		address: faker.address.streetAddress(),
		city: faker.address.city(),
		state: faker.address.state(),
		postalCode: faker.address.zipCode(),
		country: faker.address.country(),
		contactNumber: faker.phone.phoneNumber(),
	};

	const newShippingInfo = new ShippingInfo(newShippingInfoObj);

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
		res.status(500).json(error.message);
	}
	return;
}
