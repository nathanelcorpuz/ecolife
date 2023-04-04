import Product from "@/lib/server/models/Product";
import slugify from "slugify";

export default async function (req, res) {
	try {
		const slug = slugify(req.body.title);

		const newProductObj = { ...req.body, slug };

		const newProduct = new Product(newProductObj);

		await newProduct.save();

		res.status(200).json(newProduct);

		res.status(200).json(req.query);
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
