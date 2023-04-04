import createProduct from "@/lib/server/helpers/admin/products/createProduct";
import Product from "@/lib/server/models/Product";
import connectMongo from "@/lib/server/services/connectMongo";

export default async function handler(req, res) {
	try {
		await connectMongo();

		if (req.method === "POST") {
			await createProduct(req, res);
			return;
		} else if (req.method === "GET") {
			const products = await Product.find({});
			res.status(200).json(products);
		} else {
			throw new Error("No method found");
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}
