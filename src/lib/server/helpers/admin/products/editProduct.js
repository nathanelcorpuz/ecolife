import Product from "@/lib/server/models/Product";
import slugify from "slugify";

export default async function (req, res) {
	try {
		if (req.body.title) {
			req.body.slug = slugify(req.body.title);
		}
		await Product.findByIdAndUpdate(req.query.productIds[0], req.body);
		res.status(200).json({ message: "Product updated" });
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
