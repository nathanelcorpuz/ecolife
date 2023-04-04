import Category from "@/lib/server/models/Category";
import SubCategory from "@/lib/server/models/SubCategory";

export default async function (req, res) {
	try {
		const query = !req.query.categoryIds
			? {}
			: { _id: { $in: req.query.categoryIds } };

		const categories = await Category.find(query);

		const subCategories = await SubCategory.find(query);

		res.status(200).json({ categories, subCategories });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
}
