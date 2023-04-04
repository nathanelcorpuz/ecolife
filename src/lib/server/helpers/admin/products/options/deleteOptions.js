// import Option from "@/lib/server/models/Option";
// import Product from "@/lib/server/models/Product";

// export default async function (req, res) {
// 	try {
// 		const { optionIds, productId } = req.query;

// 		const product = await Product.findById(productId);

// 		if (!product || product.isDeleted) throw new Error("Product not found");

// 		await Promise.all(
// 			optionIds.map(async (id) =>
// 				Option.findByIdAndUpdate(id, { isDeleted: true })
// 			)
// 		);
// 		res.status(200).json("delete success");
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400).json(error.message);
// 	}
// }

import Option from "@/lib/server/models/Option";
import Product from "@/lib/server/models/Product";

export default async function (req, res) {
	try {
		const { optionIds, productId } = req.query;

		const product = await Product.findById(productId);

		if (!product || product.isDeleted) {
			throw new Error("Product not found");
		}

		await Option.updateMany({ _id: { $in: optionIds } }, { isDeleted: true });

		res.status(200).json("delete success");
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
