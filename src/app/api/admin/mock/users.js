import connectMongo from "@/lib/server/services/connectMongo";
import verifyAdminAccessToken from "@/lib/server/services/verifyAdminAccessToken";
import { faker } from "@faker-js/faker";

const createUser = async () => {
	const url = "http://localhost:3000/api/admin/user/";
	const data = {
		firstName: `TEST${faker.name.firstName()}`,
		lastName: faker.name.lastName(),
		email: faker.internet.email(),
		password: "test123",
		contactNumber: "1231231234",
	};

	try {
		const verification = verifyAdminAccessToken(req);

		if (!verification.isSuccess) throw new Error(verification.message);

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		console.log("Test User created:", result);
	} catch (error) {
		console.error("Error creating user:", error);
	}
};

export default async function handler(req, res) {
	try {
		await connectMongo();
		if (req.method === "POST") {
			let { count } = req.body;
			await Promise.all(Array.from({ length: count }, () => createUser()));
			res.status(200).json({ message: "Users created" });
			return;
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
