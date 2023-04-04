import Product from "@/lib/server/models/Product";

export default async function (req, res) {
	try {
		const { productIds } = req.query;

		await Product.updateMany({ _id: { $in: productIds } }, { isDeleted: true });

		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
