import Option from "@/lib/server/models/Option";
import Product from "@/lib/server/models/Product";

export default async function (req, res) {
	try {
		const { productId } = req.query;

		const product = await Product.findById(req.query.productId);

		const newOptionObj = new Option({ productId, ...req.body });

		await product.updateOne({ $push: { optionIds: newOptionObj._id } });

		const newOption = await newOptionObj.save();

		res.status(200).json(newOption);
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
