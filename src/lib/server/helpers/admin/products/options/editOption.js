import Option from "@/lib/server/models/Choice";
import Product from "@/lib/server/models/Product";

export default async function (req, res) {
	try {
		const { productId } = req.query;
		const { optionId } = req.body;

		const product = await Product.findById(productId);

		if (!product || product.isDeleted) throw new Error("Product not found");

		await Option.findByIdAndUpdate(optionId, { ...req.body.newOption });

		res.status(200).json("Edit success");
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
