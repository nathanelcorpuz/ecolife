import Product from "@/lib/server/models/Product";
import { sanitize } from "isomorphic-dompurify";
import slugify from "slugify";

export default async function (req, res) {
	try {
		const slug = slugify(req.body.title);

		const newProductObj = {
			...req.body,
			slug,
			description: sanitize(req.body.description),
		};

		const newProduct = new Product(newProductObj);

		await newProduct.save();

		res.status(200).json(newProduct);
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
