import Option from "@/lib/server/models/Choice";
import Product from "@/lib/server/models/Product";

export default async function (req, res) {
	try {
		const { productId, optionIds } = req.query;
		const product = await Product.findById(productId);

		if (!product || product.isDeleted) {
			throw new Error("Product not found");
		}

		const query = optionIds ? { _id: { $in: optionIds } } : { productId };

		const options = await Option.find(query);

		res.status(200).json(options.length === 1 ? options[0] : options);
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
