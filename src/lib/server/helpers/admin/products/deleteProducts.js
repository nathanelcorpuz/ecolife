import Category from "@/lib/server/models/Category";
import Product from "@/lib/server/models/Product";
import SubCategory from "@/lib/server/models/SubCategory";

export default async function (req, res) {
	try {
		const { productIds } = req.query;

		await Product.updateMany({ _id: { $in: productIds } }, { isDeleted: true });

		await Option.updateMany(
			{ productId: { $in: productIds } },
			{ isDeleted: true }
		);

		await Category.updateMany(
			{ productIds: { $in: productIds } },
			{ $pull: { productIds: { $in: productIds } } }
		);

		await SubCategory.updateMany(
			{ productIds: { $in: productIds } },
			{ $pull: { productIds: { $in: productIds } } }
		);

		res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		res.status(400).json(error.message);
	}
}
