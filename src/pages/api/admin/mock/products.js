import connectMongo from "@/lib/server/services/connectMongo";
import { faker } from "@faker-js/faker";

const createProduct = async () => {
	const url = "http://localhost:3000/api/admin/products/";
	const price = faker.commerce.price();
	const data = {
		title: `TEST${faker.commerce.productName()}`,
		price,
		salePrice: (price / 2).toFixed(2),
		stock: faker.datatype.number(100),
		description: faker.lorem.paragraph(),
	};

	try {
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
			await Promise.all(Array.from({ length: count }, () => createProduct()));
			res.status(200).json({ message: "Products created" });
			return;
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
