import Product from "@/lib/server/models/Product";

export default async function (req, res) {
	try {
		await Promise.all(
			req.query.productIds.map(async (id) => {
				await Product.findByIdAndUpdate(id, { isDeleted: true });
			})
		);
		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
