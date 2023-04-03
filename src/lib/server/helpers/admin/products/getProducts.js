import Product from "@/lib/server/models/Product";

export default async function (req, res) {
	try {
		const products = await Promise.all(
			req.query.productIds.map(async (productId) => Product.findById(productId))
		);
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json(error.message);
	}
}
